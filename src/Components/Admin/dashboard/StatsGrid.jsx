import StatCard from '../../Ui/StatCard'
import { STATS } from '../../Constants/mockData'

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      {STATS.map((s, i) => (
        <StatCard key={s.label} {...s} delay={i * 0.08} />
      ))}
    </div>
  )
}