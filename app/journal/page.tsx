import React from 'react'
import { Textarea } from '../../components/ui/Textarea'
import { Button } from '../../components/ui/Button'
import { getLocal, setLocal } from '../../lib/localStore'

export default function Page() {
  const [text, setText] = React.useState(getLocal<string>('journal',''))
  React.useEffect(()=>{ setLocal('journal', text) }, [text])
  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ journal: text }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'serein-journal.json'
    a.click()
    URL.revokeObjectURL(url)
  }
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">Journal</h1>
      <Textarea rows={10} value={text} onChange={e=>setText(e.target.value)} placeholder="Private notes (local only)" />
      <Button onClick={exportJson}>Export</Button>
    </div>
  )
}
