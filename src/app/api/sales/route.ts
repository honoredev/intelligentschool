import { NextRequest, NextResponse } from 'next/server'
import { SalesController } from '@/lib/controllers/salesController'

export async function GET() {
  try {
    const sales = await SalesController.getAllSales()
    return NextResponse.json(sales)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sales' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log('Sales API received data:', data)
    const sale = await SalesController.createSale(data)
    return NextResponse.json(sale, { status: 201 })
  } catch (error) {
    console.error('Sales API error:', error)
    return NextResponse.json({ error: `Failed to create sale: ${error}` }, { status: 500 })
  }
}