import React from 'react'

export function Card({ className='', children }: { className?: string, children: React.ReactNode }) {
  return <div className={`bg-card rounded-2xl shadow-sm border border-black/5 ${className}`}>{children}</div>
}
export function CardContent({ className='', children }: { className?: string, children: React.ReactNode }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
export function CardHeader({ title, subtitle }:{ title: string, subtitle?: string}) {
  return (
    <div className="p-4 border-b border-black/5">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
    </div>
  )
}
