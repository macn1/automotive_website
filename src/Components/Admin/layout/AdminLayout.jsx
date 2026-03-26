// AdminLayout.jsx
import { Outlet, useLocation } from 'react-router-dom'  // ← remove useNavigation
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import LoadingBar from '../../Ui/LoadingBar'
import '../admin.css'
import { ThemeProvider } from '../context/ThemeContext'

export default function AdminLayout() {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Simulate loading bar on every route change
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [location.pathname])   // ← triggers on every page change

  return (
    <ThemeProvider>
      <LoadingBar loading={loading} />
      <div className="dash-root">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="main-area">
          <Topbar onMenuClick={() => setSidebarOpen(o => !o)} />
          <main className="content-area">
            <div key={location.pathname} className="content-inner">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}