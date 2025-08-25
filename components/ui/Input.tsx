import React from 'react'
export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 ring-brand ${props.className||''}`} />
}
