import BookingsTable from '../../Admin/bookings/BookingsTable'
import GoldButton from '../../Ui/GoldButton'
import { BOOKINGS } from '../../Constants/mockData'

export default function RecentBookings() {
  return (
    <div className="panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <span className="panel-title" style={{ marginBottom: 0 }}>Recent Bookings</span>
        <GoldButton>View All</GoldButton>
      </div>
      <BookingsTable rows={BOOKINGS.slice(0, 4)} />
    </div>
  )
}