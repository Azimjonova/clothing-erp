"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { supabase } from "@/lib/supabase"


export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Oddiy tekshirish
    if (!username || !password) {
      setError("Iltimos, barcha maydonlarni to'ldiring")
      setLoading(false)
      return
    }

    try {
      // Demo uchun hardcoded credentials
      if ((username === "elnora" && password === "elnora") || 
          (username === "mhk01" && password === "m1234")) {
        setSuccess("Muvaffaqiyatli kirdingiz! Boshqaruv paneliga yo'naltirilmoqdasiz...")
        setTimeout(() => {
          router.push("/dashboard")
        }, 1500)
        return
      }

      // First, find the user in the profiles table to get their email
      const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username)
        .single()

      if (profileError) {
        // If no profile found, check if they're trying to use email directly
        const email = username.includes('@') ? username : `${username}@example.com`

        // Try to sign in with the provided credentials
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          throw new Error("Login yoki parol noto'g'ri")
        }

        if (data && data.user) {
          setSuccess("Muvaffaqiyatli kirdingiz! Boshqaruv paneliga yo'naltirilmoqdasiz...")
          setTimeout(() => {
            router.push("/dashboard")
          }, 1500)
        }
      } else if (profiles) {
        // If profile found, use the associated email for authentication
        const email = `${username}@example.com`

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          throw new Error("Login yoki parol noto'g'ri")
        }

        if (data && data.user) {
          setSuccess("Muvaffaqiyatli kirdingiz! Boshqaruv paneliga yo'naltirilmoqdasiz...")
          setTimeout(() => {
            router.push("/dashboard")
          }, 1500)
        }
      }
    } catch (err: any) {
      console.error("Login error:", err);

      // Check for network-related errors
      if (err.message === "Failed to fetch" || err.message.includes("fetch") || err.message.includes("network")) {
        setError("Internetga ulanishda xatolik yuz berdi. Iltimos, internet aloqangizni tekshiring va qayta urinib ko'ring.")
      } else {
        setError(err.message || "Tizimga kirishda xatolik yuz berdi")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-pink-100 to-pink-50">
      <Card className="w-[350px] shadow-lg bg-black text-white border-pink-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold" style={{fontFamily: 'Georgia, serif'}}>Makhi's Clothing</CardTitle>
          <CardDescription className="text-center text-pink-200">
            Tizimga kirish uchun ma&apos;lumotlaringizni kiriting.
            Ro&apos;yxatdan o&apos;tgan foydalanuvchi nomingizni kiriting.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert variant="default" className="bg-green-100 text-green-800 border-green-200">
              <AlertCircle className="h-4 w-4 text-green-500" />
              <AlertDescription>{success}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-pink-200">Login</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="bg-white border-pink-200 focus:border-pink-400 text-pink-500"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-pink-200">Parol</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border-pink-200 focus:border-pink-400 text-pink-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white" disabled={loading}>
                {loading ? "Tekshirilmoqda..." : "Kirish"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-pink-200 mt-2">
            Hisobingiz yo&apos;qmi?{" "}
            <Link href="/signup" className="text-pink-400 underline-offset-4 hover:underline hover:text-pink-300">
              Ro&apos;yxatdan o&apos;tish
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
