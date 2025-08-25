'use client'
import React from 'react'
import { Input } from '../../../components/ui/Input'
import { Textarea } from '../../../components/ui/Textarea'
import { Button } from '../../../components/ui/Button'

export default function Page() {
  const [thought, setThought] = React.useState('')
  const [evidence, setEvidence] = React.useState('')
  const [balanced, setBalanced] = React.useState('')
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">CBT — Thought Balance</h1>
      <label className="text-sm">Thought</label>
      <Textarea value={thought} onChange={e=>setThought(e.target.value)} placeholder="What is the thought?" />
      <label className="text-sm">Evidence for/against</label>
      <Textarea value={evidence} onChange={e=>setEvidence(e.target.value)} placeholder="Facts only." />
      <label className="text-sm">Balanced thought</label>
      <Textarea value={balanced} onChange={e=>setBalanced(e.target.value)} placeholder="Kinder, truer summary." />
      <Button onClick={()=>alert('Saved locally (mock).')}>Save</Button>
    </div>
  )
}
