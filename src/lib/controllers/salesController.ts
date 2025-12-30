export class SalesController {
  static hardcodedSales = [
    { 
      id: 1, 
      invoice: "INV-045", 
      amount: 45000, 
      status: "PAID", 
      createdAt: new Date(),
      customer: { id: 1, name: "John Uwimana" },
      user: { id: 1, name: "Admin User" },
      payment: null,
      items: []
    },
    { 
      id: 2, 
      invoice: "INV-044", 
      amount: 78500, 
      status: "PAID", 
      createdAt: new Date(Date.now() - 86400000),
      customer: { id: 2, name: "Marie Mukamana" },
      user: { id: 1, name: "Admin User" },
      payment: null,
      items: []
    },
    { 
      id: 3, 
      invoice: "INV-043", 
      amount: 32000, 
      status: "PENDING", 
      createdAt: new Date(Date.now() - 172800000),
      customer: { id: 3, name: "Paul Nkurunziza" },
      user: { id: 1, name: "Admin User" },
      payment: null,
      items: []
    },
    { 
      id: 4, 
      invoice: "INV-042", 
      amount: 56200, 
      status: "PAID", 
      createdAt: new Date(Date.now() - 259200000),
      customer: { id: 4, name: "Grace Uwase" },
      user: { id: 1, name: "Admin User" },
      payment: null,
      items: []
    }
  ]

  static async getAllSales() {
    return this.hardcodedSales
  }

  static async createSale(data: any) {
    const lastSale = this.hardcodedSales[0]
    const lastNumber = lastSale ? parseInt(lastSale.invoice.split('-')[1]) : 0
    const invoiceNumber = `INV-${String(lastNumber + 1).padStart(3, '0')}`
    
    const newSale = {
      id: this.hardcodedSales.length + 1,
      invoice: invoiceNumber,
      amount: data.amount,
      status: data.status || 'PENDING',
      createdAt: new Date(),
      customer: { id: data.customerId, name: "New Customer" },
      user: { id: 1, name: "Admin User" },
      payment: null,
      items: []
    }
    
    this.hardcodedSales.unshift(newSale)
    return newSale
  }

  static async getSalesByEmployee() {
    return [
      {
        id: 1,
        name: "Admin User",
        sales: this.hardcodedSales
      }
    ]
  }

  static async getSalesReport(startDate: Date, endDate: Date) {
    return this.hardcodedSales.filter(sale => {
      const saleDate = new Date(sale.createdAt)
      return saleDate >= startDate && saleDate <= endDate
    })
  }
}