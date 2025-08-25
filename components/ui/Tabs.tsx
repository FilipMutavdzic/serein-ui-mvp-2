'use client'
import React from 'react'

export function Tabs({ tabs, value, onChange }:{ tabs: string[], value: string, onChange: (v:string)=>void }) {
  return (
    <div className="flex gap-2 bg-black/5 rounded-2xl p-1">
      {tabs.map(t => (
        <button key={t}
          onClick={()=>onChange(t)}
          className={`px-4 py-2 rounded-xl ${t===value?'bg-white shadow text-text':'text-muted'}`}>
          {t}
        </button>
      ))}
    </div>
  )
}
