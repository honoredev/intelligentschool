import { NextRequest, NextResponse } from 'next/server'

const hardcodedCustomers = [
  { 
    id: 1, 
    name: "John Uwimana", 
    email: "john@example.com", 
    phone: "+250788123456", 
    status: "ACTIVE", 
    createdAt: new Date(),
    sales: [
      { id: 1, invoice: "INV-045", amount: 45000, status: "PAID", createdAt: new Date(), payment: null, items: [] }
    ]
  },
  { 
    id: 2, 
    name: "Marie Mukamana", 
    email: "marie@example.com", 
    phone: "+250788654321", 
    status: "ACTIVE", 
    createdAt: new Date(),
    sales: [
      { id: 2, invoice: "INV-044", amount: 78500, status: "PAID", createdAt: new Date(), payment: null, items: [] }
    ]
  },
  { 
    id: 3, 
    name: "Paul Nkurunziza", 
    email: "paul@example.com", 
    phone: "+250788987654", 
    status: "ACTIVE", 
    createdAt: new Date(),
    sales: [
      { id: 3, invoice: "INV-043", amount: 32000, status: "PENDING", createdAt: new Date(), payment: null, items: [] }
    ]
  },
  { 
    id: 4, 
    name: "Grace Uwase", 
    email: "grace@example.com", 
    phone: "+250788456789", 
    status: "ACTIVE", 
    createdAt: new Date(),
    sales: [
      { id: 4, invoice: "INV-042", amount: 56200, status: "PAID", createdAt: new Date(), payment: null, items: [] }
    ]
  }
]

export async function GET() {
  return NextResponse.json(hardcodedCustomers)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  const newCustomer = {
    id: hardcodedCustomers.length + 1,
    name: data.name,
    email: data.email,
    phone: data.phone,
    status: data.status || 'ACTIVE',
    createdAt: new Date(),
    sales: []
  }
  
  hardcodedCustomers.push(newCustomer)
  return NextResponse.json(newCustomer, { status: 201 })
}