'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-amber-800">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px] border-r-amber-200">
        <div className="flex items-center mb-8 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-amber-600">
            <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
            <path d="M9 12v6"></path>
            <path d="M13 12v6"></path>
            <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path>
            <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
          </svg>
          <span className="font-bold text-lg">Hop Haven</span>
        </div>
        <nav className="flex flex-col gap-4">
          <a
            href="#"
            className="px-2 py-2 text-foreground hover:text-amber-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="px-2 py-2 text-foreground hover:text-amber-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Our Beers
          </a>
          <a
            href="#"
            className="px-2 py-2 text-foreground hover:text-amber-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Brewery Tours
          </a>
          <a
            href="#"
            className="px-2 py-2 text-foreground hover:text-amber-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Events
          </a>
          <a
            href="#"
            className="px-2 py-2 text-foreground hover:text-amber-600 transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            About Us
          </a>
          <div className="mt-4 pt-4 border-t">
            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
              Shop Now
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
