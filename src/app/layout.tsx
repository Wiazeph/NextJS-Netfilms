import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/assets/css/index.css'
import HeaderLayout from '@/layouts/main/header'
import FooterLayout from '@/layouts/main/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-between gap-y-14 ${inter.className}`}
      >
        <header className="Header">
          <HeaderLayout />
        </header>

        <main className="Main">{children}</main>

        <footer className="Footer">
          <FooterLayout />
        </footer>
      </body>
    </html>
  )
}
