export class PaymentController {
  static hardcodedPayments = [
    {
      id: 1,
      saleId: 1,
      amount: 45000,
      method: "MOBILE_MONEY",
      status: "COMPLETED",
      reference: "MM-001",
      createdAt: new Date(),
      sale: {
        id: 1,
        customerId: 1,
        customer: { id: 1, name: "John Uwimana" },
        user: { id: 1, name: "Admin User" }
      }
    },
    {
      id: 2,
      saleId: 2,
      amount: 78500,
      method: "CASH",
      status: "COMPLETED",
      reference: "CASH-001",
      createdAt: new Date(),
      sale: {
        id: 2,
        customerId: 2,
        customer: { id: 2, name: "Marie Mukamana" },
        user: { id: 1, name: "Admin User" }
      }
    },
    {
      id: 3,
      saleId: 3,
      amount: 32000,
      method: "BANK_TRANSFER",
      status: "PENDING",
      reference: "BT-001",
      createdAt: new Date(),
      sale: {
        id: 3,
        customerId: 3,
        customer: { id: 3, name: "Paul Nkurunziza" },
        user: { id: 1, name: "Admin User" }
      }
    }
  ]

  static async getAllPayments() {
    return this.hardcodedPayments
  }

  static async createPayment(data: any) {
    const newPayment = {
      id: this.hardcodedPayments.length + 1,
      saleId: data.saleId,
      amount: data.amount,
      method: data.method,
      status: data.status || 'PENDING',
      reference: data.reference,
      createdAt: new Date(),
      sale: {
        id: data.saleId,
        customerId: 1,
        customer: { id: 1, name: "New Customer" },
        user: { id: 1, name: "Admin User" }
      }
    }
    
    this.hardcodedPayments.push(newPayment)
    return newPayment
  }

  static async updatePaymentStatus(id: string, status: string) {
    const payment = this.hardcodedPayments.find(p => p.id === parseInt(id))
    if (payment) {
      payment.status = status
    }
    return payment
  }

  static async getPaymentStats() {
    const payments = this.hardcodedPayments
    
    const stats = {
      totalReceived: payments.filter(p => p.status === 'COMPLETED').reduce((sum, p) => sum + p.amount, 0),
      totalPending: payments.filter(p => p.status === 'PENDING').reduce((sum, p) => sum + p.amount, 0),
      totalFailed: payments.filter(p => p.status === 'FAILED').reduce((sum, p) => sum + p.amount, 0),
      byMethod: {
        mobileMoneyCount: payments.filter(p => p.method === 'MOBILE_MONEY').length,
        bankTransferCount: payments.filter(p => p.method === 'BANK_TRANSFER').length,
        cashCount: payments.filter(p => p.method === 'CASH').length
      }
    }

    return { payments, stats }
  }
}