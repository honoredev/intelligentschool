import { prisma } from '@/lib/prisma'

export class DashboardController {
  static async getDashboardStats() {
    try {
      const [products, customers, sales, payments, users] = await Promise.all([
        prisma.product.findMany({
          orderBy: { createdAt: 'desc' }
        }),
        prisma.customer.findMany({
          include: {
            sales: {
              include: {
                payment: true
              }
            }
          }
        }),
        prisma.sale.findMany({
          include: {
            customer: true,
            user: true,
            payment: true,
            items: {
              include: {
                product: true
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        }),
        prisma.payment.findMany({
          include: {
            sale: {
              include: {
                customer: true
              }
            }
          }
        }),
        prisma.user.findMany({
          include: {
            sales: {
              include: {
                customer: true,
                payment: true
              }
            }
          }
        })
      ])

      const totalRevenue = sales.reduce((sum, sale) => sum + Number(sale.amount), 0)
      const todaysSales = sales.filter(sale => 
        new Date(sale.date).toDateString() === new Date().toDateString()
      ).reduce((sum, sale) => sum + Number(sale.amount), 0)

      const lowStockProducts = products.filter(product => 
        product.currentStock <= product.minStock
      )

      return {
        products,
        customers,
        sales,
        payments,
        users,
        stats: {
          totalRevenue,
          todaysSales,
          totalInvoices: sales.length,
          lowStockProducts
        }
      }
    } catch (error) {
      throw new Error(`Dashboard stats error: ${error}`)
    }
  }
}