"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  LogOut,
  User,
  Package,
  Bell,
  Search,
  Menu,
  X,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type SidebarItem = {
  icon: React.ElementType
  label: string
  path: string
  badge?: string | number
}

const sidebarItems: SidebarItem[] = [
  {
    icon: LayoutDashboard,
    label: "Boshqaruv paneli",
    path: "/dashboard",
  },
  {
    icon: ShoppingBag,
    label: "Mahsulotlar",
    path: "/dashboard/products",
    badge: 142,
  },
  {
    icon: Package,
    label: "Buyurtmalar",
    path: "/dashboard/orders",
    badge: "Yangi",
  },
  {
    icon: Users,
    label: "Mijozlar",
    path: "/dashboard/customers",
  },
  {
    icon: BarChart3,
    label: "Tahlillar",
    path: "/dashboard/analytics",
  },
]

const bottomSidebarItems: SidebarItem[] = [
  {
    icon: User,
    label: "Profil",
    path: "/dashboard/profile",
  },
  {
    icon: Settings,
    label: "Sozlamalar",
    path: "/dashboard/settings",
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  if (!mounted) {
    return null
  }

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="flex h-screen bg-[#e9e9ec] dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-background border-r border-border">
        <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">K</span>
          </div>
          <h1 className="text-xl font-bold">Clothes</h1>
        </div>

        <div className="flex-1 overflow-auto py-2 px-3">
          {sidebarItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn("sidebar-item w-full justify-start mb-1 h-10", pathname === item.path && "active")}
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
              {item.badge && (
                <Badge
                  className={cn("ml-auto", pathname === item.path ? "bg-primary-foreground text-primary" : "bg-accent")}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        <div className="p-3 border-t border-border">
          {bottomSidebarItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn("sidebar-item w-full justify-start mb-1 h-10", pathname === item.path && "active")}
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Button>
          ))}

          <Button variant="ghost" className="sidebar-item w-full justify-start h-10" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-3" />
            <span>Chiqish</span>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background transform transition-transform duration-200 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">K</span>
            </div>
            <h1 className="text-xl font-bold">Clothes</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-auto py-2 px-3">
          {sidebarItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn("sidebar-item w-full justify-start mb-1 h-10", pathname === item.path && "active")}
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
              {item.badge && (
                <Badge
                  className={cn("ml-auto", pathname === item.path ? "bg-primary-foreground text-primary" : "bg-accent")}
                >
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </div>

        <div className="p-3 border-t border-border">
          {bottomSidebarItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className={cn("sidebar-item w-full justify-start mb-1 h-10", pathname === item.path && "active")}
              onClick={() => router.push(item.path)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Button>
          ))}

          <Button variant="ghost" className="sidebar-item w-full justify-start h-10" onClick={handleLogout}>
            <LogOut className="h-5 w-5 mr-3" />
            <span>Chiqish</span>
          </Button>
        </div>
      </aside>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b border-border">
          <div className="flex h-16 items-center px-4 md:px-6">
            <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>

            <div className="flex-1">
              <h2 className="text-xl font-semibold">Xush kelibsiz, Admin</h2>
              <p className="text-sm text-muted-foreground">Do'koningizda nima bo'layotganini ko'ring.</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Qidirish..." className="pl-8 w-[200px] bg-secondary" />
              </div>

              <ModeToggle />

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center text-[10px] font-medium text-primary-foreground">
                  3
                </span>
              </Button>

              <Avatar className="h-8 w-8 border border-border">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Admin" />
                <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-[#e9e9ec] dark:bg-gray-900">
          <Suspense fallback={<div className="p-6">Yuklanmoqda...</div>}>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
