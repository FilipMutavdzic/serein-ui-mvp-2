import React from 'react'
import { Card, CardContent, CardHeader } from './ui/Card'

export function AdviceCard({ title, body }:{ title: string, body: string }) {
  return (
    <Card className="mb-3">
      <CardHeader title={title} />
      <CardContent><p className="text-muted text-sm whitespace-pre-wrap">{body}</p></CardContent>
    </Card>
  )
}
