'use client'
import Image from 'next/image'

export function RandomPhoto({ src, alt='Calm scene'}:{ src: string, alt?: string }) {
  // In mock provider we pass SVGs in /public
  return (
    <div className="relative w-full h-48 overflow-hidden rounded-2xl border border-black/5 bg-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
