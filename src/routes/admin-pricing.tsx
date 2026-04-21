import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";
import { getPricingRules, updatePricingRule, addPricingRule, deletePricingRule } from "@/lib/adminService";

export const Route = createFileRoute("/admin-pricing")({
  component: AdminPricingPage,
});

function AdminPricingPage() {
  const [pricingRules, setPricingRules] = useState(getPricingRules());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRule, setNewRule] = useState({
    originCountry: '',
    destinationCountry: '',
    baseRatePerKm: 0,
    borderFee: 0,
    customsFee: 0,
    weightChargePerKg: 0,
    vehicleType: 'semi_trailer',
  });

  const handleUpdate = (id: string, field: keyof typeof pricingRules[0], value: number) => {
    updatePricingRule(id, { [field]: value });
    setPricingRules(getPricingRules());
  };

  const handleAdd = () => {
    addPricingRule(newRule);
    setPricingRules(getPricingRules());
    setShowAddForm(false);
    setNewRule({
      originCountry: '',
      destinationCountry: '',
      baseRatePerKm: 0,
      borderFee: 0,
      customsFee: 0,
      weightChargePerKg: 0,
      vehicleType: 'semi_trailer',
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this pricing rule?')) {
      deletePricingRule(id);
      setPricingRules(getPricingRules());
    }
  };

  const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'South Sudan'];
  const vehicleTypes = ['box_truck', 'semi_trailer', 'flatbed', 'refrigerated'];

  return (
    <DashboardLayout role="admin" title="Pricing Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Pricing Rules</h2>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90"
          >
            <i className="fa-solid fa-plus mr-2" />
            Add New Rule
          </button>
        </div>

        {/* Add Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-card rounded-2xl p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold text-primary mb-4">Add Pricing Rule</h3>
              <div className="space-y-3">
                <select
                  className="w-full p-2 border rounded-lg"
                  value={newRule.originCountry}
                  onChange={(e) => setNewRule({...newRule, originCountry: e.target.value})}
                >
                  <option value="">Select Origin</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select
                  className="w-full p-2 border rounded-lg"
                  value={newRule.destinationCountry}
                  onChange={(e) => setNewRule({...newRule, destinationCountry: e.target.value})}
                >
                  <option value="">Select Destination</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select
                  className="w-full p-2 border rounded-lg"
                  value={newRule.vehicleType}
                  onChange={(e) => setNewRule({...newRule, vehicleType: e.target.value})}
                >
                  {vehicleTypes.map(v => <option key={v} value={v}>{v.replace(/_/g, ' ')}</option>)}
                </select>
                <input
                  type="number"
                  placeholder="Base Rate per KM (KES)"
                  className="w-full p-2 border rounded-lg"
                  value={newRule.baseRatePerKm}
                  onChange={(e) => setNewRule({...newRule, baseRatePerKm: Number(e.target.value)})}
                />
                <input
                  type="number"
                  placeholder="Border Fee (KES)"
                  className="w-full p-2 border rounded-lg"
                  value={newRule.borderFee}
                  onChange={(e) => setNewRule({...newRule, borderFee: Number(e.target.value)})}
                />
                <input
                  type="number"
                  placeholder="Customs Fee (KES)"
                  className="w-full p-2 border rounded-lg"
                  value={newRule.customsFee}
                  onChange={(e) => setNewRule({...newRule, customsFee: Number(e.target.value)})}
                />
                <input
                  type="number"
                  placeholder="Weight Charge per KG (KES)"
                  className="w-full p-2 border rounded-lg"
                  value={newRule.weightChargePerKg}
                  onChange={(e) => setNewRule({...newRule, weightChargePerKg: Number(e.target.value)})}
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={handleAdd} className="flex-1 px-4 py-2 bg-accent text-white rounded-lg">
                  Add Rule
                </button>
                <button onClick={() => setShowAddForm(false)} className="flex-1 px-4 py-2 border rounded-lg">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Rules Table */}
        <div className="rounded-2xl bg-card border shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-6 py-3">Route</th>
                  <th className="text-left px-6 py-3">Vehicle</th>
                  <th className="text-left px-6 py-3">Base Rate/km</th>
                  <th className="text-left px-6 py-3">Border Fee</th>
                  <th className="text-left px-6 py-3">Customs Fee</th>
                  <th className="text-left px-6 py-3">Weight/kg</th>
                  <th className="text-left px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {pricingRules.map((rule) => (
                  <tr key={rule.id} className="hover:bg-muted/30">
                    <td className="px-6 py-4">{rule.originCountry} → {rule.destinationCountry}</td>
                    <td className="px-6 py-4 capitalize">{rule.vehicleType.replace(/_/g, ' ')}</td>
                    <td className="px-6 py-4">
                      {editingId === rule.id ? (
                        <input
                          type="number"
                          className="w-24 p-1 border rounded"
                          value={rule.baseRatePerKm}
                          onChange={(e) => handleUpdate(rule.id, 'baseRatePerKm', Number(e.target.value))}
                          onBlur={() => setEditingId(null)}
                          autoFocus
                        />
                      ) : (
                        <span onClick={() => setEditingId(rule.id)} className="cursor-pointer hover:text-accent">
                          KES {rule.baseRatePerKm}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">KES {rule.borderFee.toLocaleString()}</td>
                    <td className="px-6 py-4">KES {rule.customsFee.toLocaleString()}</td>
                    <td className="px-6 py-4">KES {rule.weightChargePerKg}</td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleDelete(rule.id)} className="text-destructive hover:text-destructive/80">
                        <i className="fa-solid fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
