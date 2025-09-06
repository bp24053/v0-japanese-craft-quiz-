"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Heart } from "lucide-react";
import type { Review } from "@/types/review";

// ダミーデータ
const initialDummyReviews: Review[] = [
    { id: '1', author: '41歳・主婦', content: '最近、旅先でふらっと立ち寄った窯元で一目惚れした小皿を買ってから有田焼にはまりました。\n毎日食卓に並べると何気ない料理まで特別に見えて、手に取った時の軽やかさや模様の美しさに惹かれて気づけば毎日眺めてます。', imageUrl: 'https://placehold.co/600x400/f7f5f2/333?text=投稿された食器の写真', likes: 24, replies: [
        { id: 'r1', author: '43歳・陶磁器店主', content: 'はじめまして(^^)一人暮らしの器デビューに有田焼って最高の選択です！\n最初は毎日使えるごはん茶わんや小鉢から始めると失敗しません。', likes: 39 }
    ]},
    { id: '2', author: '65歳・男性', content: '普段使いなら、まずは小皿や茶碗がおすすめです。\n軽くて丈夫なので毎日の食卓に気軽に取り入れられます。', likes: 37, replies: [] },
    { id: '3', author: '21歳・学生', content: '最近一人暮らしを始めて、食器に関心を持ち始めました。\n初心者が気軽に購入できる店舗や通販サイトがあれば教えてください！', likes: 22, replies: [] },
];

export default function ReviewPage() {
    const params = useParams();
    const craftName = decodeURIComponent(params.craftName as string);
    
    // ★★★ 変更点：口コミデータをStateで管理 ★★★
    const [reviews, setReviews] = useState<Review[]>(initialDummyReviews);

    // ★★★ 新機能：「いいね」を押すための関数（Twitter風） ★★★
    const handleLike = (reviewId: string, replyId?: string) => {
        setReviews(currentReviews => 
            currentReviews.map(review => {
                // 親レビューへの「いいね」
                if (review.id === reviewId && !replyId) {
                    return { 
                        ...review, 
                        likes: review.isLiked ? review.likes - 1 : review.likes + 1,
                        isLiked: !review.isLiked 
                    };
                }
                // 返信への「いいね」
                if (review.id === reviewId && replyId) {
                    return {
                        ...review,
                        replies: review.replies.map(reply => 
                            reply.id === replyId ? { 
                                ...reply, 
                                likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                                isLiked: !reply.isLiked
                            } : reply
                        )
                    };
                }
                return review;
            })
        );
    };

    // ★★★ 新機能：新しい口コミを投稿するための関数 ★★★
    const handleAddReview = (content: string) => {
        const newReview: Review = {
            id: `review-${Date.now()}`,
            author: "あなた", // 実際にはログインユーザー情報などを使う
            content,
            likes: 0,
            isLiked: false,
            replies: [],
        };
        setReviews(currentReviews => [newReview, ...currentReviews]);
    };

    return (
        <div className="min-h-screen bg-background flex flex-col font-serif max-w-md mx-auto border-x">
            <header className="text-center py-4 sticky top-0 bg-background/90 backdrop-blur-sm z-10 border-b">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-1/4"></div>
                    <h1 className="text-3xl font-bold w-1/2">伝統品愛好会</h1>
                    <div className="w-1/4 flex justify-end">
                        <Link href="/"><Button variant="secondary" size="sm" className="rounded-full shadow-sm"><Home className="w-4 h-4 mr-1" />ホーム</Button></Link>
                    </div>
                </div>
                <div className="container mx-auto mt-4 px-4">
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1"><Heart className="w-3 h-3 text-pink-400" />いいねを獲得して推しのランキングUPを狙おう！</p>
                    <h2 className="text-2xl font-bold mt-2 text-foreground flex items-center justify-center gap-2">
                        推し伝統品 <span className="text-primary">{craftName}</span>
                    </h2>
                </div>
            </header>

            <main className="flex-1 p-4 space-y-4 bg-white">
                {reviews.map(review => (
                    // ★★★ 変更点：onLike関数を渡す ★★★
                    <ReviewCard key={review.id} review={review} onLike={handleLike} />
                ))}
            </main>

            <footer className="sticky bottom-0 p-4 bg-background border-t">
                {/* ★★★ 変更点：onAddReview関数を渡す ★★★ */}
                <ReviewForm onAddReview={handleAddReview} />
            </footer>
        </div>
    );
}

