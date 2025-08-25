import { chooseAsset, getPackNames } from './media'
import { mulberry32, seedFromString } from './random'

export type Mood = 'calm' | 'stressed' | 'tired' | 'angry' | 'anxious'
export type Pairing = {
  imageUrl: string
  mantra: string
  breathMode: 'box' | '478'
  lengthSec: number
  pack: string
}

const MANTRAS: Record<Mood, string[]> = {
  calm: ['Here, now, enough.', 'Quiet body, quiet mind.', 'Soft in / soft out.'],
  stressed: ['One thing at a time.', 'This moment is survivable.', 'Inhale ease, exhale tension.'],
  tired: ['Rest counts too.', 'Gentle and steady.', 'I move slowly and that is fine.'],
  angry: ['Cool head, warm heart.', 'Let the wave pass.', 'Breathe before words.'],
  anxious: ['Safe in this breath.', 'I can ride this wave.', 'Present over future.']
}

export function createPairing(mood: Mood = 'calm', lengthSec = 60, seedKey?: string): Pairing {
  const seed = seedKey ?? new Date().toISOString().slice(0,13) // hour
  const rng = mulberry32(seedFromString(mood + seed))
  const packs = getPackNames()
  const p = packs[Math.floor(rng() * packs.length)] as any
  const asset = chooseAsset(seed, p)
  const mantraList = MANTRAS[mood]
  const mantra = mantraList[Math.floor(rng() * mantraList.length)]
  const breathMode = rng() > 0.5 ? 'box' : '478'
  return { imageUrl: asset.url, mantra, breathMode, lengthSec, pack: p }
}
