import { SanctuaryPlayer } from '../../components/SanctuaryPlayer'

export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Pocket Sanctuary</h1>
      <p className="text-sm text-muted">One tap: breathing ring + ambient + mantra. Ultra‑short resets.</p>
      <SanctuaryPlayer />
    </div>
  )
}
