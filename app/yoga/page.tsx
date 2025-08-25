import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Yoga & De‑Stress</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link href="/yoga/flows"><Card><CardContent>Micro Flows (3,5,7 min)</CardContent></Card></Link>
        <Link href="/fitness/gym-tips"><Card><CardContent>Gym: pre & post</CardContent></Card></Link>
      </div>
      <p className="text-xs text-muted">Always move within a comfortable range. Stop if you feel pain. Consult a professional if unsure.</p>
    </div>
  )
}
