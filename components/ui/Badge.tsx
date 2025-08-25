import React from 'react'
export function Badge({ children }:{ children: React.ReactNode }) {
  return <span className="inline-block rounded-full bg-brand/10 text-brand px-3 py-1 text-xs">{children}</span>
}
