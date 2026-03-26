import StatusBadge from '../../Ui/StatusBadge'

const HEADERS = ['Booking ID', 'Customer', 'Service', 'Vehicle', 'Time', 'Amount', 'Status']

const TD = {
  padding: '12px',
  borderBottom: '1px solid var(--border-soft)',
  verticalAlign: 'middle',
}

export default function BookingsTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Barlow',sans-serif" }}>
        <thead>
          <tr>
            {HEADERS.map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '8px 12px',
                fontSize: '10px',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                borderBottom: '1px solid var(--border-main)',
                whiteSpace: 'nowrap',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} className="table-row">
              <td style={TD}>
                <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '13px' }}>{r.id}</span>
              </td>
              <td style={TD}>
                <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>{r.customer}</span>
              </td>
              <td style={TD}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{r.service}</span>
              </td>
              <td style={TD}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{r.vehicle}</span>
              </td>
              <td style={TD}>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{r.time}</span>
              </td>
              <td style={TD}>
                <span style={{ fontSize: '13px', color: '#4ADE80', fontWeight: 600 }}>{r.amount}</span>
              </td>
              <td style={TD}>
                <StatusBadge status={r.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

