import Link from 'next/link'
import { Pill } from './ui/Pill'

export function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-bg/70 border-b border-black/5">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-semibold">Serein<span className="text-brand">.</span></Link>
        <nav className="flex gap-4 text-sm text-muted">
          <Link href="/pricing" className="hover:text-text">Upgrade</Link>
          <Link href="/about" className="hover:text-text">About</Link>
        </nav>
      </div>
    </header>
  )
}
