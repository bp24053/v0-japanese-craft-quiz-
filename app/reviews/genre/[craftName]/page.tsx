"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, Heart } from "lucide-react";
import type { Review } from "@/types/review";

// ダミーデータ（Firebase接続前にUIを確認するため）
const initialDummyReviews: Review[] = [
    { id: '1', author: '41歳・主婦', content: '最近、旅先でふらっと立ち寄った窯元で一目惚れした小皿を買ってからこの工芸品にはまりました。\n毎日食卓に並べると何気ない料理まで特別に見えて、手に取った時の軽やかさや模様の美しさに惹かれて気づけば毎日眺めてます。', imageUrl: 'https://placehold.co/600x400/f7f5f2/333?text=投稿された食器の写真', likes: 24, replies: [
        { id: 'r1', author: '43歳・陶磁器店主', content: 'はじめまして(^^)一人暮らしの器デビューにこの工芸品は最高の選択です！\n最初は毎日使えるごはん茶わんや小鉢から始めると失敗しません。', likes: 39 }
    ]},
    { id: '2', author: '65歳・男性', content: '普段使いなら、まずは小皿や茶碗がおすすめです。\n軽くて丈夫なので毎日の食卓に気軽に取り入れられます。', likes: 37, replies: [] },
];

export default function CraftReviewPage() {
    const params = useParams();
    // URLからデコードして、日本語のクラフト名を取得
    const craftName = decodeURIComponent(params.craftName as string);
    
    const [reviews, setReviews] = useState<Review[]>(initialDummyReviews);

    const handleLike = (reviewId: string, replyId?: string) => {
        setReviews(currentReviews => 
            currentReviews.map(review => {
                if (review.id === reviewId && !replyId) {
                    return { ...review, likes: review.isLiked ? review.likes - 1 : review.likes + 1, isLiked: !review.isLiked };
                }
                if (review.id === reviewId && replyId) {
                    return { ...review, replies: review.replies.map(reply => 
                            reply.id === replyId ? { ...reply, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1, isLiked: !reply.isLiked } : reply
                        )
                    };
                }
                return review;
            })
        );
    };

    const handleAddReview = (content: string) => {
        const newReview: Review = {
            id: `review-${Date.now()}`,
            author: "あなた",
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
                    <ReviewCard key={review.id} review={review} onLike={handleLike} />
                ))}
            </main>

            <footer className="sticky bottom-0 p-4 bg-background border-t">
                <ReviewForm onAddReview={handleAddReview} />
            </footer>
        </div>
    );
}
