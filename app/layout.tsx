import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from './components/Navigation'
import { Poppins } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://valuefocusedproject.io'),
  title: {
    default: 'Value Focused Project | Building the Future of DeFi on Solana',
    template: '%s | Value Focused Project'
  },
  description: 'Value Focused Project (VFP) is building innovative DeFi protocols on Solana, focused on sustainable growth, yield generation, and community-driven value creation.',
  keywords: [
    'VFP',
    'Value Focused Project',
    'Solana DeFi',
    'Cryptocurrency',
    'Blockchain',
    'Web3',
    'Decentralized Finance',
    'Crypto Investment',
    'Solana Ecosystem',
    'DeFi Protocol',
    'Yield Generation',
    'Crypto Staking',
    'Digital Assets',
    'Smart Contracts',
    'Blockchain Technology',
    'Crypto Trading',
    'SOL Token',
    'DeFi Yield',
    'Crypto Community',
    'Sustainable DeFi',
    'Tokenomics',
    'Crypto Innovation',
    'Web3 Projects',
    'Blockchain Development',
    'DeFi Investment',
    'Solana NFT',
    'SPL Tokens',
    'Solana Wallet',
    'Yield Farming',
    'Liquidity Pools',
    'DeFi Lending',
    'Solana DApp',
    'Crypto Rewards',
    'Token Swaps',
    'Cross-chain DeFi',
    'DeFi Governance',
    'Solana Staking',
    'Passive Income Crypto',
    'DeFi Security',
    'Solana Programming',
    'Web3 Development',
    'DeFi Analytics',
    'Crypto Portfolio',
    'Solana Smart Contracts'
  ].join(', '),
  authors: [{ name: 'Value Focused Project Team' }],
  category: 'DeFi',
  alternates: {
    canonical: 'https://valuefocusedproject.io',
  },
  icons: {
    icon: '/VFP3.png',
    shortcut: '/VFP3.png',
    apple: '/VFP3.png',
  },
  openGraph: {
    title: 'Value Focused Project | Building the Future of DeFi on Solana',
    description: 'Value Focused Project (VFP) is building innovative DeFi protocols on Solana, focused on sustainable growth, yield generation, and community-driven value creation.',
    url: 'https://valuefocusedproject.io',
    siteName: 'Value Focused Project',
    images: [
      {
        url: '/VFP3.png',
        width: 1200,
        height: 630,
        alt: 'Value Focused Project - Leading DeFi Innovation on Solana',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Value Focused Project | Building the Future of DeFi on Solana',
    description: 'Value Focused Project (VFP) is building innovative DeFi protocols on Solana, focused on sustainable growth, yield generation, and community-driven value creation.',
    creator: '@vfp2day',
    images: ['/VFP3.png'],
    site: '@vfp2day',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/gradient.png)' }}>
        <div className="min-h-screen bg-black/30"> {/* This adds a dark overlay to improve readability */}
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
