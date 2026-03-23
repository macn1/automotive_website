import { useState, useEffect } from 'react'
import { useLocation }         from 'react-router-dom'
import Icon, { ICONS }         from '../../Ui/Icon'
import { NAV_ITEMS }           from '../../Constants/navItems'

export default function Topbar() {
  const [time, setTime]     = useState(new Date())
  const [notifs, setNotifs] = useState(3)
  const { pathname }        = useLocation()

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const current = NAV_ITEMS.find(n => n.path === pathname) || { label: 'Settings' }

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="topbar-title">{current.label}</div>
        <div className="topbar-breadcrumb">AutoAdmin &nbsp;/&nbsp; {current.label}</div>
      </div>
      <div className="topbar-right">
        <div className="time-badge">
          <Icon d={ICONS.clock} size={12} />
          &nbsp;{time.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', second:'2-digit' })}
        </div>
        <div className="search-box">
          <Icon d={ICONS.search} size={14} />
          <input placeholder="Search..." />
        </div>
        <button className="icon-btn" onClick={() => setNotifs(0)}>
          <Icon d={ICONS.bell} size={17} />
          {notifs > 0 && <span className="notif-dot" />}
        </button>
        <div className="avatar" style={{ cursor:'pointer', fontSize:'12px' }}>AK</div>
      </div>
    </header>
  )
}