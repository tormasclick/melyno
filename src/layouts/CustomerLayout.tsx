import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const menuItems = [
  { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '➕', label: 'New Shipment', path: '/new-shipment' },
  { icon: '📦', label: 'My Shipments', path: '/my-shipments' },
  { icon: '📍', label: 'Track', path: '/track' },
  { icon: '💰', label: 'Pricing', path: '/pricing' },
  { icon: '👤', label: 'Profile', path: '/profile' },
]

export function CustomerLayout({ children }: { children: React.ReactNode }) {
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
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="text-sm">{item.label}</span>}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-800">
          <button onClick={handleLogout} className="flex items-center gap-3 text-gray-400 hover:text-white w-full">
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white border-b px-6 py-3">
          <div className="text-sm text-gray-500">
            Customer Portal / {location.pathname.replace('/', '') || 'dashboard'}
          </div>
        </div>
        <header className="bg-white shadow-sm px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Jane Mwangi</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
