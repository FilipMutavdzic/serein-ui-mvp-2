import React from 'react'
export function Progress({ value }:{ value: number }) {
  return (
    <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
      <div className="h-2 bg-brand" style={{width: `${Math.min(100, Math.max(0, value))}%`}} />
    </div>
  )
}
