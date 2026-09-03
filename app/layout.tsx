import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '河南双人旅行地图｜36处景点＋9条国庆路线',
  description: '河南旅行互动地图：36处景点、5/6/7日共9条路线、每日行程、城市关联、交通耗时与高德导航。',
  openGraph: {
    title: '河南双人旅行地图｜景点与路线规划',
    description: '36处景点＋9条国庆路线｜每日行程、交通耗时与高德导航',
    images: [{ url: '/og.png', width: 1673, height: 940, alt: '河南双人旅行地点图' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '河南双人旅行地图｜景点与路线规划',
    description: '36处景点＋9条国庆路线｜每日行程、交通耗时与高德导航',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
