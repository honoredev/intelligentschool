export class UserController {
  static hardcodedUsers = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@school.com",
      role: "ADMINISTRATOR",
      status: "ACTIVE",
      createdAt: new Date()
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
      createdAt: new Date()
    }
    
    this.hardcodedUsers.push(newUser)
    return newUser
  }

  static async getUserPerformance() {
    return []
  }
}