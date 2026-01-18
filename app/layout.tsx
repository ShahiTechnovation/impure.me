import React from "react"
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const pressStart2P = Press_Start_2P({ 
  subsets: ["latin"], 
  variable: "--font-pixel",
  weight: "400"
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: 'Punit Pal - Web3 Builder, Founder @BuilderBase',
  description: 'Web3 builder with 3+ years experience. 4x hackathon winner. Founder @BuilderBase. Let\'s collaborate on impactful blockchain projects.',
  keywords: 'Web3, Blockchain, Hackathon, Builder, Solidity, Arbitrum, Monad, Avalanche, Aptos, Community, BuilderBase',
  authors: [{ name: 'Punit Pal' }],
  creator: 'Punit Pal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Punit Pal - Web3 Builder, Founder @BuilderBase',
    description: 'Web3 builder with 3+ years experience. 4x hackathon winner. Founder @BuilderBase.',
    siteName: 'Punit Pal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punit Pal - Web3 Builder',
    description: 'Web3 builder with 3+ years experience. 4x hackathon winner.',
    creator: '@its_punit05',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${pressStart2P.variable} ${spaceMono.variable} font-mono antialiased bg-black text-white selection:bg-[#00ff00] selection:text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
