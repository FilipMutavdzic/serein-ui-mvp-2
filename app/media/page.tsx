import React from 'react'
import { chooseAsset, getPackNames } from '../../lib/media'
import { RandomPhoto } from '../../components/RandomPhoto'
import { ShuffleBar } from '../../components/ShuffleBar'

export default function Page() {
  const packs = getPackNames()
  const [seed, setSeed] = React.useState('seed')
  const [pack, setPack] = React.useState(packs[0] as any)
  const asset = chooseAsset(seed, pack)

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Random Media</h1>
      <div className="flex gap-2">
        {packs.map(p => (
          <button key={p} onClick={()=>setPack(p)} className={`px-3 py-2 rounded-xl border ${p===pack?'bg-brand text-white border-transparent':'border-black/10 text-muted hover:text-text'}`}>{p}</button>
        ))}
      </div>
      <RandomPhoto src={asset.url} />
      <ShuffleBar onShuffle={()=>setSeed(Math.random().toString())} />
    </div>
  )
}
