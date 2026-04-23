import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface MenuItem {
  icon: string
  label: string
  path: string
}

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  menuItems: MenuItem[]
  role: string
}

export function DashboardLayout({ children, title, menuItems, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col shadow-lg`}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && <span className="text-xl font-bold">Melyno</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-white">
            <i className={`fas ${sidebarOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`} />
          </button>
        </div>
        
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <i className="fas fa-user text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <p className="text-sm font-medium">{role === 'admin' ? 'Super Admin' : role === 'customer' ? 'Jane Mwangi' : 'John Otieno'}</p>
                <p className="text-xs text-gray-400 capitalize">{role}</p>
              </div>
            )}
          </div>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <i className={`fas ${item.icon} w-5`} />
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-gray-400 hover:text-white w-full">
            <i className="fas fa-sign-out-alt w-5" />
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm px-6 py-4 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <div className="flex items-center gap-4">
            <i className="fas fa-bell text-gray-400 text-xl cursor-pointer hover:text-gray-600" />
            <i className="fas fa-user-circle text-gray-400 text-2xl cursor-pointer hover:text-gray-600" />
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
