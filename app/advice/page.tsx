import data from '../../content/advice.json'
import { AdviceCard } from '../../components/AdviceCard'

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Advice</h1>
      {data.cards.map((c, i) => <AdviceCard key={i} title={c.title} body={c.body} />)}
    </div>
  )
}
