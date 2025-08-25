import Link from 'next/link'
import { Card, CardContent } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

const moods = ['😌','🙂','😕','😣','😡','😰']

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="bg-card rounded-2xl p-5 border border-black/5">
        <h1 className="text-2xl font-semibold mb-2">Daily Calm</h1>
        <p className="text-muted mb-3">How are you feeling right now?</p>
        <div className="flex gap-2 text-2xl">{moods.map(m => <button key={m} className="px-3 py-2 rounded-xl bg-black/5">{m}</button>)}</div>
        <div className="mt-4 flex gap-2">
          <Link href="/sanctuary"><Button size="lg">Start a 2‑min reset</Button></Link>
          <Link href="/tools"><Button variant="outline">Explore tools</Button></Link>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/tools/breathing"><Card><CardContent>Breathing — 4•7•8</CardContent></Card></Link>
          <Link href="/tools/sos"><Card><CardContent>SOS — 90‑sec</CardContent></Card></Link>
          <Link href="/yoga/flows"><Card><CardContent>Yoga Micro‑flow</CardContent></Card></Link>
          <Link href="/media"><Card><CardContent>Shuffle Media</CardContent></Card></Link>
        </div>
      </section>
    </div>
  )
}
