export class CustomerController {
  static hardcodedCustomers = [
    {
      id: 1,
      name: "John Uwimana",
      email: "john@example.com",
      phone: "+250788123456",
      status: "ACTIVE",
      createdAt: new Date(),
      sales: [
        { id: 1, amount: 45000, date: new Date(), payment: { status: "COMPLETED" } }
      ]
    },
    {
      id: 2,
      name: "Marie Mukamana",
      email: "marie@example.com",
      phone: "+250788654321",
      status: "ACTIVE",
      createdAt: new Date(),
      sales: [
        { id: 2, amount: 78500, date: new Date(), payment: { status: "COMPLETED" } }
      ]
    }
  ]

  static async getAllCustomers() {
    return this.hardcodedCustomers
  }

  static async createCustomer(data: any) {
    const newCustomer = {
      id: this.hardcodedCustomers.length + 1,
      name: data.name,
      email: data.email,
      phone: data.phone,
      status: data.status || 'ACTIVE',
      createdAt: new Date(),
      sales: []
    }
    
    this.hardcodedCustomers.push(newCustomer)
    return newCustomer
  }

  static async updateCustomer(id: string, data: any) {
    const customer = this.hardcodedCustomers.find(c => c.id === parseInt(id))
    if (customer) {
      Object.assign(customer, {
        name: data.name || customer.name,
        email: data.email || customer.email,
        phone: data.phone || customer.phone,
        status: data.status || customer.status
      })
    }
    return customer
  }

  static async getCustomerStats() {
    return this.hardcodedCustomers.map(customer => ({
      ...customer,
      totalSpent: customer.sales.reduce((sum, sale) => sum + sale.amount, 0),
      orders: customer.sales.length,
      lastOrder: customer.sales[0]?.date || null
    }))
  }
}