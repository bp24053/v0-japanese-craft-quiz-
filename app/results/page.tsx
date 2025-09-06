"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import type { QuizQuestion, KnowledgeCategory } from "@/types/quiz"
import Link from "next/link"
import { useRouter } from "next/navigation"

// 新しく作成した部品をインポート
import { ScoreDonutChart } from "@/components/quiz/ScoreDonutChart"
import { AffectionRank } from "@/components/quiz/AffectionRank"
import { CategoryBreakdown } from "@/components/quiz/category-breakdown"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface QuizResults {
  accuracy: number
  completionTime: number
  categoryBreakdown: Record<KnowledgeCategory, { correct: number; total: number }>
  questions: QuizQuestion[]
  answers: (string | null)[]
}

export default function ResultsPage() {
  const [results, setResults] = useState<QuizResults | null>(null)
  const [showDetails, setShowDetails] = useState(false) // ★★★ 詳細表示を管理する新しいState

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults")
    if (storedResults) {
      setResults(JSON.parse(storedResults))
    }
  }, [])

  if (!results) {
    return (
      <div className="min-h-screen bg-card flex items-center justify-center font-serif">
        <p>結果を読み込み中...</p>
      </div>
    )
  }
  
  // ★★★ 愛着度ランクを計算するロジック ★★★
  const getAffectionRank = (accuracy: number): number => {
    if (accuracy >= 90) return 5
    if (accuracy >= 70) return 4
    if (accuracy >= 50) return 3
    if (accuracy >= 30) return 2
    return 1
  }

  const affectionRank = getAffectionRank(results.accuracy); 
  // 仮のポイント計算ロジック（後でより複雑にすることも可能）
  const totalPoints = Math.round(results.accuracy + (affectionRank * 10));

  return (
    <div className="min-h-screen bg-card flex flex-col font-serif p-4">
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">クイズ結果</h1>
        <p className="text-muted-foreground mt-1">あなたの推し理解度は...</p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        <ScoreDonutChart accuracy={results.accuracy} />

        <div className="grid grid-cols-2 gap-8 w-full max-w-sm mt-8">
            <AffectionRank rank={affectionRank} />
            <div className="flex flex-col items-center justify-center">
                 <div className="w-32 h-32 rounded-full border-4 border-gray-400 flex items-center justify-center">
                     <span className="text-4xl font-bold text-foreground font-serif">{totalPoints}</span>
                 </div>
                 <p className="mt-2 text-sm font-bold text-foreground">総獲得ポイント</p>
            </div>
        </div>

        <div className="bg-background/80 p-4 rounded-lg mt-8 text-center max-w-sm">
            <p className="text-sm">
                あなたはこの伝統品について {Math.round(results.accuracy)}% 理解していました。すばらしい！
                愛着度ランクをどんどん上げて、抽選の当選率を高めよう！
            </p>
        </div>
      </main>

      {/* ★★★ 変更点：ボタンレイアウトと「詳細」ボタンの追加 ★★★ */}
      <footer className="w-full max-w-sm mx-auto flex flex-col gap-3 pb-4">
        <Button onClick={() => setShowDetails(!showDetails)} variant="secondary">
          {showDetails ? "詳細を隠す" : "詳しい結果を見る"}
        </Button>
        <div className="grid grid-cols-2 gap-2">
            <Link href="/quiz">
              <Button variant="outline" className="w-full">もう一度挑戦</Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="outline" className="w-full">ランキング</Button>
            </Link>
        </div>
        <Link href="/genre-selection">
            <Button className="w-full">他の伝統品のクイズをする</Button>
        </Link>
      </footer>

      {/* ★★★ 変更点：詳細表示エリア ★★★ */}
      {showDetails && (
        <div className="w-full max-w-4xl mx-auto my-8 space-y-8 animate-fade-in">
          <CategoryBreakdown categoryBreakdown={results.categoryBreakdown} />
          <Card>
            <CardHeader><CardTitle>問題別詳細</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.questions.map((question, index) => {
                  const userAnswer = results.answers[index];
                  const isCorrect = userAnswer === question.answer;
                  return (
                    <div key={question.id} className="border rounded-lg p-4 bg-background/50">
                      <h4 className="font-bold mb-2">問題 {index + 1}: {question.question}</h4>
                      <p className={isCorrect ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                        あなたの回答: {userAnswer || "未回答"} {isCorrect ? " (正解)" : `(不正解)`}
                      </p>
                      {!isCorrect && <p className="text-green-700 font-bold">正解: {question.answer}</p>}
                      <p className="text-xs text-muted-foreground mt-2 font-sans">{question.explanation}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

