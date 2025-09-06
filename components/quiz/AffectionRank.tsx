"use client"

import { Heart } from "lucide-react"

interface AffectionRankProps {
  rank: number
  maxRank?: number
}

export function AffectionRank({ rank, maxRank = 5 }: AffectionRankProps) {
  const fillPercentage = (rank / maxRank) * 100

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width="128" height="128" viewBox="0 0 24 24" className="relative">
        {/* ハートの背景（薄いピンク） */}
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#fee2e2" // bg-pink-100
        />
        {/* ハートの塗りつぶし部分（濃いピンク） */}
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="#e11d48" // text-pink-600
          style={{
            clipPath: `inset(${100 - fillPercentage}% 0 0 0)`,
            transition: 'clip-path 1s ease-out',
          }}
        />
        {/* ランクの数字 */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="#fff"
          fontFamily="serif"
        >
          {rank}
        </text>
      </svg>
      <p className="mt-2 text-sm font-bold text-foreground">伝統品愛着度ランク</p>
    </div>
  )
}

