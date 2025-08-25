'use client'
export function ShuffleBar({ onShuffle }:{ onShuffle: ()=>void }) {
  return (
    <div className="flex items-center justify-between bg-card border border-black/5 rounded-2xl px-3 py-2">
      <span className="text-sm text-muted">Shuffle a fresh combo</span>
      <button onClick={onShuffle} className="px-3 py-2 rounded-xl bg-brand text-white">Shuffle</button>
    </div>
  )
}
