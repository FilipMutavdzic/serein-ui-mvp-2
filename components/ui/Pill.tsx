import React from 'react'
export function Pill({ children }:{ children: React.ReactNode }) {
  return <span className="px-3 py-1 rounded-full bg-accent/30 text-text text-xs">{children}</span>
}
