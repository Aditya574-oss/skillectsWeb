// Captures section screenshots + computed text styles from a running localhost app,
// driven by a JSON config (see --config). Used by the /design-review command.
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const configPath = process.argv.find((a) => a.startsWith('--config='))?.split('=')[1]
if (!configPath) {
  console.error('Usage: node capture.mjs --config=<path-to-json>')
  process.exit(1)
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'))
const { url, outDir, viewports, sections } = config

fs.mkdirSync(outDir, { recursive: true })

const TEXT_SELECTOR = 'h1,h2,h3,h4,h5,h6,p,a,button,span,li,label'

const browser = await chromium.launch()
const manifest = { url, sections: {} }

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height } })
  await page.goto(url, { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(300)

  for (const section of sections) {
    manifest.sections[section.name] ??= {}
    const sectionDir = path.join(outDir, section.name)
    fs.mkdirSync(sectionDir, { recursive: true })

    const locator = page.locator(section.selector).first()
    const count = await locator.count()
    if (count === 0) {
      manifest.sections[section.name][viewport.name] = { error: `selector not found: ${section.selector}` }
      continue
    }

    await locator.scrollIntoViewIfNeeded()
    await page.waitForTimeout(150)

    // Absolute document coordinates (independent of current scroll position),
    // needed because fullPage screenshots use document space, not viewport space.
    const box = await locator.evaluate((el) => {
      const r = el.getBoundingClientRect()
      return { x: r.x + window.scrollX, y: r.y + window.scrollY, width: r.width, height: r.height }
    })
    const MAX_SLICE_HEIGHT = 1400
    const screenshotPaths = []
    if (box.height > MAX_SLICE_HEIGHT) {
      let offset = 0
      let i = 1
      while (offset < box.height) {
        const sliceHeight = Math.min(MAX_SLICE_HEIGHT, box.height - offset)
        const slicePath = path.join(sectionDir, `${viewport.name}-${i}.png`)
        await page.screenshot({ path: slicePath, fullPage: true, clip: { x: box.x, y: box.y + offset, width: box.width, height: sliceHeight } })
        screenshotPaths.push(slicePath)
        offset += sliceHeight
        i += 1
      }
    } else {
      const screenshotPath = path.join(sectionDir, `${viewport.name}.png`)
      await page.screenshot({ path: screenshotPath, fullPage: true, clip: box })
      screenshotPaths.push(screenshotPath)
    }

    const styles = await locator.evaluate((root, sel) => {
      const seen = new Set()
      const results = []
      for (const el of root.querySelectorAll(sel)) {
        const text = (el.textContent || '').trim()
        if (!text) continue
        const rect = el.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) continue
        const key = el.tagName + '|' + text
        if (seen.has(key)) continue
        seen.add(key)
        const cs = window.getComputedStyle(el)
        results.push({
          tag: el.tagName.toLowerCase(),
          text: text.slice(0, 80),
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          color: cs.color,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          textAlign: cs.textAlign,
          rect: { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) },
        })
      }
      return results
    }, TEXT_SELECTOR)

    const stylesPath = path.join(sectionDir, `${viewport.name}.styles.json`)
    fs.writeFileSync(stylesPath, JSON.stringify(styles, null, 2))

    manifest.sections[section.name][viewport.name] = { screenshots: screenshotPaths, styles: stylesPath }
  }

  await page.close()
}

await browser.close()

fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`Done. Manifest: ${path.join(outDir, 'manifest.json')}`)
