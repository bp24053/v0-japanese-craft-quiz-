import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GENRE_CATEGORIES } from "@/lib/quiz-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, MessageSquare } from "lucide-react";

export default function ReviewsIndexPage() {
    const totalCraftsCount = Object.values(GENRE_CATEGORIES).reduce((acc, genre) => {
        if (genre.name.includes("おまかせ")) return acc;
        return acc + genre.crafts.length;
    }, 0);

    return (
        <div className="min-h-screen bg-background font-serif">
            <header className="text-center py-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-1/4"></div>
                    <h1 className="text-3xl font-bold w-1/2">口コミ</h1>
                    <div className="w-1/4 flex justify-end">
                        <Link href="/"><Button variant="secondary" size="sm" className="rounded-full shadow-sm"><Home className="w-4 h-4 mr-1" />ホーム</Button></Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">どの伝統品の口コミを見ますか？</h2>
                    <p className="text-muted-foreground">現在、{totalCraftsCount}品目の伝統工芸品に関する口コミを閲覧できます。</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {Object.entries(GENRE_CATEGORIES).map(([key, genre]) => {
                        if (key === 'all' || genre.crafts.length === 0) {
                            return null;
                        }

                        const genreHref = `/reviews/${key}`;
                        const displayName = genre.name.split(" (")[0];

                        return (
                            <Link key={key} href={genreHref} passHref>
                                <Card className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 hover:bg-accent/50 h-full flex flex-col">
                                    <CardHeader className="pb-3">
                                        {/* ★★★ ここが修正点です ★★★ */}
                                        <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                            {displayName}
                                        </CardTitle> 
                                    </CardHeader>
                                    <CardContent className="pt-0 flex-1 flex flex-col justify-center">
                                        <p className="text-sm text-muted-foreground text-center">{genre.crafts.length}種類の工芸品</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}

