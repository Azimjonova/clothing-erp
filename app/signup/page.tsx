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

export default function SignupPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")

    // Oddiy tekshirish
    if (!fullName || !username || !password || !confirmPassword) {
      setError("Iltimos, barcha maydonlarni to'ldiring")
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError("Parollar mos kelmadi")
      setLoading(false)
      return
    }

    try {
      // Use Supabase for user registration
      // We'll use the username as the email since Supabase requires an email
      const email = `${username}@example.com`

      // First, check if user already exists
      const { data: existingUsers, error: checkError } = await supabase
        .from('profiles')
        .select('*')
        .eq('username', username)

      if (checkError) {
        throw new Error(checkError.message)
      }

      if (existingUsers && existingUsers.length > 0) {
        setError("Bu foydalanuvchi nomi allaqachon mavjud")
        setLoading(false)
        return
      }

      // Sign up the user with Supabase auth
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        throw new Error(error.message)
      }

      if (data && data.user) {
        // Store additional user data in the profiles table
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            { 
              id: data.user.id, 
              username, 
              full_name: fullName,
              created_at: new Date().toISOString()
            }
          ])

        if (profileError) {
          throw new Error(profileError.message)
        }

        // Set success message and redirect to login page after a delay
        setSuccess("Ro'yxatdan muvaffaqiyatli o'tdingiz! Tizimga kirishingiz mumkin.")

        // Redirect after 3 seconds
        setTimeout(() => {
          router.push("/login")
        }, 3000)
      }
    } catch (err: any) {
      console.error("Signup error:", err);

      // Check for network-related errors
      if (err.message === "Failed to fetch" || err.message.includes("fetch") || err.message.includes("network")) {
        setError("Internetga ulanishda xatolik yuz berdi. Iltimos, internet aloqangizni tekshiring va qayta urinib ko'ring.")
      } else {
        setError(err.message || "Ro'yxatdan o'tishda xatolik yuz berdi")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-pink-100 to-pink-50">
      <Card className="w-[400px] shadow-lg bg-black text-white border-pink-300">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center font-bold" style={{fontFamily: 'Georgia, serif'}}>Ro&apos;yxatdan o&apos;tish</CardTitle>
          <CardDescription className="text-center text-pink-200">
            Yangi hisob yaratish uchun ma&apos;lumotlaringizni kiriting
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
          <form onSubmit={handleSignup}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName" className="text-pink-200">To&apos;liq ism</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ism Familiya"
                  className="bg-white border-pink-200 focus:border-pink-400 text-pink-500"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username" className="text-pink-200">Login</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
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
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword" className="text-pink-200">Parolni tasdiqlang</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border-pink-200 focus:border-pink-400 text-pink-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white" disabled={loading}>
                {loading ? "Ro'yxatdan o'tkazilmoqda..." : "Ro'yxatdan o'tish"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="text-sm text-center text-pink-200 mt-2">
            Hisobingiz bormi?{" "}
            <Link href="/login" className="text-pink-400 underline-offset-4 hover:underline hover:text-pink-300">
              Tizimga kirish
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
