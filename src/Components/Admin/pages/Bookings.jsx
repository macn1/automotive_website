import { useState }       from 'react'
import BookingFilters     from '../bookings/BookingFilters'
import BookingsTable      from '../bookings/BookingsTable'
import { BOOKINGS }       from '../../Constants/mockData'

export default function Bookings() {
  const [filter, setFilter] = useState('All')
  const rows = filter === 'All' ? BOOKINGS : BOOKINGS.filter(b => b.status === filter)

  return (
    <div>
      <BookingFilters active={filter} onChange={setFilter} />
      <div className="panel">
        <BookingsTable rows={rows} />
      </div>
    </div>
  )
}