"use client"

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GENRE_CATEGORIES } from "@/lib/quiz-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import type { GenreKey } from "@/types/quiz";

export default function CraftsByGenrePage() {
    const params = useParams();
    const genreKey = params.genreKey as GenreKey;
    
    // URLから渡されたキーを元に、表示すべきジャンルの情報を取得
    const selectedGenre = GENRE_CATEGORIES[genreKey];

    // ジャンルが見つからない、または工芸品が登録されていない場合の表示
    if (!selectedGenre || selectedGenre.crafts.length === 0) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center font-serif p-4">
                <Card className="p-8 text-center bg-card">
                    <CardTitle>工芸品が見つかりません</CardTitle>
                    <CardContent className="mt-4">
                        <p>このジャンルにはまだ工芸品が登録されていません。</p>
                        <Link href="/reviews" className="mt-6 inline-block">
                            <Button>ジャンル一覧に戻る</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const displayName = selectedGenre.name.split(" (")[0];

    return (
        <div className="min-h-screen bg-background font-serif">
            <header className="text-center py-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
                 <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-1/4"></div>
                    <h1 className="text-3xl font-bold w-1/2">{displayName}</h1>
                    <div className="w-1/4 flex justify-end">
                        <Link href="/"><Button variant="secondary" size="sm" className="rounded-full shadow-sm"><Home className="w-4 h-4 mr-1" />ホーム</Button></Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">どの工芸品の口コミを見ますか？</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {selectedGenre.crafts.map((craftName) => {
                        // 各工芸品の口コミページへの正しいリンクを生成
                        const craftHref = `/reviews/genre/${encodeURIComponent(craftName)}`;

                        return (
                            <Link key={craftName} href={craftHref} passHref>
                                <Card className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 hover:bg-accent/50 h-full flex items-center justify-center p-6">
                                    <CardTitle className="text-lg text-center">
                                        {craftName}
                                    </CardTitle>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

