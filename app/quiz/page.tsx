"use client"

import { useState, useEffect } from "react"
import type { QuizSession, GenreKey } from "@/types/quiz"
import { generateQuizSession, calculateQuizResults } from "@/lib/quiz-data"
import { QuestionDisplay } from "@/components/quiz/question-display"
import { QuizProgress } from "@/components/quiz/quiz-progress"
import { QuizNavigation } from "@/components/quiz/quiz-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function QuizPage() {
  const [session, setSession] = useState<QuizSession | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [isQuizComplete, setIsQuizComplete] = useState(false)
  const router = useRouter()

  // Initialize quiz session
  useEffect(() => {
    const selectedGenre = (localStorage.getItem("selectedGenre") as GenreKey) || "all"
    const questions = generateQuizSession(selectedGenre)
    const newSession: QuizSession = {
      id: `quiz-${Date.now()}`,
      questions,
      currentQuestionIndex: 0,
      answers: new Array(questions.length).fill(null),
      score: 0,
      startTime: new Date(),
    }
    setSession(newSession)
  }, [])

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleAnswerSubmit = () => {
    if (!session || selectedAnswer === null) return

    const updatedAnswers = [...session.answers]
    updatedAnswers[session.currentQuestionIndex] = selectedAnswer

    setSession({
      ...session,
      answers: updatedAnswers,
    })

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (!session) return

    if (session.currentQuestionIndex < session.questions.length - 1) {
      setSession({
        ...session,
        currentQuestionIndex: session.currentQuestionIndex + 1,
      })
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      const endTime = new Date()
      const completionTime = Math.round((endTime.getTime() - session.startTime.getTime()) / 1000)
      const results = calculateQuizResults(session.questions, session.answers, completionTime)

      // Store results in localStorage for the results page
      localStorage.setItem(
        "quizResults",
        JSON.stringify({
          ...results,
          sessionId: session.id,
          questions: session.questions,
          answers: session.answers,
          startTime: session.startTime,
          endTime,
        }),
      )

      // Quiz complete
      setSession({
        ...session,
        endTime,
      })
      setIsQuizComplete(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (!session || session.currentQuestionIndex === 0) return

    setSession({
      ...session,
      currentQuestionIndex: session.currentQuestionIndex - 1,
    })
    setSelectedAnswer(session.answers[session.currentQuestionIndex - 1])
    setShowExplanation(false)
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p className="text-center">クイズを準備中...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isQuizComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">クイズ完了！</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">お疲れ様でした！全15問のクイズが完了しました。</p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => router.push("/results")}>結果を見る</Button>
                  <Link href="/">
                    <Button variant="outline">ホームに戻る</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = session.questions[session.currentQuestionIndex]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">日本伝統工芸品クイズ</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                終了
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Quiz Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <QuizProgress current={session.currentQuestionIndex + 1} total={session.questions.length} className="mb-8" />

          {/* Question */}
          <QuestionDisplay
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showExplanation={showExplanation}
            className="mb-8"
          />

          {/* Navigation */}
          <QuizNavigation
            canGoBack={session.currentQuestionIndex > 0}
            canSubmit={selectedAnswer !== null && !showExplanation}
            canNext={showExplanation}
            isLastQuestion={session.currentQuestionIndex === session.questions.length - 1}
            onPrevious={handlePreviousQuestion}
            onSubmit={handleAnswerSubmit}
            onNext={handleNextQuestion}
          />
        </div>
      </main>
    </div>
  )
}
