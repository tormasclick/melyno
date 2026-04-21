import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  role: 'super_admin' | 'admin' | 'customer' | 'transporter';
}

export function AppLayout({ children, title, role }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuItems = (): MenuItem[] => {
    if (role === 'super_admin') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/super-admin' },
        { icon: '📦', label: 'Shipments', path: '/super-admin?tab=shipments' },
        { icon: '💰', label: 'Pricing Rules', path: '/super-admin?tab=pricing' },
        { icon: '👥', label: 'Requests', path: '/super-admin?tab=requests' },
        { icon: '✅', label: 'Clearances', path: '/super-admin?tab=clearances' },
        { icon: '📍', label: 'Live Tracking', path: '/super-admin?tab=tracking' },
        { icon: '👤', label: 'Users', path: '/super-admin?tab=users' },
        { icon: '⚙️', label: 'Settings', path: '/super-admin?tab=settings' },
      ];
    } else if (role === 'transporter') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/provider' },
        { icon: '🚚', label: 'Available Jobs', path: '/provider?tab=available' },
        { icon: '📦', label: 'My Shipments', path: '/provider?tab=active' },
        { icon: '✅', label: 'Clearance Form', path: '/provider?tab=clearance' },
        { icon: '💰', label: 'Earnings', path: '/provider?tab=earnings' },
        { icon: '📍', label: 'Update Location', path: '/provider?tab=tracking' },
        { icon: '🚛', label: 'My Vehicles', path: '/provider?tab=vehicles' },
      ];
    } else if (role === 'customer') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/dashboard' },
        { icon: '➕', label: 'New Shipment', path: '/dashboard?tab=new' },
        { icon: '📦', label: 'My Shipments', path: '/dashboard?tab=shipments' },
        { icon: '📍', label: 'Track', path: '/dashboard?tab=tracking' },
        { icon: '💰', label: 'Pricing', path: '/dashboard?tab=pricing' },
        { icon: '👤', label: 'Profile', path: '/dashboard?tab=profile' },
      ];
    }
    return [];
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate({ to: '/login' });
  };

  const getCurrentTab = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'dashboard';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {sidebarOpen && <span className="text-xl font-bold">Melyno</span>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-white">
            {sidebarOpen ? '◀' : '▶'}
          </button>
        </div>
        
        <nav className="flex-1 py-4">
          {getMenuItems().map((item) => {
            const isActive = location.pathname === item.path.split('?')[0] && 
              (item.path.includes('tab=') ? getCurrentTab() === item.path.split('tab=')[1] : true);
            return (
              <Link
                key={item.path}
                to={item.path.split('?')[0]}
                search={item.path.includes('tab=') ? { tab: item.path.split('tab=')[1] } : undefined}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
              >
                <span className="text-xl">{item.icon}</span>
                {sidebarOpen && <span className="text-sm">{item.label}</span>}
              </Link>
            );
          })}
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
        <header className="bg-white shadow-sm px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
