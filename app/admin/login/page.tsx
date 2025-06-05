"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Coffee, Eye, EyeOff, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple authentication check (in real app, this would be server-side)
    if (email === "admin@highlandharvest.co.ke" && password === "admin123") {
      // Store auth state in localStorage (in real app, use proper auth tokens)
      localStorage.setItem("adminAuth", "true")
      router.push("/admin")
    } else {
      setError("Invalid email or password. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-10 w-10 text-amber-600" />
            <span className="text-3xl font-bold text-gray-900">Highland Harvest</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600">Access your coffee farm dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@highlandharvest.co.ke"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button type="submit" className="w-full h-11 bg-amber-600 hover:bg-amber-700" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-2">Demo Credentials</h3>
              <div className="text-sm text-amber-700 space-y-1">
                <p>
                  <strong>Email:</strong> admin@highlandharvest.co.ke
                </p>
                <p>
                  <strong>Password:</strong> admin123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <p>&copy; 2024 Highland Harvest Coffee. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
