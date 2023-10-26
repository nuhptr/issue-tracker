import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Theme } from "@radix-ui/themes"

import "./globals.css"
// add this if you use radix-ui
import "@radix-ui/themes/styles.css"
import "./theme.config.css"

import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
   title: "Issue Tracker",
   description: "Build a simple issue tracker with Next.js and Prisma",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.variable} suppressHydrationWarning>
            <Theme appearance="light" accentColor="blue" radius="large">
               <Navbar />
               <main className="p-5">{children}</main>
               {/* <ThemePanel /> */}
            </Theme>
         </body>
      </html>
   )
}
