import React from 'react'
import { createPairing, Mood } from '../lib/pairing-engine'
import { RandomPhoto } from './RandomPhoto'
import { RandomSound } from './RandomSound'
import { BreathPacer } from './BreathPacer'
import { Button } from './ui/Button'

export function SanctuaryPlayer() {
  const [mood, setMood] = React.useState<Mood>('calm')
  const [playing, setPlaying] = React.useState(false)
  const [length, setLength] = React.useState(60)
  const [seed, setSeed] = React.useState<string | undefined>(undefined)

  const pairing = createPairing(mood, length, seed)

  const openPiP = async () => {
    const anyDoc: any = document as any
    if (anyDoc.documentPictureInPicture && anyDoc.documentPictureInPicture.requestWindow) {
      const win = await anyDoc.documentPictureInPicture.requestWindow({})
      win.document.body.style.margin = '0'
      win.document.body.style.background = 'white'
      const container = win.document.createElement('div')
      container.innerHTML = `<div style="display:flex;gap:8px;align-items:center;justify-content:center;padding:8px;font-family:system-ui">
        <svg width="120" height="120" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="70" stroke="rgba(0,0,0,0.06)" stroke-width="8" fill="none"></circle>
        </svg>
        <div style="color:#64748B">Breathing…</div>
      </div>`
      win.document.body.appendChild(container)
    } else {
      alert('Picture-in-Picture not supported here. The pacer stays on screen.')
    }
  }

  const reshuffle = () => setSeed(Math.random().toString())

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['calm','stressed','tired','angry','anxious'] as Mood[]).map(m => (
          <button key={m} onClick={()=>setMood(m)}
            className={`px-3 py-2 rounded-xl border ${m===mood?'bg-brand text-white border-transparent':'border-black/10 text-muted hover:text-text'}`}>
            {m}
          </button>
        ))}
      </div>

      <RandomPhoto src={pairing.imageUrl} />

      <div className="text-sm text-muted">Pack: <b>{pairing.pack}</b> • Mantra: “{pairing.mantra}”</div>

      <div className="flex items-center gap-2">
        <Button onClick={()=>setPlaying(p=>!p)}>{playing?'Stop':'Start'}</Button>
        <Button variant="outline" onClick={reshuffle}>Shuffle Again</Button>
        <Button variant="ghost" onClick={openPiP}>PiP Breathing</Button>
        <button
          className={`px-3 py-2 rounded-xl border ${length===120?'bg-brand text-white border-transparent':'border-black/10 text-muted hover:text-text'}`}
          onClick={()=>setLength(length===60?120:60)}>
          {length===60?'Longer (2m)':'Shorter (1m)'}
        </button>
      </div>

      <div className="flex items-center gap-6">
        <BreathPacer mode={pairing.breathMode} />
        <div className="flex-1 text-sm text-muted">
          Follow the ring. Breathe {pairing.breathMode === '478' ? 'in 4 • hold 7 • out 8' : 'box: 4 • 4 • 4'}.
        </div>
      </div>

      <RandomSound playing={playing} />
    </div>
  )
}
