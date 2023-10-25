import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
   title: "Issue Tracker | Home",
   description: "Build a simple issue tracker with Next.js and Prisma",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className} suppressHydrationWarning>
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   )
}
