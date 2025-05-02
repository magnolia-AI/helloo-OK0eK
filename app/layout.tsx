import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { MobileNav } from '@/components/mobile-nav'


export const metadata: Metadata = {
  title: 'Hop Haven Brewery | Craft Beer Excellence',
  description: 'Hop Haven Brewery crafts extraordinary beers with passion, precision, and the finest ingredients. Visit our brewery or shop our award-winning craft beers online.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={}>
        <ThemeProvider defaultTheme="light" attribute="class">
          {/* Header with Navigation */}
          <header className="bg-amber-900 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MobileNav />
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                    <path d="M9 12v6"></path>
                    <path d="M13 12v6"></path>
                    <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path>
                    <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
                  </svg>
                  <span className="font-bold text-xl">Hop Haven</span>
                </div>
              </div>
              <nav className="hidden md:flex gap-8">
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Home</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Our Beers</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Brewery Tours</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">Events</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors font-medium">About Us</a>
              </nav>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white border-none">Shop Now</Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-amber-950 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                      <path d="M9 12v6"></path>
                      <path d="M13 12v6"></path>
                      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 3 11 3s2 .5 3 .5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"></path>
                      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
                    </svg>
                    <h3 className="font-bold text-lg">Hop Haven Brewery</h3>
                  </div>
                  <p className="text-sm text-amber-200">
                    Crafting extraordinary beers with passion, precision, and the finest ingredients since 2024.
                  </p>
                  <div className="flex gap-4 mt-6">
                    <a href="#" aria-label="Facebook" className="text-amber-200 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="text-amber-200 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" aria-label="Twitter" className="text-amber-200 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Our Beers</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Brewery Tours</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Events Calendar</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Gift Cards</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Merchandise</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">About Us</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Our Story</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Brewing Process</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Sustainability</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-lg">Visit Us</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="text-amber-200">123 Brewery Lane</li>
                    <li className="text-amber-200">Craftville, CA 90210</li>
                    <li className="text-amber-200">Phone: (555) 123-4567</li>
                    <li className="text-amber-200">Email: info@hophaven.com</li>
                    <li className="text-amber-200">Hours: Wed-Sun, 12pm-10pm</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-amber-800 text-center">
                <p className="text-sm text-amber-200">
                  © 2024 Hop Haven Brewery. All rights reserved. Please drink responsibly.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
