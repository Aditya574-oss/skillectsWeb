import { fmtCompact } from './calc'

const LEFT = 38
const RIGHT = 14
const TOP = 26
const BOTTOM = 22
const W = 196
const H = 130
const VIEW_W = LEFT + W + RIGHT
const VIEW_H = TOP + H + BOTTOM
const PAD_X = 14

export default function RevenueGrowthChart({ withSkillects, currentState }) {
  const max = Math.max(...withSkillects, ...currentState) * 1.2 || 1
  const xs = [LEFT + PAD_X, LEFT + W / 2, LEFT + W - PAD_X]
  const anchors = ['start', 'middle', 'end']
  const valueToY = (v) => TOP + H - (v / max) * H

  const withPts = withSkillects.map((v, i) => [xs[i], valueToY(v)])
  const curPts = currentState.map((v, i) => [xs[i], valueToY(v)])
  const toPath = (pts) => pts.map((p) => p.join(',')).join(' ')

  const gridFracs = [0, 0.5, 1]

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-[11px] font-medium text-gray-600">
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="inline-block w-3.5 h-0.5 bg-brand-blue" /> With SKILLECTS
        </span>
        <span className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="inline-block w-3.5 h-0 border-t-2 border-dashed border-gray-400" />
          Current State
        </span>
      </div>

      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full">
        {gridFracs.map((f) => {
          const y = TOP + H - f * H
          return (
            <g key={f}>
              <line x1={LEFT} y1={y} x2={LEFT + W} y2={y} stroke="#f1f5f9" strokeWidth={1} />
              <text x={LEFT - 5} y={y + 3} textAnchor="end" className="fill-gray-400" style={{ fontSize: 8.5 }}>
                {fmtCompact(max * f)}
              </text>
            </g>
          )
        })}

        <polyline points={toPath(curPts)} fill="none" stroke="#9ca3af" strokeWidth={1.75} strokeDasharray="3 3" />
        <polyline points={toPath(withPts)} fill="none" stroke="#1E40FF" strokeWidth={2.25} />

        {curPts.map(([x, y], i) => (
          <g key={`c${i}`}>
            <circle cx={x} cy={y} r={3} fill="white" stroke="#9ca3af" strokeWidth={1.75} />
            <text
              x={x}
              y={y - 8}
              textAnchor={anchors[i]}
              className="fill-gray-500"
              style={{ fontSize: 9, fontWeight: 600 }}
            >
              {fmtCompact(currentState[i])}
            </text>
          </g>
        ))}
        {withPts.map(([x, y], i) => (
          <g key={`w${i}`}>
            <circle cx={x} cy={y} r={3.5} fill="white" stroke="#1E40FF" strokeWidth={2} />
            <text
              x={x}
              y={y - 8}
              textAnchor={anchors[i]}
              className="fill-brand-blue"
              style={{ fontSize: 9.5, fontWeight: 700 }}
            >
              {fmtCompact(withSkillects[i])}
            </text>
          </g>
        ))}

        {xs.map((x, i) => (
          <text key={i} x={x} y={VIEW_H - 4} textAnchor={anchors[i]} className="fill-gray-500" style={{ fontSize: 9 }}>
            Year {i + 1}
          </text>
        ))}
      </svg>
    </div>
  )
}
