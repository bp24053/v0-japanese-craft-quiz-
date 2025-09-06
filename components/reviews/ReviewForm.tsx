/// components/reviews/ReviewForm.tsx
"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface ReviewFormProps {
    // ★★★ 新機能：投稿されたことを親に伝えるための関数 ★★★
    onAddReview: (content: string) => void;
}

export function ReviewForm({ onAddReview }: ReviewFormProps) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;
        // ★★★ 変更点：親から渡された関数を実行 ★★★
        onAddReview(message);
        setMessage(''); // 入力欄を空にする
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <Input 
                type="text"
                placeholder="テキスト入力..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-input" // 背景色を適用
            />
            <Button type="submit" size="icon" disabled={!message.trim()}>
                <Send className="w-4 h-4" />
            </Button>
        </form>
    );
}

