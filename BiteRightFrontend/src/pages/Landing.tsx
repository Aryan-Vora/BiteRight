import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChefHat, ListChecks, MapPin, ShoppingCart } from 'lucide-react'

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
          <span className="text-2xl font-bold">BiteRight</span>
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="/plan" className="hover:text-primary transition-colors">Example</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section className="text-center mb-16" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Plan Your Meals, Simplify Your Shopping
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            BiteRight helps you plan delicious meals and creates smart shopping lists with ingredient locations and add-on suggestions.
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
              <ol className="space-y-8">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Input Your Meal</h3>
                    <p>Tell BiteRight what you want to cook, and it will generate a complete ingredient list.</p>
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
            <div className="relative h-[450px]">
              <img
                src="./plan.png"
                alt="BiteRight app interface"
                className="rounded-lg shadow-lg object-fill w-full h-full"
              />
            </div>
          </div>
        </motion.section>


        <motion.section className="text-center" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Your Meal Planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join BiteRight today and transform your grocery shopping experience. Say goodbye to forgotten ingredients and hello to effortless meal preparation.
          </p>
          <Button size="lg">
            <a href="/plan" className="h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">View Example <ArrowRight className="ml-2 w-5 h-5" /></a>
          </Button>
        </motion.section>
      </main>

      <footer className="bg-secondary-foreground text-secondary mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">BiteRight</h3>
              <p>Simplifying meal planning and grocery shopping for busy people.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/tos" className="hover:underline">Terms of Service</a></li>
                <li><a href="/private-policy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Social Media 1</a></li>
                <li><a href="#" className="hover:underline">Social Media 2</a></li>
                <li><a href="#" className="hover:underline">Social Media 3</a></li>
              </ul>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  )
}
