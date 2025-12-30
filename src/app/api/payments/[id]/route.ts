import { NextRequest, NextResponse } from 'next/server'
import { PaymentController } from '@/lib/controllers/paymentController'

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const payment = await PaymentController.updatePaymentStatus(params.id, status)
    return NextResponse.json(payment)
  } catch (error) {
    console.error('Update payment status error:', error)
    return NextResponse.json({ error: 'Failed to update payment status' }, { status: 500 })
  }
}