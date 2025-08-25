'use client'
import React from 'react'

function usePrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function BreathPacer({ mode='box' }:{ mode?: 'box' | '478' | 'custom' }) {
  const reduce = usePrefersReducedMotion()
  const [phase, setPhase] = React.useState<'inhale'|'hold'|'exhale'>('inhale')
  const [pct, setPct] = React.useState(0)

  const timing = React.useMemo(() => {
    if (mode === '478') return { inhale: 4, hold: 7, exhale: 8 }
    return { inhale: 4, hold: 4, exhale: 4 }
  }, [mode])

  React.useEffect(() => {
    let t = 0, current:'inhale'|'hold'|'exhale' = 'inhale'
    const step = 40
    const tick = () => {
      const total = timing.inhale + timing.hold + timing.exhale
      const pos = (t/1000) % total
      const newPhase = pos < timing.inhale ? 'inhale' : pos < timing.inhale + timing.hold ? 'hold' : 'exhale'
      if (newPhase !== current) {
        current = newPhase; setPhase(current)
        if (navigator.vibrate) { navigator.vibrate(current==='hold'?10:5) }
      }
      const pIn = Math.min(1, pos / timing.inhale)
      const pHold = Math.min(1, (pos - timing.inhale) / timing.hold)
      const pEx = Math.min(1, (pos - timing.inhale - timing.hold) / timing.exhale)
      const prog = current==='inhale'?pIn:current==='hold'?pHold:pEx
      setPct(Math.max(0, Math.min(1, prog)))

      t += step
      id = window.setTimeout(tick, reduce ? 200 : step)
    }
    let id = window.setTimeout(tick, step)
    return () => clearTimeout(id)
  }, [timing, reduce])

  const size = 160
  const r = 70
  const stroke = 8
  const c = 2 * Math.PI * r
  const dash = c * pct

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(0,0,0,0.06)" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--brand)" strokeWidth={stroke} fill="none"
          strokeDasharray={`${dash} ${c-dash}`} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`}/>
      </svg>
      <div className="mt-2 text-sm text-muted capitalize">{phase}</div>
    </div>
  )
}
