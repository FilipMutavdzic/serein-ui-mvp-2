'use client'
import React from 'react'

export function Sheet({ open, onClose, children }:{ open: boolean, onClose: ()=>void, children: React.ReactNode }) {
  return (
    <>
      <div className={`fixed inset-0 bg-black/40 transition ${open?'opacity-100':'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed bottom-0 left-0 right-0 bg-card rounded-t-2xl shadow-2xl p-4 transition-transform ${open?'translate-y-0':'translate-y-full'}`}>
        <div className="h-1 w-12 bg-black/10 mx-auto rounded-full mb-3" />
        {children}
      </div>
    </>
  )
}
