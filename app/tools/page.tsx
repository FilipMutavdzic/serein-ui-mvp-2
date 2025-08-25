import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'

export default function Page() {
  const items = [
    ['/tools/breathing','Breathing (Box • 4‑7‑8)'],
    ['/tools/sos','SOS (90‑sec)'],
    ['/tools/grounding','5‑4‑3‑2‑1 Grounding'],
    ['/tools/body-scan','Body Scan'],
    ['/tools/cbt','CBT Prompt'],
  ] as const
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tools</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map(([href,label]) => (
          <Link key={href} href={href}><Card><CardContent>{label}</CardContent></Card></Link>
        ))}
      </div>
    </div>
  )
}
