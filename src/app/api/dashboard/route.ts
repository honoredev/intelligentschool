import { NextResponse } from 'next/server'

export async function GET() {
  const dashboardData = {
    todaysSales: 125000,
    totalRevenue: 2450000,
    totalInvoices: 47,
    topProduct: 'Rice 25kg',
    lowStockItems: [
      { name: 'Cooking Oil 5L', stock: 8, minStock: 20, status: 'critical' },
      { name: 'Sugar 2kg', stock: 15, minStock: 25, status: 'low' },
      { name: 'Flour 10kg', stock: 12, minStock: 15, status: 'low' }
    ],
    recentCustomers: [
      { name: 'John Uwimana', invoice: 'INV-045', amount: 'RWF 45,000', date: new Date().toLocaleDateString() },
      { name: 'Marie Mukamana', invoice: 'INV-044', amount: 'RWF 78,500', date: new Date(Date.now() - 86400000).toLocaleDateString() },
      { name: 'Paul Nkurunziza', invoice: 'INV-043', amount: 'RWF 32,000', date: new Date(Date.now() - 172800000).toLocaleDateString() },
      { name: 'Grace Uwase', invoice: 'INV-042', amount: 'RWF 56,200', date: new Date(Date.now() - 259200000).toLocaleDateString() }
    ]
  }
  
  return NextResponse.json(dashboardData)
}