import StatsGrid      from '../dashboard/StatsGrid'
import ChartsRow      from '../dashboard/ChartsRow'
import RecentBookings from '../dashboard/RecentBookings'

export default function Dashboard() {
  return (
    <div>
      <StatsGrid />
      <ChartsRow />
      <RecentBookings />
    </div>
  )
}