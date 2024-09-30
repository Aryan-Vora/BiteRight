import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, ChefHat, ListChecks, MapPin, ShoppingCart } from 'lucide-react'

export default function Landing() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    console.log('Submitted email:', email)
    setEmail('')
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <ChefHat className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold">ReciPy</span>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-16" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Plan Your Meals, Simplify Your Shopping
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ReciPy helps you plan delicious meals and creates smart shopping lists with ingredient locations and add-on suggestions.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-r-none"
              required
            />
            <Button type="submit" className="rounded-l-none">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </motion.section>

        <motion.section id="features" className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ListChecks className="w-6 h-6 mr-2 text-primary" />
                  Smart Meal Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                Input your desired meal and get a complete list of ingredients with their locations in the store.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  Store Navigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                Optimize your shopping route with precise ingredient locations, saving you time and effort.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-2 text-primary" />
                  Personalized Add-ons
                </CardTitle>
              </CardHeader>
              <CardContent>
                Get suggestions for complementary ingredients and items based on your meal plan and preferences.
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section id="how-it-works" className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Input Your Meal</h3>
                    <p>Tell ReciPy what you want to cook, and it will generate a complete ingredient list.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Review and Customize</h3>
                    <p>Add or remove ingredients, set dietary preferences, and view suggested add-ons.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Get Your Shopping Plan</h3>
                    <p>Receive a detailed shopping list with store locations for each item.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Shop Efficiently</h3>
                    <p>Follow your optimized shopping route and enjoy a stress-free grocery trip.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="relative h-[400px]">
              <img
                src="/placeholder.svg"
                alt="ReciPy app interface"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.section>

        <motion.section id="pricing" className="mb-16" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8 text-center">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">Free</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> 5 meal plans per month</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Basic ingredient locations</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Limited add-on suggestions</li>
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$9.99/mo</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Unlimited meal plans</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Detailed store navigation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Advanced add-on suggestions</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Dietary preference filters</li>
                </ul>
                <Button className="w-full mt-6">Upgrade to Pro</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Family</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4">$19.99/mo</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> All Pro features</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Up to 5 family members</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Shared meal planning</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2 text-primary" /> Family preference management</li>
                </ul>
                <Button className="w-full mt-6">Choose Family Plan</Button>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section className="text-center" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Meal Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ReciPy today and transform your grocery shopping experience. Say goodbye to forgotten ingredients and hello to effortless meal preparation.
          </p>
          <Button size="lg">
            Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.section>
      </main>

      <footer className="bg-secondary-foreground text-secondary mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">ReciPy</h3>
              <p>Simplifying meal planning and grocery shopping for busy people.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
                <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
            <p>&copy; {new Date().getFullYear()} ReciPy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
