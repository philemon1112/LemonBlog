import '../globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/header'
import Footer from '@/components/Layout/footer'
import { ClerkProvider } from '@clerk/nextjs'
import { Suspense } from 'react'
import Loading from './loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lemons Blog',
  description: 'Journey Through Words and Ideas',
}

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
