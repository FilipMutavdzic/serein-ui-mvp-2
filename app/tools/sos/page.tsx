import React from 'react'
import { Timer } from '../../../components/Timer'

export default function Page() {
  const [step, setStep] = React.useState(0)
  const steps = [
    'Breathe slowly. In 4, out 6.',
    'Name what you feel (one word).',
    'Grounding: 5‑4‑3‑2‑1 — five things you see, four you feel, three you hear, two you smell, one you taste.'
  ]
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">SOS — 90 sec</h1>
      <p className="text-sm text-muted">{steps[step]}</p>
      <Timer seconds={30} onDone={()=> setStep(s => Math.min(s+1, 2))} />
    </div>
  )
}
