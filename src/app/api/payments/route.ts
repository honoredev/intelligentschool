import { NextRequest, NextResponse } from 'next/server'
import { PaymentController } from '@/lib/controllers/paymentController'

export async function GET() {
  try {
    const { payments, stats } = await PaymentController.getPaymentStats()
    return NextResponse.json({ payments, stats })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch payments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log('Payments API received data:', data)
    const payment = await PaymentController.createPayment(data)
    return NextResponse.json(payment, { status: 201 })
  } catch (error) {
    console.error('Payments API error:', error)
    return NextResponse.json({ error: `Failed to create payment: ${error}` }, { status: 500 })
  }
}