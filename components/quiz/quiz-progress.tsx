//components>quiz>quiz-progress.tsx
import { cn } from "@/lib/utils"

interface QuizProgressProps {
  current: number
  total: number
  className?: string
}

export function QuizProgress({ current, total, className }: QuizProgressProps) {
  const percentage = (current / total) * 100

  return (
    <div className={cn("space-y-3 animate-fade-in", className)}>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span className="font-medium">
          問題 {current} / {total}
        </span>
        <span className="font-medium">{Math.round(percentage)}% 完了</span>
      </div>
      <div className="relative">
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-500 ease-out relative overflow-hidden"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow"></div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-30"></div>
      </div>
    </div>
  )
}
