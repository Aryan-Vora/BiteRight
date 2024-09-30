import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { MapPin, Plus, ShoppingCart, Sliders } from 'lucide-react'

export default function ShoppingPlan() {
  const [sortBy, setSortBy] = useState('location')
  const [showOrganic, setShowOrganic] = useState(false)
  const [showVegan, setShowVegan] = useState(false)
  const [customItem, setCustomItem] = useState('')
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Chicken breast', location: 'Meat section', organic: false, vegan: false },
    { id: 2, name: 'Broccoli', location: 'Produce section', organic: true, vegan: true },
    { id: 3, name: 'Rice', location: 'Grains aisle', organic: false, vegan: true },
    { id: 4, name: 'Soy sauce', location: 'International aisle', organic: false, vegan: true },
  ])

  const addons = [
    { id: 5, name: 'Garlic', location: 'Produce section' },
    { id: 6, name: 'Ginger', location: 'Produce section' },
    { id: 7, name: 'Sesame oil', location: 'International aisle' },
  ]

  const filteredIngredients = useMemo(() => {
    return ingredients.filter(ingredient => 
      (!showOrganic || ingredient.organic) && (!showVegan || ingredient.vegan)
    )
  }, [ingredients, showOrganic, showVegan])

  const sortedIngredients = useMemo(() => {
    return [...filteredIngredients].sort((a, b) => 
      sortBy === 'location' ? a.location.localeCompare(b.location) : a.name.localeCompare(b.name)
    )
  }, [filteredIngredients, sortBy])

  const addCustomItem = () => {
    if (customItem.trim()) {
      setIngredients([...ingredients, { id: Date.now(), name: customItem, location: 'Custom', organic: false, vegan: false }])
      setCustomItem('')
    }
  }

  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter(item => item.id !== id))
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 max-w-4xl"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Shopping Plan for Chicken Stir Fry
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="md:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Ingredients</span>
                <Button variant="outline" size="sm">
                  <Sliders className="w-4 h-4 mr-2" />
                  Sort & Filter
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Label htmlFor="sort-by">Sort by:</Label>
                  <RadioGroup id="sort-by" defaultValue={sortBy} onValueChange={setSortBy} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="location" id="location" />
                      <Label htmlFor="location">Location</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="name" id="name" />
                      <Label htmlFor="name">Name</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="organic" checked={showOrganic} onCheckedChange={setShowOrganic} />
                    <Label htmlFor="organic">Organic only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="vegan" checked={showVegan} onCheckedChange={setShowVegan} />
                    <Label htmlFor="vegan">Vegan only</Label>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <ScrollArea className="h-[300px] pr-4">
                <AnimatePresence>
                  {sortedIngredients.map((ingredient) => (
                    <motion.div
                      key={ingredient.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="flex items-center space-x-4 mb-4"
                    >
                      <Checkbox id={`ingredient-${ingredient.id}`} />
                      <Label htmlFor={`ingredient-${ingredient.id}`} className="flex-grow">{ingredient.name}</Label>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {ingredient.location}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeIngredient(ingredient.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Suggested Add-ons</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <AnimatePresence>
                  {addons.map((addon) => (
                    <motion.div
                      key={addon.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      className="flex items-center space-x-4 mb-4"
                    >
                      <Checkbox id={`addon-${addon.id}`} />
                      <Label htmlFor={`addon-${addon.id}`} className="flex-grow">{addon.name}</Label>
                      <div className="text-sm text-muted-foreground">{addon.location}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Custom Item</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Add custom item" 
                  value={customItem}
                  onChange={(e) => setCustomItem(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCustomItem()}
                />
                <Button size="icon" onClick={addCustomItem}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 flex justify-between"
      >
        <Button variant="outline">Save List</Button>
        <Button>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Start Shopping
        </Button>
      </motion.div>
    </motion.div>
  )
}
