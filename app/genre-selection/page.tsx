"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GENRE_CATEGORIES, type GenreKey } from "@/lib/quiz-data"
import Link from "next/link"

export default function GenreSelectionPage() {
  const [selectedGenre, setSelectedGenre] = useState<GenreKey | null>(null)
  const router = useRouter()

  const handleStartQuiz = () => {
    if (selectedGenre) {
      // Store selected genre in localStorage for the quiz page
      localStorage.setItem("selectedGenre", selectedGenre)
      router.push("/quiz")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-amber-50">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">ジャンル選択</h1>
            <Link href="/">
              <Button variant="outline" size="sm">
                ホームに戻る
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">挑戦したい工芸品のジャンルを選択してください</h2>
            <p className="text-muted-foreground">各ジャンルから15問（易5問・中5問・難5問）が出題されます</p>
          </div>

          {/* Genre Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {Object.entries(GENRE_CATEGORIES).map(([key, genre]) => (
              <Card
                key={key}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                  selectedGenre === key ? "ring-2 ring-primary bg-primary/5" : "hover:bg-accent/50"
                }`}
                onClick={() => setSelectedGenre(key as GenreKey)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center">{genre.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground text-center">{genre.crafts.length}種類の工芸品</p>
                  {key === "all" && <p className="text-xs text-primary text-center mt-1">全ジャンルからランダム出題</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Start Button */}
          <div className="text-center">
            <Button onClick={handleStartQuiz} disabled={!selectedGenre} size="lg" className="px-8 py-3 text-lg">
              {selectedGenre ? "クイズを開始する" : "ジャンルを選択してください"}
            </Button>
          </div>

          {/* Selected Genre Info */}
          {selectedGenre && (
            <div className="mt-8 p-4 bg-accent/30 rounded-lg">
              <h3 className="font-semibold mb-2">選択中のジャンル:</h3>
              <p className="text-primary font-medium">{GENRE_CATEGORIES[selectedGenre].name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                含まれる工芸品: {GENRE_CATEGORIES[selectedGenre].crafts.join("、")}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
