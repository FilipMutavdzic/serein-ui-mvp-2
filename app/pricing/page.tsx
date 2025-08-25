import { Button } from '../../components/ui/Button'
import { isPremium } from '../../lib/payments'


export default function Page() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Serein Plus (stub)</h1>
      <p className="text-sm text-muted">Unlock longer Sanctuary sessions, more media packs, and offline journals. (Stripe coming soon.)</p>
      <Button disabled>Upgrade — Coming Soon</Button>
      <p className="text-xs text-muted">isPremium: {String(isPremium)}</p>
    </div>
  )
}
