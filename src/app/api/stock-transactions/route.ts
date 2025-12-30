import { NextResponse } from 'next/server'

const hardcodedTransactions = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    type: "IN",
    quantity: 50,
    reference: "STOCK-IN-001",
    createdAt: new Date(),
    product: { id: 1, name: "Cooking Oil 5L" },
    user: { id: 1, name: "Admin User" }
  },
  {
    id: 2,
    productId: 2,
    userId: 1,
    type: "OUT",
    quantity: 5,
    reference: "SALE-001",
    createdAt: new Date(Date.now() - 86400000),
    product: { id: 2, name: "Rice 25kg" },
    user: { id: 1, name: "Admin User" }
  },
  {
    id: 3,
    productId: 3,
    userId: 1,
    type: "IN",
    quantity: 30,
    reference: "STOCK-IN-002",
    createdAt: new Date(Date.now() - 172800000),
    product: { id: 3, name: "Sugar 2kg" },
    user: { id: 1, name: "Admin User" }
  }
]

export async function GET() {
  return NextResponse.json(hardcodedTransactions)
}