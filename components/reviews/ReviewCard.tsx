/// components/reviews/ReviewCard.tsx
"use client"
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import { ReplyCard } from './ReplyCard';
import type { Review } from '@/types/review';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
    review: Review;
    // ★★★ 新機能：「いいね」が押されたことを親に伝えるための関数 ★★★
    onLike: (reviewId: string, replyId?: string) => void;
}

export function ReviewCard({ review, onLike }: ReviewCardProps) {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div className="flex items-start gap-3 animate-fade-in">
            <Avatar>
                <AvatarImage src={`https://i.pravatar.cc/40?u=${review.author}`} />
                <AvatarFallback>{review.author.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <div className="bg-muted p-3 rounded-lg rounded-tl-none relative">
                    <div className="absolute left-[-10px] top-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-muted"></div>
                    <p className="font-bold text-sm text-foreground">{review.author}</p>
                    <p className="text-foreground mt-1 whitespace-pre-wrap text-sm leading-relaxed">{review.content}</p>
                    {review.imageUrl && ( <img src={review.imageUrl} alt="投稿画像" className="mt-2 rounded-lg max-h-60 w-auto" /> )}
                </div>
                <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                    {/* ★★★ 変更点：いいねの状態に応じて見た目が変わるように修正 ★★★ */}
                    <Button variant="ghost" size="sm" onClick={() => onLike(review.id)} 
                        className={cn("flex items-center gap-1", review.isLiked ? "text-pink-600" : "text-muted-foreground", "hover:text-pink-700")}>
                        <Heart className={cn("w-4 h-4", review.isLiked && "fill-current")} />
                        <span>{review.likes}</span>
                    </Button>
                    {review.replies.length > 0 && ( <Button variant="ghost" size="sm" onClick={() => setShowReplies(!showReplies)}>{showReplies ? "▲ 返信を隠す" : `▼返信（${review.replies.length}件）`}</Button> )}
                </div>
                {showReplies && (
                    <div className="mt-3 space-y-3 animate-fade-in">
                        {review.replies.map(reply => (
                            // ★★★ 変更点：onLike関数をReplyCardにも渡す ★★★
                            <ReplyCard key={reply.id} reply={reply} onLike={(replyId) => onLike(review.id, replyId)} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

