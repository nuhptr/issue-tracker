"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AiFillBug } from "react-icons/ai"
import classNames from "classnames"

const Navbar = () => {
   const currentPath = usePathname()

   const links = [
      { label: "Dashboard", href: "/" },
      { label: "Issues", href: "/issues" },
   ]

   return (
      <nav className="flex items-center px-5 mb-5 space-x-6 border-b h-14">
         <Link href="/">
            <AiFillBug size={20} className="text-zinc-800" />
         </Link>
         <ul className="flex space-x-6">
            {links.map((link) => (
               <Link
                  className={classNames({
                     "text-zinc-900": currentPath === link.href,
                     "text-gray-500": currentPath !== link.href,
                     "hover:text-zinc-800 transition-colors": true,
                  })}
                  href={link.href}
                  key={link.href}>
                  {link.label}
               </Link>
            ))}
         </ul>
      </nav>
   )
}

export default Navbar
