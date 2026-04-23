export function PricingPage() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-4">Pricing Calculator</h2>
      <div className="space-y-4">
        <input type="text" placeholder="From" className="w-full p-3 border rounded-lg" />
        <input type="text" placeholder="To" className="w-full p-3 border rounded-lg" />
        <input type="number" placeholder="Weight (kg)" className="w-full p-3 border rounded-lg" />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
          Calculate Price
        </button>
      </div>
    </div>
  )
}
