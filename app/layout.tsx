import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const metadata = {
  title: 'OS Systema - Clean',
  description: 'Sistema OS & Frotas - Clean Minimal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <Header />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
