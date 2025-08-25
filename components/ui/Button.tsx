import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ className='', variant='solid', size='md', ...props }: Props) {
  const base = 'rounded-2xl px-4 py-3 active:scale-[0.99] transition ring-offset-2 focus-visible:ring-2'
  const variants = {
    solid: 'bg-brand text-white hover:opacity-95',
    outline: 'border border-brand text-brand bg-card hover:bg-brand/5',
    ghost: 'text-brand bg-transparent hover:bg-brand/10'
  }
  const sizes = { sm:'px-3 py-2 text-sm', md:'px-4 py-3', lg:'px-5 py-4 text-lg' }
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />
}
