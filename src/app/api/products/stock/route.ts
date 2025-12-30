import { NextRequest, NextResponse } from 'next/server'
import { ProductController } from '@/lib/controllers/productController'

export async function POST(request: NextRequest) {
  try {
    const { productId, quantity, type, userId, reference } = await request.json()
    const product = await ProductController.updateStock(productId, quantity, type, userId, reference)
    return NextResponse.json(product)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update stock' }, { status: 500 })
  }
}