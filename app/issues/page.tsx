import { Button } from "@radix-ui/themes"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
   title: "Issue Tracker | Issue",
   description: "Build a simple issue tracker with Next.js and Prisma",
}

export default function IssuesPage() {
   return (
      <div>
         <Button>
            <Link href="/issues/new">New Issue</Link>
         </Button>
      </div>
   )
}
