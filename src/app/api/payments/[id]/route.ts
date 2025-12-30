import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params
    const { status } = await request.json()
    return NextResponse.json({ id, status, message: 'Payment updated' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update payment status' }, { status: 500 })
  }
}