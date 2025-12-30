import { NextRequest, NextResponse } from 'next/server'
import { SalesController } from '@/lib/controllers/salesController'
import { CustomerController } from '@/lib/controllers/customerController'
import { UserController } from '@/lib/controllers/userController'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    switch (type) {
      case 'sales':
        if (startDate && endDate) {
          const report = await SalesController.getSalesReport(new Date(startDate), new Date(endDate))
          return NextResponse.json(report)
        }
        break
      case 'customers':
        const customerStats = await CustomerController.getCustomerStats()
        return NextResponse.json(customerStats)
      case 'employees':
        const userPerformance = await UserController.getUserPerformance()
        return NextResponse.json(userPerformance)
      default:
        return NextResponse.json({ error: 'Invalid report type' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 })
  }
}