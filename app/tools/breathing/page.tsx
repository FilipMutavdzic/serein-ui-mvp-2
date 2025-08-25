import React from 'react'
import { BreathPacer } from '../../../components/BreathPacer'
import { Tabs } from '../../../components/ui/Tabs'


export default function Page() {
  const [mode, setMode] = React.useState<'box'|'478'|'custom'>('478')
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Breathing</h1>
      <Tabs tabs={['box','478','custom']} value={mode} onChange={(v)=>setMode(v as any)} />
      <div className="mt-2"><BreathPacer mode={mode} /></div>
      <p className="text-sm text-muted">Tip: try 2–3 minutes for a nervous‑system reset.</p>
    </div>
  )
}
