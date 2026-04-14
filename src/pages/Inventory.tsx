import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, X } from 'lucide-react'
import VehicleCard from '../components/VehicleCard'
import { vehicles } from '../data/vehicles'

const categories = ['All', 'SUV', 'Luxury SUV', 'Full-Size SUV', 'Crossover', 'Performance SUV']
const drivetrains = ['All', 'AWD', '4WD', 'FWD']
const priceRanges = ['All', 'Under $60K', '$60K-$80K', 'Over $80K']

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDrivetrain, setSelectedDrivetrain] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || vehicle.category === selectedCategory
    const matchesDrivetrain = selectedDrivetrain === 'All' || vehicle.drivetrain === selectedDrivetrain
    
    let matchesPrice = true
    if (selectedPrice === 'Under $60K') {
      const price = parseInt(vehicle.price.replace(/[$,K]/g, ''))
      matchesPrice = price < 60
    } else if (selectedPrice === '$60K-$80K') {
      const price = parseInt(vehicle.price.replace(/[$,K]/g, ''))
      matchesPrice = price >= 60 && price <= 80
    } else if (selectedPrice === 'Over $80K') {
      const price = parseInt(vehicle.price.replace(/[$,K]/g, ''))
      matchesPrice = price > 80
    }

    return matchesSearch && matchesCategory && matchesDrivetrain && matchesPrice
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-sky-50 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
            Our Inventory
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            Discover our premium selection of terrain-ready vehicles.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg shadow-sky-500/10 p-4 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel" />
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-sky-50 text-sky-500 font-semibold rounded-xl hover:bg-sky-100 transition-colors md:hidden"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none text-midnight"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <select
                value={selectedDrivetrain}
                onChange={(e) => setSelectedDrivetrain(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none text-midnight"
              >
                {drivetrains.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>

              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none text-midnight"
              >
                {priceRanges.map(p => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === cat
                          ? 'bg-sky-500 text-white'
                          : 'bg-sky-50 text-sky-500 hover:bg-sky-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Drivetrain</label>
                <div className="flex flex-wrap gap-2">
                  {drivetrains.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDrivetrain(d)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedDrivetrain === d
                          ? 'bg-sky-500 text-white'
                          : 'bg-sky-50 text-sky-500 hover:bg-sky-100'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Price Range</label>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(p => (
                    <button
                      key={p}
                      onClick={() => setSelectedPrice(p)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedPrice === p
                          ? 'bg-sky-500 text-white'
                          : 'bg-sky-50 text-sky-500 hover:bg-sky-100'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <p className="text-steel mb-6">
          Showing {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
        </p>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-steel mb-4">No vehicles match your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedDrivetrain('All')
                setSelectedPrice('All')
              }}
              className="text-sky-500 font-semibold hover:text-sky-600"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
