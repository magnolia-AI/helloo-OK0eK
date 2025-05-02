'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Cheers!",
      description: "Your beer tasting has been booked!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Brewery Introduction */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="h-[80vh] bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-[800px] mx-auto text-center px-4">
            <Badge className="mb-4 text-lg py-1 px-3 bg-amber-600 hover:bg-amber-700 text-white border-none">EST. 2024</Badge>
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl text-white mb-6">
              Hop Haven Brewery
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-[600px] mx-auto">
              Crafting extraordinary beers with passion, precision, and the finest ingredients since 2024.
            </p>
            <div className="mt-12 flex gap-4 justify-center">
              <Button size="lg" className="px-8 bg-amber-600 hover:bg-amber-700 text-white">Our Beers</Button>
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white/10" onClick={showToast}>
                Book a Tasting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Beers Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Signature Brews</h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Discover our award-winning craft beers, each with a unique story and flavor profile.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}></div>
            <CardContent className="pt-6 pb-8">
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">IPA</Badge>
              <h3 className="text-2xl font-semibold mb-3">Hoppy Horizon IPA</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A bold, hop-forward IPA with notes of citrus, pine, and tropical fruit. 6.8% ABV.
              </p>
              <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567696911980-2eed69a46042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}></div>
            <CardContent className="pt-6 pb-8">
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">STOUT</Badge>
              <h3 className="text-2xl font-semibold mb-3">Midnight Velvet Stout</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A rich, creamy stout with deep chocolate and coffee notes, finished with a hint of vanilla. 7.2% ABV.
              </p>
              <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">Learn More</Button>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}></div>
            <CardContent className="pt-6 pb-8">
              <Badge className="mb-2 bg-amber-100 text-amber-800 hover:bg-amber-200 border-none">PILSNER</Badge>
              <h3 className="text-2xl font-semibold mb-3">Golden Sunrise Pilsner</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A crisp, refreshing pilsner with delicate malt sweetness and a clean, floral hop finish. 5.2% ABV.
              </p>
              <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brewery Experience Section */}
      <section className="bg-amber-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-[1200px] mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Visit Our Brewery</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the art of brewing firsthand with our guided tours. See our state-of-the-art facilities, learn about our brewing process, and enjoy exclusive tastings of our latest creations.  
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-lg">Guided brewery tours every weekend</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-lg">Beer tasting flights with expert guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-600 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-lg">Farm-to-table gastropub on premises</span>
                </li>
              </ul>
              <Button className="px-8 bg-amber-600 hover:bg-amber-700 text-white">Book Your Tour</Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Brewery Tour" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Beer Lovers Say</h2>
          <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
            Don't just take our word for it - here's what our customers have to say about our craft beers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D97706" className="mr-1">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-center italic text-muted-foreground mb-6">
                "The Hoppy Horizon IPA changed my perception of what an IPA can be. Perfectly balanced with amazing depth of flavor."
              </p>
              <div className="text-center">
                <p className="font-semibold">Michael Johnson</p>
                <p className="text-sm text-muted-foreground">Beer Enthusiast</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D97706" className="mr-1">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-center italic text-muted-foreground mb-6">
                "The brewery tour was incredible! Learning about the brewing process while sampling their amazing beers was a perfect weekend activity."
              </p>
              <div className="text-center">
                <p className="font-semibold">Sarah Williams</p>
                <p className="text-sm text-muted-foreground">Local Foodie</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#D97706" className="mr-1">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-center italic text-muted-foreground mb-6">
                "Midnight Velvet Stout is hands down the best stout I've ever tasted. Rich, complex, and incredibly smooth."
              </p>
              <div className="text-center">
                <p className="font-semibold">David Chen</p>
                <p className="text-sm text-muted-foreground">Craft Beer Connoisseur</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Events & Newsletter Section */}
      <section className="bg-amber-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Join Our Brew Crew
            </h2>
            <p className="text-xl mb-8 text-amber-100">
              Subscribe to our newsletter for exclusive invites to beer releases, special events, and insider brewing tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Button className="px-8 bg-amber-600 hover:bg-amber-500 text-white border-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
