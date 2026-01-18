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
  metadataBase: new URL('https://impure.vercel.app'),
  title: {
    default: 'Punit Pal - Web3 Developer, Blockchain Builder & Community Founder | BuilderBase',
    template: '%s | Punit Pal - Web3 Builder'
  },
  description: 'Punit Pal is a Web3 developer and blockchain builder with 3+ years of experience. 4x hackathon winner specializing in Solidity, smart contracts, DeFi, and community building. Founder of BuilderBase with 3500+ members. Expert in Arbitrum, Avalanche, Aptos, Monad, and Ethereum development.',
  keywords: [
    'Punit Pal',
    'Web3 Developer',
    'Blockchain Developer',
    'Solidity Developer',
    'Smart Contract Developer',
    'DeFi Developer',
    'BuilderBase Founder',
    'Web3 Community Builder',
    'Hackathon Winner',
    'Arbitrum Developer',
    'Avalanche Developer',
    'Aptos Developer',
    'Monad Developer',
    'Ethereum Developer',
    'Solana Developer',
    'Polygon Developer',
    'Full Stack Web3',
    'dApp Developer',
    'Blockchain Partnerships',
    'Web3 Business Development',
    'India Web3 Community',
    'Smart Contract Auditor',
    'NFT Developer',
    'Token Development',
    'Web3 Consultant',
    'Blockchain Engineer'
  ],
  authors: [{ name: 'Punit Pal', url: 'https://impure.vercel.app' }],
  creator: 'Punit Pal',
  publisher: 'Punit Pal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://impure.vercel.app',
    title: 'Punit Pal - Web3 Developer, Blockchain Builder & Hackathon Winner',
    description: '4x Hackathon Winner | Founder @BuilderBase (3500+ members) | 3+ years in Web3 | Expert in Solidity, Smart Contracts, DeFi & Community Building',
    siteName: 'Punit Pal - Web3 Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Punit Pal - Web3 Builder & Blockchain Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Punit Pal - Web3 Developer & Blockchain Builder',
    description: '4x Hackathon Winner | BuilderBase Founder | 3+ years Web3 | Solidity, DeFi, Smart Contracts',
    creator: '@its_punit05',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://impure.vercel.app',
  },
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Punit Pal',
    url: 'https://impure.vercel.app',
    image: 'https://impure.vercel.app/og-image.png',
    sameAs: [
      'https://twitter.com/its_punit05',
      'https://github.com/ShahiTechnovation',
      'https://linkedin.com/in/punit05',
      'https://link3.to/right-almonte',
    ],
    jobTitle: 'Web3 Developer & Blockchain Builder',
    worksFor: {
      '@type': 'Organization',
      name: 'BuilderBase',
      url: 'https://builderbase.xyz',
    },
    description: '4x Hackathon Winner | Web3 Developer | Blockchain Builder | Founder of BuilderBase with 3500+ members | Expert in Solidity, Smart Contracts, DeFi',
    knowsAbout: [
      'Web3 Development',
      'Blockchain Development',
      'Solidity',
      'Smart Contracts',
      'DeFi',
      'Arbitrum',
      'Avalanche',
      'Aptos',
      'Monad',
      'Ethereum',
      'Community Building',
      'Business Development',
    ],
    award: [
      '4x Hackathon Winner',
      'Core Nexus Hackathon Winner',
      'Avax Kolkata Winner',
      'Monad Delhi Winner',
    ],
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${pressStart2P.variable} ${spaceMono.variable} font-mono antialiased bg-black text-white selection:bg-[#00ff00] selection:text-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
