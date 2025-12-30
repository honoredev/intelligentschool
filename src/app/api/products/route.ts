import { NextRequest, NextResponse } from 'next/server'

const hardcodedProducts = [
  { id: 1, name: "Cooking Oil 5L", currentStock: 8, minStock: 20, price: 8500, category: "Food", description: "Premium cooking oil", createdAt: new Date(), stockTransactions: [] },
  { id: 2, name: "Rice 25kg", currentStock: 45, minStock: 15, price: 25000, category: "Food", description: "High quality rice", createdAt: new Date(), stockTransactions: [] },
  { id: 3, name: "Sugar 2kg", currentStock: 15, minStock: 25, price: 3500, category: "Food", description: "White sugar", createdAt: new Date(), stockTransactions: [] },
  { id: 4, name: "Flour 10kg", currentStock: 12, minStock: 15, price: 12000, category: "Food", description: "Wheat flour", createdAt: new Date(), stockTransactions: [] },
  { id: 5, name: "Soap 200g", currentStock: 30, minStock: 10, price: 800, category: "Hygiene", description: "Bath soap", createdAt: new Date(), stockTransactions: [] }
]

export async function GET() {
  return NextResponse.json(hardcodedProducts)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  if (data.type === 'stock_transaction') {
    const product = hardcodedProducts.find(p => p.id === data.productId)
    
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    
    if (data.transactionType === 'OUT' && data.quantity > product.currentStock) {
      return NextResponse.json({ 
        error: `Insufficient stock! Available: ${product.currentStock}, Requested: ${data.quantity}` 
      }, { status: 400 })
    }
    
    const newStock = data.transactionType === 'IN' 
      ? product.currentStock + data.quantity
      : product.currentStock - data.quantity
    
    product.currentStock = newStock
    
    return NextResponse.json(product)
  }
  
  if (data.type === 'create_product') {
    const newProduct = {
      id: hardcodedProducts.length + 1,
      name: data.name,
      category: data.category,
      currentStock: data.currentStock || 0,
      minStock: data.minStock,
      price: data.price,
      description: data.description || '',
      createdAt: new Date(),
      stockTransactions: []
    }
    
    hardcodedProducts.push(newProduct)
    return NextResponse.json(newProduct, { status: 201 })
  }
  
  return NextResponse.json({ error: 'Invalid request type' }, { status: 400 })
}