import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import LoadingBar from '../../Ui/LoadingBar'
import '../../Admin/admin.css'

export default function AdminLayout() {
    const loading = false
    const location = useLocation()


    return (
        <>
            <LoadingBar loading={loading} />
            <div className="dash-root">
                <Sidebar />
                <div className="main-area">
                    <Topbar />
                    <main className="content-area">
                        <div key={location.pathname} className="content-inner">
                            <Outlet />   {/* ← page swaps here, sidebar & topbar stay */}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}