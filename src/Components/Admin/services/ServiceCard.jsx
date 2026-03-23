import Icon, { ICONS } from '../../Ui/Icon'

export default function ServiceCard({ name, duration, price, count, color, delay = 0 }) {
  return (
    <div className="stat-card" style={{ animationDelay:`${delay}s` }}>
      <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'14px' }}>
        <div style={{ width:'38px', height:'38px', borderRadius:'10px',
          background:`${color}18`, display:'flex', alignItems:'center',
          justifyContent:'center', color, flexShrink:0 }}>
          <Icon d={ICONS.services} size={18} />
        </div>
        <div>
          <div style={{ fontSize:'14px', fontWeight:600, color:'#f0ece0', fontFamily:"'Barlow',sans-serif" }}>{name}</div>
          <div style={{ fontSize:'11px', color:'rgba(240,236,224,0.4)', marginTop:'2px' }}>{duration}</div>
        </div>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'10px' }}>
        <span style={{ fontSize:'20px', fontFamily:"'Bebas Neue',sans-serif", color, letterSpacing:'0.06em' }}>{price}</span>
        <span style={{ fontSize:'11px', color:'rgba(240,236,224,0.35)', letterSpacing:'0.06em' }}>{count} bookings</span>
      </div>
      <div style={{ marginTop:'12px', height:'4px', borderRadius:'4px', background:'rgba(255,255,255,0.07)' }}>
        <div style={{ height:'100%', borderRadius:'4px', background:color, width:`${Math.min(100,(count/91)*100)}%`, transition:'width 1s ease' }} />
      </div>
    </div>
  )
}