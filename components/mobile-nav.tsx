"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 border-t">
            <Button className="w-full" asChild>
              <Link href="#" onClick={() => setOpen(false)}>
                Download Resume
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
