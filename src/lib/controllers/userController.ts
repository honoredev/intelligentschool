export class UserController {
  static hardcodedUsers = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@kanga.com",
      role: "ADMINISTRATOR",
      status: "ACTIVE",
      createdAt: new Date(),
      lastLogin: new Date(),
      sales: [],
      stockTransactions: []
    },
    {
      id: 2,
      name: "Sales Person",
      email: "sales@kanga.com",
      role: "SALES",
      status: "ACTIVE",
      createdAt: new Date(),
      lastLogin: new Date(Date.now() - 86400000),
      sales: [],
      stockTransactions: []
    }
  ]

  static async getAllUsers() {
    return this.hardcodedUsers
  }

  static async createUser(data: any) {
    const newUser = {
      id: this.hardcodedUsers.length + 1,
      name: data.name,
      email: data.email,
      role: data.role,
      status: data.status || 'ACTIVE',
      createdAt: new Date(),
      lastLogin: null,
      sales: [],
      stockTransactions: []
    }
    
    this.hardcodedUsers.push(newUser)
    return newUser
  }

  static async updateUser(id: string, data: any) {
    const user = this.hardcodedUsers.find(u => u.id === parseInt(id))
    if (user) {
      Object.assign(user, {
        name: data.name || user.name,
        email: data.email || user.email,
        role: data.role || user.role,
        status: data.status || user.status,
        lastLogin: data.lastLogin || user.lastLogin
      })
    }
    return user
  }

  static async getUserPerformance() {
    return this.hardcodedUsers.map(user => ({
      ...user,
      totalSales: 125000,
      salesCount: 15,
      completedSales: 12
    }))
  }
}