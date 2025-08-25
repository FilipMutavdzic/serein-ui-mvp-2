'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label:'Home' },
  { href: '/tools', label:'Tools' },
  { href: '/sanctuary', label:'Sanctuary' },
  { href: '/yoga', label:'Yoga' },
  { href: '/media', label:'Media' },
  { href: '/journal', label:'Journal' },
]

export function TabBar() {
  const pathname = usePathname()
  return (
    <nav className="sticky bottom-0 border-t border-black/5 bg-bg/80 backdrop-blur">
      <div className="container flex justify-between py-2">
        {items.map(it => {
          const active = pathname === it.href
          return (
            <Link key={it.href} href={it.href}
              className={`px-3 py-2 rounded-xl ${active?'bg-white text-text shadow':'text-muted hover:text-text'}`}>
              {it.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
