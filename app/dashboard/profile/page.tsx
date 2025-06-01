"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, CheckCircle2, Key, Mail, Phone, User } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    fullName: "Elnora Aminova",
    email: "aminovaelnora02@gmailsdf.com",
    phone: "+998 90 123 45 67",
    position: "Bosh administrator",
    bio: "Kiyim-kechak do'koni ERP tizimining bosh administratori. Tizimni boshqarish va nazorat qilish vazifalarini bajaradi.",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...profileData })
  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    setProfileData({ ...formData })
    setIsEditing(false)
    setSuccessMessage("Profil ma'lumotlari muvaffaqiyatli yangilandi")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profil</h1>
          <p className="text-muted-foreground">Profil ma&apos;lumotlarini ko&apos;rish va tahrirlash</p>
        </div>
      </div>

      {successMessage && (
        <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          <AlertDescription className="text-green-600 dark:text-green-400">{successMessage}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card className="shadow-md">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
                <AvatarFallback className="text-4xl bg-primary text-primary-foreground">A</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                <Camera className="h-4 w-4" />
                <span className="sr-only">Rasmni o'zgartirish</span>
              </Button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{profileData.fullName}</h2>
              <p className="text-sm text-muted-foreground">{profileData.email}</p>
              <Badge className="mt-2 bg-primary/20 text-primary hover:bg-primary/20">{profileData.position}</Badge>
            </div>
            <Separator />
            <div className="w-full space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{profileData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{profileData.phone}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile">Profil ma&apos;lumotlari</TabsTrigger>
              <TabsTrigger value="security">Xavfsizlik</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4 pt-4">
              <Card className="shadow-md">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Profil ma&apos;lumotlari
                  </CardTitle>
                  <CardDescription>
                    Profil ma&apos;lumotlaringizni ko&apos;rish va tahrirlash imkoniyati
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="fullName">To&apos;liq ism</Label>
                        <Input id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" value={formData.email} onChange={handleInputChange} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="position">Lavozim</Label>
                        <Input id="position" name="position" value={formData.position} onChange={handleInputChange} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <textarea
                          id="bio"
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          className="min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid gap-1">
                        <Label className="text-muted-foreground">To&apos;liq ism</Label>
                        <div className="font-medium">{profileData.fullName}</div>
                      </div>
                      <div className="grid gap-1">
                        <Label className="text-muted-foreground">Email</Label>
                        <div className="font-medium">{profileData.email}</div>
                      </div>
                      <div className="grid gap-1">
                        <Label className="text-muted-foreground">Telefon</Label>
                        <div className="font-medium">{profileData.phone}</div>
                      </div>
                      <div className="grid gap-1">
                        <Label className="text-muted-foreground">Lavozim</Label>
                        <div className="font-medium">{profileData.position}</div>
                      </div>
                      <div className="grid gap-1">
                        <Label className="text-muted-foreground">Bio</Label>
                        <div className="font-medium">{profileData.bio}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="border-t bg-muted/30 px-6">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Bekor qilish
                      </Button>
                      <Button onClick={handleSave}>Saqlash</Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)}>Tahrirlash</Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4 pt-4">
              <Card className="shadow-md">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    Parolni o&apos;zgartirish
                  </CardTitle>
                  <CardDescription>
                    Hisobingiz xavfsizligini ta&apos;minlash uchun parolni o&apos;zgartiring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="currentPassword">Joriy parol</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="newPassword">Yangi parol</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="confirmPassword">Yangi parolni tasdiqlang</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/30 px-6">
                  <Button>Parolni o&apos;zgartirish</Button>
                </CardFooter>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="border-b bg-muted/30">
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-primary" />
                    Ikki bosqichli autentifikatsiya
                  </CardTitle>
                  <CardDescription>
                    Hisobingizni qo&apos;shimcha himoya qilish uchun ikki bosqichli autentifikatsiyani yoqing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Key className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Ikki bosqichli autentifikatsiya</p>
                        <p className="text-sm text-muted-foreground">
                          Hisobingizga kirish uchun qo&apos;shimcha xavfsizlik qatlami
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">Yoqish</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
