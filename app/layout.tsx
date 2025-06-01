import type React from "react"
import type { Metadata } from "next/types"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Makhi's Clothing",
  description: "Makhi's Clothing Management System",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
