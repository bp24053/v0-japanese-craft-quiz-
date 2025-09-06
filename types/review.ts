/// types/review.ts
export interface Reply {
    id: string;
    author: string;
    content: string;
    likes: number;
    isLiked?: boolean; // ★★★ 新機能：「いいね」したかどうかを記録
}

export interface Review {
    id: string;
    author: string;
    content: string;
    imageUrl?: string;
    likes: number;
    isLiked?: boolean; // ★★★ 新機能：「いいね」したかどうかを記録
    replies: Reply[];
}

