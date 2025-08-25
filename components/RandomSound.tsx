'use client'
import React from 'react'

export function RandomSound({ playing }:{ playing: boolean }) {
  const ctxRef = React.useRef<AudioContext | null>(null)
  const oscRef = React.useRef<OscillatorNode | null>(null)
  React.useEffect(() => {
    if (playing) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
      const osc = ctx.createOscillator()
      osc.type = 'sine'
      osc.frequency.value = 174 // solfeggio-ish low tone
      const gain = ctx.createGain()
      gain.gain.value = 0.05
      osc.connect(gain).connect(ctx.destination)
      osc.start()
      ctxRef.current = ctx
      oscRef.current = osc
      return () => { osc.stop(); ctx.close() }
    } else {
      if (oscRef.current) { try { oscRef.current.stop() } catch {} }
      if (ctxRef.current) { try { ctxRef.current.close() } catch {} }
      oscRef.current = null; ctxRef.current = null
    }
  }, [playing])
  return null
}
