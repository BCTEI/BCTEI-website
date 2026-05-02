import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: 'مركز البنيان للتقنية والصناعات الهندسية',
  description: 'مركز البنيان للتقنية والصناعات الهندسية - وزارة الدفاع - Al-Bunyan Center For Technology and Engineering Industries',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  )
}
