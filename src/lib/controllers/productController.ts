import { prisma } from '@/lib/prisma'

export class ProductController {
  static async getAllProducts() {
    return await prisma.product.findMany({
      include: {
        stockTransactions: {
          include: {
            user: true
          },
          orderBy: { createdAt: 'desc' }
        },
        saleItems: {
          include: {
            sale: {
              include: {
                customer: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })
  }

  static async createProduct(data: any) {
    return await prisma.product.create({
      data: {
        name: data.name,
        category: data.category,
        currentStock: data.currentStock,
        minStock: data.minStock,
        price: data.price,
        description: data.description
      }
    })
  }

  static async updateStock(productId: string, quantity: number, type: 'IN' | 'OUT', userId: string, reference: string) {
    const product = await prisma.product.findUnique({ where: { id: productId } })
    if (!product) throw new Error('Product not found')

    const newStock = type === 'IN' 
      ? product.currentStock + quantity 
      : product.currentStock - quantity

    const [updatedProduct] = await Promise.all([
      prisma.product.update({
        where: { id: productId },
        data: { currentStock: newStock }
      }),
      prisma.stockTransaction.create({
        data: {
          productId,
          userId,
          type,
          quantity,
          reference
        }
      })
    ])

    return updatedProduct
  }
}