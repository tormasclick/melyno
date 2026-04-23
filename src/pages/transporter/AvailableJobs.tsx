import { DashboardLayout } from '../../layouts/DashboardLayout'

const menuItems = [
  { icon: 'fa-tachometer-alt', label: 'Dashboard', path: '/transporter' },
  { icon: 'fa-briefcase', label: 'Available Jobs', path: '/transporter/available' },
  { icon: 'fa-truck', label: 'My Shipments', path: '/transporter/shipments' },
  { icon: 'fa-map-marker-alt', label: 'Update Location', path: '/transporter/update-location' },
  { icon: 'fa-check-circle', label: 'Clearance', path: '/transporter/clearance' },
  { icon: 'fa-chart-line', label: 'Earnings', path: '/transporter/earnings' },
  { icon: 'fa-car', label: 'Vehicles', path: '/transporter/vehicles' },
  { icon: 'fa-user', label: 'Profile', path: '/transporter/profile' },
]

export function AvailableJobs() {
  const jobs = [
    { id: 'MLY-2850', from: 'Nairobi', to: 'Kampala', goods: 'Electronics', weight: '500kg', price: 'KES 42,000' },
    { id: 'MLY-2851', from: 'Mombasa', to: 'Nairobi', goods: 'Container', weight: '2000kg', price: 'KES 85,000' },
  ]

  return (
    <DashboardLayout title="Available Jobs" menuItems={menuItems} role="transporter">
      <div className="space-y-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-between items-start">
              <div><p className="font-mono text-sm text-gray-500">{job.id}</p><p className="font-semibold">{job.from} → {job.to}</p><p className="text-gray-600">{job.goods} • {job.weight}</p></div>
              <div className="text-right"><p className="font-bold text-primary">{job.price}</p><button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">Accept Job</button></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
