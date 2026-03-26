import { useState } from 'react'
import ServiceCard from '../services/ServiceCard'
import GoldButton from '../../Ui/GoldButton'
import Icon, { ICONS } from '../../Ui/Icon'
import { SERVICES } from '../../Constants/mockData'

const CATEGORIES = ['All', 'Detailing', 'Mechanical', 'Electrical', 'Bodywork']

export default function Services() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = SERVICES.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h2 className="page-title">Services</h2>
          <p className="page-subtitle">{SERVICES.length} services available</p>
        </div>
        <GoldButton>
          <Icon d={ICONS.plus} size={14} /> &nbsp;Add Service
        </GoldButton>
      </div>

      {/* Filters */}
      <div className="filter-row">
        <div className="search-box" style={{ width: '220px' }}>
          <Icon d={ICONS.search} size={14} />
          <input
            placeholder="Search services..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {CATEGORIES.map(c => (
          <button
            key={c}
            className={`filter-pill ${category === c ? 'active' : ''}`}
            onClick={() => setCategory(c)}
          >{c}</button>
        ))}
      </div>

      {/* Summary row */}
      <div className="summary-grid">
        {[
          { label: 'Total Services', value: SERVICES.length,                                  color: 'var(--gold)' },
          { label: 'Total Bookings', value: SERVICES.reduce((a, s) => a + s.count, 0),        color: '#4ADE80'    },
          { label: 'Avg Price',      value: '₹1,908',                                         color: '#60A5FA'    },
          { label: 'Most Popular',   value: 'Oil Change',                                     color: '#A78BFA'    },
        ].map(s => (
          <div key={s.label} className="panel" style={{ padding: '14px 18px' }}>
            <div style={{
              fontSize: '10px', color: 'var(--text-muted)',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: "'Barlow Condensed',sans-serif", marginBottom: '6px'
            }}>{s.label}</div>
            <div style={{
              fontSize: '20px', fontFamily: "'Bebas Neue',sans-serif",
              color: s.color, letterSpacing: '0.06em'
            }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Card grid */}
      <div className="card-grid">
        {filtered.map((s, i) => (
          <ServiceCard key={s.name} {...s} delay={i * 0.07} />
        ))}
      </div>
    </div>
  )
}
