import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Lexaura - AI-Powered Business Automation',
  description: 'Transform your business with intelligent automation solutions powered by AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-[#020410] text-[#E2E8F0]`}
        suppressHydrationWarning={true}
      >
        <SmoothScroll />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
