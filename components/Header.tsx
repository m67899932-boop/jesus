'use client'
import Link from 'next/link'

export function Header(){
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Link href="/"><a className="font-semibold">OS Systema</a></Link>
        <nav className="flex gap-4 text-sm text-slate-600">
          <Link href="/os"><a>Ordens</a></Link>
          <Link href="/frota"><a>Frotas</a></Link>
          <Link href="/employees"><a>Funcionários</a></Link>
          <Link href="/login"><a>Login</a></Link>
        </nav>
      </div>
    </header>
  )
}
