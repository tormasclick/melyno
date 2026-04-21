import { useState } from 'react';
import { mockPricingRules } from '@/lib/mockData';

interface Route {
  from: string;
  to: string;
  fromCountry: string;
  toCountry: string;
  distance: number;
}

const routes: Route[] = [
  { from: 'Nairobi', to: 'Kampala', fromCountry: 'Kenya', toCountry: 'Uganda', distance: 700 },
  { from: 'Nairobi', to: 'Dar es Salaam', fromCountry: 'Kenya', toCountry: 'Tanzania', distance: 900 },
  { from: 'Nairobi', to: 'Kigali', fromCountry: 'Kenya', toCountry: 'Rwanda', distance: 1200 },
  { from: 'Mombasa', to: 'Nairobi', fromCountry: 'Kenya', toCountry: 'Kenya', distance: 480 },
  { from: 'Kampala', to: 'Juba', fromCountry: 'Uganda', toCountry: 'South Sudan', distance: 800 },
];

export function PricingCalculator() {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [weight, setWeight] = useState(1000);
  const [vehicleType, setVehicleType] = useState('semi_trailer');
  const [price, setPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!selectedRoute) return;
    
    const rule = mockPricingRules.find(
      r => r.originCountry === selectedRoute.fromCountry && 
           r.destinationCountry === selectedRoute.toCountry &&
           r.vehicleType === vehicleType
    );
    
    if (!rule) return;
    
    const distanceCost = selectedRoute.distance * rule.baseRatePerKm;
    const weightCost = weight * rule.weightChargePerKg;
    const total = distanceCost + weightCost + rule.borderFee + rule.customsFee;
    
    setPrice(total);
  };

  return (
    <div className="bg-card rounded-2xl shadow-soft border p-6">
      <h3 className="text-xl font-bold text-primary mb-4">Calculate Your Shipping Cost</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">Route</label>
          <select 
            className="w-full p-3 border rounded-lg bg-background"
            onChange={(e) => {
              const route = routes.find(r => `${r.from}-${r.to}` === e.target.value);
              setSelectedRoute(route || null);
            }}
          >
            <option value="">Select Route</option>
            {routes.map(r => (
              <option key={`${r.from}-${r.to}`} value={`${r.from}-${r.to}`}>
                {r.from} → {r.to} ({r.distance} km)
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">Weight (kg)</label>
          <input
            type="number"
            className="w-full p-3 border rounded-lg bg-background"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            min={1}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-2">Vehicle Type</label>
          <select 
            className="w-full p-3 border rounded-lg bg-background"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="box_truck">Box Truck (up to 5 tons)</option>
            <option value="semi_trailer">Semi Trailer (up to 20 tons)</option>
            <option value="flatbed">Flatbed (up to 15 tons)</option>
            <option value="refrigerated">Refrigerated (up to 10 tons)</option>
          </select>
        </div>
        
        <button 
          onClick={calculatePrice}
          className="w-full bg-gradient-primary text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          disabled={!selectedRoute}
        >
          Calculate Price
        </button>
        
        {price !== null && (
          <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
            <p className="text-sm text-muted-foreground">Estimated Total</p>
            <p className="text-3xl font-bold text-primary">KES {price.toLocaleString()}</p>
            <div className="mt-2 text-xs text-muted-foreground space-y-1">
              <p>✓ Distance: {selectedRoute?.distance} km</p>
              <p>✓ Weight: {weight} kg</p>
              {selectedRoute?.fromCountry !== selectedRoute?.toCountry && (
                <>
                  <p>✓ Border crossing fee included</p>
                  <p>✓ Customs clearance fee included</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
