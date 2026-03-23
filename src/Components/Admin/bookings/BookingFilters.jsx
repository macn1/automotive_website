import GoldButton from '../../Ui/GoldButton'
import Icon, { ICONS } from '../../Ui/Icon'

const STATUSES = ['All', 'Confirmed', 'In Progress', 'Completed', 'Pending']

export default function BookingFilters({ active, onChange }) {
  return (
    <div style={{ display:'flex', gap:'8px', marginBottom:'20px', flexWrap:'wrap', alignItems:'center' }}>
      {STATUSES.map(s => (
        <button key={s} onClick={() => onChange(s)} style={{
          padding:'6px 16px', borderRadius:'20px', fontSize:'12px',
          fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:'0.1em', cursor:'pointer',
          border:'1.5px solid',
          borderColor: active === s ? '#E8C547' : 'rgba(232,197,71,0.18)',
          background:  active === s ? 'rgba(232,197,71,0.14)' : 'transparent',
          color:       active === s ? '#E8C547' : 'rgba(240,236,224,0.45)',
          transition:'all .2s'
        }}>{s}</button>
      ))}
      <GoldButton style={{ marginLeft:'auto' }}>
        <Icon d={ICONS.plus} size={14} /> &nbsp;New Booking
      </GoldButton>
    </div>
  )
}