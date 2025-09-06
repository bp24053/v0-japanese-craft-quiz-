// app/layout.tsx
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
// ★★★ 変更点：Hina Minchoをインポート ★★★
import { Hina_Mincho } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// ★★★ 変更点：フォント読み込み設定をHina Minchoに変更 ★★★
const hinaMincho = Hina_Mincho({
  subsets: ['latin'],
  weight: ['400'], // Hina Minchoはウェイト400のみ
  variable: '--font-hina-mincho',
})

export const metadata: Metadata = {
  title: '伝統工芸品クイズ',
  description: '日本の美しい伝統工芸品について学ぼう',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      {/* ★★★ 変更点：フォント変数をHina Minchoのものに変更 ★★★ */}
      <body className={`font-serif ${GeistSans.variable} ${hinaMincho.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

