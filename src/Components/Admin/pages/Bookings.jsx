import { useState } from 'react'
import BookingFilters from '../bookings/BookingFilters'
import BookingsTable from '../bookings/BookingsTable'
import { BOOKINGS } from '../../Constants/mockData'

export default function Bookings() {
  const [filter, setFilter] = useState('All')
  const rows = filter === 'All' ? BOOKINGS : BOOKINGS.filter(b => b.status === filter)

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2 className="page-title">Bookings</h2>
          <p className="page-subtitle">{BOOKINGS.length} total bookings</p>
        </div>
      </div>

      <BookingFilters active={filter} onChange={setFilter} />

      <div className="panel">
        <BookingsTable rows={rows} />
      </div>
    </div>
  )
}