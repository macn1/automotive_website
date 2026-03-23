import StatusBadge from '../../Ui/StatusBadge'

const TD = { padding:'12px', borderBottom:'1px solid rgba(255,255,255,0.04)', verticalAlign:'middle' }

export default function BookingsTable({ rows }) {
  return (
    <div style={{ overflowX:'auto' }}>
      <table style={{ width:'100%', borderCollapse:'collapse', fontFamily:"'Barlow',sans-serif" }}>
        <thead>
          <tr>
            {['Booking ID','Customer','Service','Vehicle','Time','Amount','Status'].map(h => (
              <th key={h} style={{ textAlign:'left', padding:'8px 12px', fontSize:'10px',
                color:'rgba(240,236,224,0.35)', letterSpacing:'0.12em', textTransform:'uppercase',
                borderBottom:'1px solid rgba(232,197,71,0.1)', whiteSpace:'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className="table-row">
              <td style={TD}><span style={{ color:'#E8C547', fontWeight:600, fontSize:'13px' }}>{r.id}</span></td>
              <td style={TD}><span style={{ fontSize:'13px', color:'#f0ece0' }}>{r.customer}</span></td>
              <td style={TD}><span style={{ fontSize:'13px', color:'rgba(240,236,224,0.7)' }}>{r.service}</span></td>
              <td style={TD}><span style={{ fontSize:'13px', color:'rgba(240,236,224,0.5)' }}>{r.vehicle}</span></td>
              <td style={TD}><span style={{ fontSize:'12px', color:'rgba(240,236,224,0.4)' }}>{r.time}</span></td>
              <td style={TD}><span style={{ fontSize:'13px', color:'#4ADE80', fontWeight:600 }}>{r.amount}</span></td>
              <td style={TD}><StatusBadge status={r.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}