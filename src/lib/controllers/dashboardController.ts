// Placeholder - dashboard controller not used in school system
export class DashboardController {
  static async getDashboardStats() {
    return {
      products: [],
      customers: [],
      sales: [],
      payments: [],
      users: [],
      stats: {
        totalRevenue: 0,
        todaysSales: 0,
        totalInvoices: 0,
        lowStockProducts: []
      }
    }
  }
}