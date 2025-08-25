'use client'
import React from 'react'
import { Progress } from './ui/Progress'

export function Timer({ seconds, onDone }:{ seconds: number, onDone?: ()=>void }) {
  const [left, setLeft] = React.useState(seconds)
  React.useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const elapsed = Math.floor((Date.now()-start)/1000)
      const remain = Math.max(0, seconds - elapsed)
      setLeft(remain)
      if (remain === 0) { clearInterval(id); onDone && onDone() }
      if (navigator.vibrate && remain % 5 === 0) { navigator.vibrate(15) }
    }, 250)
    return () => clearInterval(id)
  }, [seconds, onDone])
  const pct = (1 - (left/seconds)) * 100
  return (
    <div className="space-y-2">
      <Progress value={pct} />
      <div className="text-sm text-muted">Time left: {left}s</div>
    </div>
  )
}
