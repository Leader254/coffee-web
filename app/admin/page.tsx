"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Coffee,
  Package,
  MessageSquare,
  Settings,
  BarChart3,
  Calendar,
  DollarSign,
  ShoppingCart,
  LogOut,
} from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem("adminAuth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin/login")
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Coffee className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-pulse" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">Highland Harvest - Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-green-600 border-green-600">
                Online
              </Badge>
              <Button variant="outline" size="sm" onClick={() => router.push("/")}>
                View Site
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your coffee farm.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">+15.3% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Coffee Bags Sold</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest coffee orders from customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "#1234",
                      customer: "John Doe",
                      product: "Colombian Supremo",
                      amount: "$24.99",
                      status: "Shipped",
                    },
                    {
                      id: "#1235",
                      customer: "Jane Smith",
                      product: "High Altitude Blend",
                      amount: "$28.99",
                      status: "Processing",
                    },
                    {
                      id: "#1236",
                      customer: "Mike Johnson",
                      product: "Volcanic Dark Roast",
                      amount: "$32.99",
                      status: "Delivered",
                    },
                    {
                      id: "#1237",
                      customer: "Sarah Wilson",
                      product: "Colombian Supremo",
                      amount: "$24.99",
                      status: "Pending",
                    },
                  ].map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-sm text-gray-600">{order.product}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.amount}</p>
                        <Badge
                          variant={
                            order.status === "Delivered"
                              ? "default"
                              : order.status === "Shipped"
                                ? "secondary"
                                : order.status === "Processing"
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inventory Status */}
            <Card>
              <CardHeader>
                <CardTitle>Inventory Status</CardTitle>
                <CardDescription>Current stock levels for coffee products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Colombian Supremo", stock: 45, total: 100, status: "In Stock" },
                    { name: "High Altitude Blend", stock: 23, total: 50, status: "Low Stock" },
                    { name: "Volcanic Dark Roast", stock: 8, total: 30, status: "Very Low" },
                  ].map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-sm text-gray-600">
                          {item.stock}/{item.total}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            item.stock / item.total > 0.5
                              ? "bg-green-600"
                              : item.stock / item.total > 0.2
                                ? "bg-yellow-600"
                                : "bg-red-600"
                          }`}
                          style={{ width: `${(item.stock / item.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Package className="mr-2 h-4 w-4" />
                  Add New Product
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Farmers
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Messages
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Sales Reports
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Site Settings
                </Button>
              </CardContent>
            </Card>

            {/* Harvest Calendar */}
            <Card>
              <CardHeader>
                <CardTitle>Harvest Calendar</CardTitle>
                <CardDescription>Upcoming harvest activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-amber-600" />
                    <div>
                      <p className="font-medium">Main Harvest</p>
                      <p className="text-sm text-gray-600">Oct 15 - Dec 20</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <div>
                      <p className="font-medium">Quality Testing</p>
                      <p className="text-sm text-gray-600">Jan 5 - Jan 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <div>
                      <p className="font-medium">Pruning Season</p>
                      <p className="text-sm text-gray-600">Feb 1 - Mar 15</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Customer inquiries and feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      name: "Alice Brown",
                      message: "Love the Colombian Supremo! When will you have more?",
                      time: "2h ago",
                    },
                    { name: "David Lee", message: "Interested in bulk orders for my café", time: "5h ago" },
                    { name: "Emma Davis", message: "Can you ship to Europe?", time: "1d ago" },
                  ].map((msg, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <p className="font-medium text-sm">{msg.name}</p>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
