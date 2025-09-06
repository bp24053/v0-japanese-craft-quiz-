"use client"
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from "recharts"

interface ScoreDonutChartProps {
  accuracy: number
}

const COLORS = ["#88d1e3", "#f0eae0"] // 水色, クリーム色

export function ScoreDonutChart({ accuracy }: ScoreDonutChartProps) {
  const data = [
    { name: "Correct", value: accuracy },
    { name: "Incorrect", value: 100 - accuracy },
  ]

  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {/* ★★★ 変更点：Labelの代わりに、直接Text要素を配置 ★★★ */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#5a677d"
            fontSize="32px"
            fontWeight="bold"
            fontFamily="serif"
          >
            {`${Math.round(accuracy)} %`}
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

