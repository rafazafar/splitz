import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Splitz',
  description: 'Splitz is a simple app to help you split expenses with your friends.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          <div className='m flex flex-col gap-6 p-6'>
            <Header />
            <div className='h-screen w-full rounded-xl bg-white shadow'>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
