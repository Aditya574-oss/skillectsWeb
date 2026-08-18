const R = 80
const CX = 100
const CY = 96
const STROKE = 14
const ARC_LEN = Math.PI * R

function pointOnArc(t) {
  const angle = Math.PI - t * Math.PI
  return {
    x: CX + R * Math.cos(angle),
    y: CY - R * Math.sin(angle),
  }
}

export default function DeliveryHealthGauge({ score, rating }) {
  const t = Math.min(1, Math.max(0, score / 100))
  const marker = pointOnArc(t)

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 116" className="w-48">
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
        <path
          d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={STROKE}
          strokeLinecap="round"
        />
        <path
          d={`M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={`${ARC_LEN * t} ${ARC_LEN}`}
        />
        <circle cx={marker.x} cy={marker.y} r={7} fill="white" stroke="#1E40FF" strokeWidth={3} />
        <text x={CX} y={CY - 8} textAnchor="middle" className="fill-gray-900" style={{ fontSize: 34, fontWeight: 800 }}>
          {Math.round(score)}
        </text>
        <text x={CX} y={CY + 14} textAnchor="middle" className="fill-gray-400" style={{ fontSize: 12, fontWeight: 600 }}>
          /100
        </text>
      </svg>
      <p className="font-extrabold text-green-600 text-sm tracking-wide -mt-1">{rating.toUpperCase()}</p>
    </div>
  )
}
