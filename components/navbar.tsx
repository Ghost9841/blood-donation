import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import logo from "../lib/logo.jpg";
import Image from "next/image";
export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6">
         
          <Image src={logo} alt="logo.jpg" className="w-8 h-8 rounded-full bg-red-700"></Image>
        </Link>
        <div className="flex gap-6 md:gap-10">
          <Link className="hover:text-red-700 transition-colors" href="/">
            Home
          </Link>
          <Link className="hover:text-red-700 transition-colors" href="/about">
            About Us
          </Link>
          <Link className="hover:text-red-700 transition-colors" href="/find-blood">
            Find Blood
          </Link>
          <Link className="hover:text-red-700 transition-colors" href="/contact">
            Contact
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Register Now</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/register">Register as Donor</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

