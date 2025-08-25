import React from 'react'
import { Card, CardContent, CardHeader } from './ui/Card'

export function FlowCard({ title, minutes, steps }:{ title: string, minutes: number, steps: string[] }) {
  return (
    <Card className="mb-3">
      <CardHeader title={`${title} • ${minutes} min`} />
      <CardContent>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-muted">
          {steps.map((s, i) => <li key={i}>{s}</li>)}
        </ol>
      </CardContent>
    </Card>
  )
}
