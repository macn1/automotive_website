import { NavLink, useNavigate } from 'react-router-dom'
import Icon, { ICONS } from '../../Ui/Icon'
import { NAV_ITEMS } from '../../Constants/navItems'


export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-mark">
          <img src="/logo.png" alt="logo" className="logo-img" />          <div>
            <div className="logo-text">AutoAdmin</div>
            <div className="logo-sub">Fleet Portal</div>
          </div>
        </div>
      </div>

      <nav className="nav-section">
        <div className="nav-label">Main Menu</div>
        {NAV_ITEMS.map(n => (
          <NavLink key={n.id} to={n.path} end={n.path === '/admin'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <Icon d={ICONS[n.icon]} size={17} />
            {n.label}
            {n.badge && <span className="nav-badge">{n.badge}</span>}
          </NavLink>
        ))}

        <div className="nav-label" style={{ marginTop: '20px' }}>System</div>
        <NavLink to="/admin/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Icon d={ICONS.settings} size={17} />
          Settings
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-card" onClick={() => navigate('/login')}>
          <div className="avatar">AK</div>
          <div>
            <div className="user-name">Admin Kumar</div>
            <div className="user-role">Super Admin</div>
          </div>
          <div style={{ marginLeft: 'auto', color: 'rgba(240,236,224,0.25)' }}>
            <Icon d={ICONS.logout} size={15} />
          </div>
        </div>
      </div>
    </aside>
  )
}