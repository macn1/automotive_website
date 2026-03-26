import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Icon, { ICONS } from '../../Ui/Icon'
import { NAV_ITEMS } from '../../Constants/navItems'
import { useTheme } from '../context/ThemeContext'

export default function Topbar({ onMenuClick }) {
  const [time, setTime] = useState(new Date())
  const [notifs, setNotifs] = useState(3)
  const { pathname } = useLocation()
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const current = NAV_ITEMS.find(n => n.path === pathname) || { label: 'Settings' }

  return (
    <header className="topbar">
      <div className="topbar-left">

        {/* ← Hamburger: only visible on mobile via CSS */}
        <button className="icon-btn menu-toggle" onClick={onMenuClick}>
          <Icon d={["M3 12h18", "M3 6h18", "M3 18h18"]} size={17} />
        </button>

        <div className="topbar-title-wrap">
          <div className="topbar-title">{current.label}</div>
          <div className="topbar-breadcrumb">AutoAdmin &nbsp;/&nbsp; {current.label}</div>
        </div>
      </div>

      <div className="topbar-right">

        {/* Time — hidden on tablet via CSS */}
        <div className="time-badge">
          <Icon d={ICONS.clock} size={12} />
          &nbsp;{time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>

        {/* Search — hidden on mobile via CSS */}
        <div className="search-box topbar-search">
          <Icon d={ICONS.search} size={14} />
          <input placeholder="Search..." />
        </div>

        {/* Notifications */}
        <button className="icon-btn" onClick={() => setNotifs(0)}>
          <Icon d={ICONS.bell} size={17} />
          {notifs > 0 && <span className="notif-dot" />}
        </button>

        {/* ← Theme toggle */}
        <button className="icon-btn" onClick={toggle} title="Toggle theme">
          {theme === 'dark'
            ? <Icon d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" size={17} />
            : <Icon d={["M12 2v2", "M12 20v2", "M4.93 4.93l1.41 1.41", "M17.66 17.66l1.41 1.41", "M2 12h2", "M20 12h2", "M4.93 19.07l1.41-1.41", "M17.66 6.34l1.41-1.41"]} size={17} />
          }
        </button>

        <div className="avatar" style={{ cursor: 'pointer', fontSize: '12px' }}>AK</div>
      </div>
    </header>
  )
}