import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Levi Arcanjo — Full-Stack Developer',
  description: 'Portfólio de Levi Arcanjo, desenvolvedor Full-Stack especialista em UX/UI e IA aplicada. Caruaru, PE.',
  openGraph: {
    title: 'Levi Arcanjo — Full-Stack Developer',
    description: 'Projetos reais, MVPs entregues e soluções com IA.',
    url: 'https://devarcanjo.vercel.app',
    siteName: 'Dev Arcanjo',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-bg-primary text-text-primary antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
