import { mulberry32, seedFromString } from './random'

export type MediaCategory = 'nature' | 'ocean' | 'city-rain' | 'forest' | 'sunrise'
export type Provider = 'mock' | 'unsplash' | 'pexels'

type Asset = { url: string, type: 'image' | 'video' }
type Pack = { name: string, assets: Asset[] }

const MOCK_PACKS: Record<string, Pack> = {
  breeze: {
    name: 'Breeze',
    assets: [
      { url: '/media/packs/breeze/image-1.svg', type: 'image' },
      { url: '/media/packs/breeze/image-2.svg', type: 'image' },
      { url: '/media/packs/breeze/image-3.svg', type: 'image' },
    ]
  },
  shore: {
    name: 'Shore',
    assets: [
      { url: '/media/packs/shore/image-1.svg', type: 'image' },
      { url: '/media/packs/shore/image-2.svg', type: 'image' },
      { url: '/media/packs/shore/image-3.svg', type: 'image' },
    ]
  },
  grove: {
    name: 'Grove',
    assets: [
      { url: '/media/packs/grove/image-1.svg', type: 'image' },
      { url: '/media/packs/grove/image-2.svg', type: 'image' },
      { url: '/media/packs/grove/image-3.svg', type: 'image' },
    ]
  }
}

export function chooseAsset(seedKey: string, pack: keyof typeof MOCK_PACKS) {
  const packData = MOCK_PACKS[pack]
  const rng = mulberry32(seedFromString(seedKey))
  const idx = Math.floor(rng() * packData.assets.length)
  return packData.assets[idx]
}

export function getPackNames() {
  return Object.keys(MOCK_PACKS)
}

export function getProvider(): Provider {
  if (typeof process !== 'undefined') {
    const v = process.env.NEXT_PUBLIC_MEDIA_PROVIDER
    if (v === 'unsplash' || v === 'pexels') return v
  }
  return 'mock'
}
