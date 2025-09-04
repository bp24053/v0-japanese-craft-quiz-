"use client"

import type { QuizQuestion } from "@/types/quiz"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CheckCircle, XCircle, Info } from "lucide-react"

interface QuestionDisplayProps {
  question: QuizQuestion
  selectedAnswer: string | null
  onAnswerSelect: (answer: string) => void
  showExplanation: boolean
  className?: string
}

export function QuestionDisplay({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation,
  className,
}: QuestionDisplayProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      history: "歴史・人物",
      geography: "地理・産地",
      materials: "材料・技法",
      usage: "用途・文化背景",
      design: "意匠・デザイン",
      trivia: "豆知識・現代との関わり",
    }
    return labels[category] || category
  }

  const getDifficultyLabel = (difficulty: string) => {
    const labels: Record<string, string> = {
      easy: "初級",
      medium: "中級",
      hard: "上級",
    }
    return labels[difficulty] || difficulty
  }

  return (
    <Card className={cn("animate-fade-in-up", className)}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="animate-fade-in">
            {getCategoryLabel(question.category)}
          </Badge>
          <Badge className={cn("animate-fade-in-delay", getDifficultyColor(question.difficulty))}>
            {getDifficultyLabel(question.difficulty)}
          </Badge>
        </div>
        <CardTitle className="text-xl text-balance leading-relaxed">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Image for image-based questions */}
        {question.format === "image_based" && question.imageUrl && (
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <img
                src={question.imageUrl || "/placeholder.svg?height=300&width=400&query=traditional Japanese craft"}
                alt="Question image"
                className="max-w-md rounded-lg border shadow-md group-hover:shadow-lg transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        )}

        {/* Multiple Choice Questions */}
        {question.format === "multiple_choice" && question.options && (
          <div className="grid gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === question.answer
              const isIncorrect = showExplanation && isSelected && !isCorrect

              return (
                <Button
                  key={index}
                  variant={isSelected ? "default" : "outline"}
                  className={cn(
                    "justify-start text-left h-auto p-4 whitespace-normal transition-all duration-200 hover:scale-[1.02] group",
                    showExplanation && isCorrect && "bg-green-50 border-green-200 text-green-800 hover:bg-green-50",
                    isIncorrect && "bg-red-50 border-red-200 text-red-800 hover:bg-red-50",
                    !showExplanation && "hover:shadow-md",
                  )}
                  onClick={() => !showExplanation && onAnswerSelect(option)}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="font-medium text-sm bg-muted rounded-full w-6 h-6 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showExplanation && isCorrect && <CheckCircle className="w-5 h-5 text-green-600 animate-fade-in" />}
                    {isIncorrect && <XCircle className="w-5 h-5 text-red-600 animate-fade-in" />}
                  </div>
                </Button>
              )
            })}
          </div>
        )}

        {/* True/False Questions */}
        {question.format === "true_false" && (
          <div className="grid grid-cols-2 gap-4">
            {["true", "false"].map((option) => {
              const isSelected = selectedAnswer === option
              const isCorrect = option === question.answer
              const isIncorrect = showExplanation && isSelected && !isCorrect
              const label = option === "true" ? "○ 正しい" : "× 間違い"

              return (
                <Button
                  key={option}
                  variant={isSelected ? "default" : "outline"}
                  className={cn(
                    "h-16 text-lg transition-all duration-200 hover:scale-105 group",
                    showExplanation && isCorrect && "bg-green-50 border-green-200 text-green-800 hover:bg-green-50",
                    isIncorrect && "bg-red-50 border-red-200 text-red-800 hover:bg-red-50",
                    !showExplanation && "hover:shadow-md",
                  )}
                  onClick={() => !showExplanation && onAnswerSelect(option)}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-2">
                    {label}
                    {showExplanation && isCorrect && <CheckCircle className="w-5 h-5 text-green-600 animate-fade-in" />}
                    {isIncorrect && <XCircle className="w-5 h-5 text-red-600 animate-fade-in" />}
                  </div>
                </Button>
              )
            })}
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <Card className="bg-gradient-to-br from-muted/50 to-muted animate-fade-in-up border-l-4 border-l-primary/30">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Info className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-primary">解説</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{question.explanation}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">正解:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {question.format === "true_false"
                        ? question.answer === "true"
                          ? "○ 正しい"
                          : "× 間違い"
                        : question.answer}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}
