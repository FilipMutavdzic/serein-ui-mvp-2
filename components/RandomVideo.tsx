'use client'
export function RandomVideo({ src, alt='Calm loop'}:{ src: string, alt?: string }) {
  // Offline mock: we simply render an image placeholder as a "video".
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-black/5 bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
