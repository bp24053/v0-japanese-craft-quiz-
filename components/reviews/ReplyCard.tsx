/// components/reviews/ReplyCard.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import type { Reply } from '@/types/review';
import { cn } from "@/lib/utils";

interface ReplyCardProps {
    reply: Reply;
    // ★★★ 新機能：「いいね」が押されたことを親に伝えるための関数 ★★★
    onLike: (replyId: string) => void;
}

export function ReplyCard({ reply, onLike }: ReplyCardProps) {
    return (
        <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8">
                <AvatarImage src={`https://i.pravatar.cc/32?u=${reply.author}`} />
                <AvatarFallback>{reply.author.slice(0, 1)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-muted/50 p-3 rounded-xl relative">
                 <div className="absolute left-[-10px] top-0 w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-muted/50"></div>
                <p className="font-bold text-sm">{reply.author}</p>
                <p className="text-foreground text-sm mt-1 whitespace-pre-wrap">{reply.content}</p>
                <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                    {/* ★★★ 変更点：onClickイベントと動的なスタイルを追加 ★★★ */}
                    <Button variant="ghost" size="sm" onClick={() => onLike(reply.id)} 
                        className={cn("h-auto p-1 flex items-center gap-1", reply.isLiked ? "text-pink-600" : "text-muted-foreground", "hover:text-pink-700")}>
                        <Heart className={cn("w-4 h-4", reply.isLiked && "fill-current")} />
                        <span className="text-xs font-bold">{reply.likes}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

