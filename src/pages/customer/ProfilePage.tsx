export function ProfilePage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="space-y-4">
        <div><label className="block text-sm font-medium mb-1">Name</label><input type="text" className="w-full p-3 border rounded-lg" defaultValue="Jane Mwangi" /></div>
        <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" className="w-full p-3 border rounded-lg" defaultValue="jane@example.com" /></div>
        <div><label className="block text-sm font-medium mb-1">Phone</label><input type="tel" className="w-full p-3 border rounded-lg" defaultValue="+254712345678" /></div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">Save Changes</button>
      </div>
    </div>
  )
}
