import { Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useState } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  role: 'super_admin' | 'admin' | 'customer' | 'transporter';
}

export function AppLayout({ children, title, role }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const getMenuItems = () => {
    if (role === 'customer') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/customers' },
        { icon: '➕', label: 'New Shipment', path: '/customers/new' },
        { icon: '📦', label: 'My Shipments', path: '/customers/shipments' },
        { icon: '📍', label: 'Track', path: '/customers/track' },
        { icon: '💰', label: 'Pricing', path: '/customers/pricing' },
        { icon: '👤', label: 'Profile', path: '/customers/profile' },
      ];
    } else if (role === 'transporter') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/transporters' },
        { icon: '🚚', label: 'Available Jobs', path: '/transporters/available' },
        { icon: '📦', label: 'My Shipments', path: '/transporters/shipments' },
        { icon: '✅', label: 'Clearance', path: '/transporters/clearance' },
        { icon: '💰', label: 'Earnings', path: '/transporters/earnings' },
        { icon: '📍', label: 'Update Location', path: '/transporters/tracking' },
        { icon: '🚛', label: 'Vehicles', path: '/transporters/vehicles' },
      ];
    } else if (role === 'admin') {
      return [
        { icon: '📊', label: 'Dashboard', path: '/admin' },
        { icon: '📦', label: 'Shipments', path: '/admin/shipments' },
        { icon: '👥', label: 'Requests', path: '/admin/requests' },
        { icon: '💰', label: 'Pricing', path: '/admin/pricing' },
        { icon: '✅', label: 'Clearances', path: '/admin/clearances' },
        { icon: '📍', label: 'Tracking', path: '/admin/tracking' },
        { icon: '👤', label: 'Users', path: '/admin/users' },
      ];
    }
    return [];
  };

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(s => s);
    const breadcrumbs = [{ label: 'Home', path: `/${segments[0] || ''}` }];
    
    let currentPath = '';
    for (const segment of segments) {
      currentPath += `/${segment}`;
      const menuItem = getMenuItems().find(item => item.path === currentPath);
      breadcrumbs.push({ label: menuItem?.label || segment, path: currentPath });
    }
    return breadcrumbs;
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate({ to: '/login' });
  };

  const menuItems = getMenuItems();
  const breadcrumbs = getBreadcrumbs();

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
        {/* Breadcrumbs */}
        <div className="bg-white border-b px-6 py-3">
          <div className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                {idx > 0 && <span className="text-gray-400">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-gray-600 font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="text-blue-600 hover:underline">{crumb.label}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Page Header */}
        <header className="bg-white shadow-sm px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
