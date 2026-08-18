const CAPTURE_SCALE = 1.5
const MARGIN_MM = 10
const GAP_MM = 6

function hideAndRevealForPdf(clonedDoc) {
  clonedDoc.querySelectorAll('[data-pdf-hide]').forEach((el) => {
    el.style.display = 'none'
  })
  clonedDoc.querySelectorAll('[data-pdf-show]').forEach((el) => {
    el.style.display = el.getAttribute('data-pdf-show') || 'block'
  })
}

async function captureBlock(html2canvas, block) {
  const canvas = await html2canvas(block, {
    scale: CAPTURE_SCALE,
    backgroundColor: '#ffffff',
    useCORS: true,
    onclone: hideAndRevealForPdf,
  })
  return canvas.toDataURL('image/jpeg', 0.92)
}

// Draws an image that may be taller than one page, spilling onto new pages.
// jsPDF has no source-rect clipping, so each page redraws the full image shifted
// upward by what's already been shown — the page boundary itself clips the rest.
function placeTallImage(pdf, imgData, x, y, width, height, pageWidth, pageHeight) {
  let remaining = height
  let drawY = y
  pdf.addImage(imgData, 'JPEG', x, drawY, width, height)
  remaining -= pageHeight - y

  while (remaining > 0) {
    pdf.addPage()
    drawY = -(height - remaining)
    pdf.addImage(imgData, 'JPEG', x, drawY, width, height)
    remaining -= pageHeight - MARGIN_MM * 2
  }
}

export async function downloadReportPdf(elements, filename = 'skillects-revenue-report.pdf') {
  const blocks = (Array.isArray(elements) ? elements : [elements]).filter(Boolean)
  if (blocks.length === 0) return

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ])

  const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const usableWidth = pageWidth - MARGIN_MM * 2
  const usableHeight = pageHeight - MARGIN_MM * 2

  let cursorY = MARGIN_MM
  let onFreshPage = true

  for (const block of blocks) {
    const imgData = await captureBlock(html2canvas, block)
    const dims = await new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve({ w: img.width, h: img.height })
      img.src = imgData
    })

    const imgWidth = usableWidth
    const imgHeight = (dims.h * imgWidth) / dims.w

    if (!onFreshPage && cursorY + imgHeight > pageHeight - MARGIN_MM) {
      pdf.addPage()
      cursorY = MARGIN_MM
      onFreshPage = true
    }

    if (imgHeight > usableHeight) {
      placeTallImage(pdf, imgData, MARGIN_MM, cursorY, imgWidth, imgHeight, pageWidth, pageHeight)
      cursorY = MARGIN_MM
      onFreshPage = true
    } else {
      pdf.addImage(imgData, 'JPEG', MARGIN_MM, cursorY, imgWidth, imgHeight)
      cursorY += imgHeight + GAP_MM
      onFreshPage = false
    }
  }

  pdf.save(filename)
}
