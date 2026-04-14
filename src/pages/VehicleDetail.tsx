import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Share2, Shield, Truck, Waves, Check, Calculator } from 'lucide-react'
import { vehicles } from '../data/vehicles'

export default function VehicleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const vehicle = vehicles.find(v => v.id === id)
  const [selectedColor, setSelectedColor] = useState(vehicle?.colors[0] || '')
  const [showCalculator, setShowCalculator] = useState(false)
  const [downPayment, setDownPayment] = useState(10000)
  const [loanTerm, setLoanTerm] = useState(60)
  const [interestRate, setInterestRate] = useState(4.9)

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-50 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-midnight mb-4">Vehicle not found</h2>
          <Link to="/inventory" className="text-sky-500 font-semibold hover:text-sky-600">
            Back to Inventory
          </Link>
        </div>
      </div>
    )
  }

  const priceNum = parseInt(vehicle.price.replace(/[$,K]/g, '')) * 1000
  const monthlyPayment = ((priceNum - downPayment) * (interestRate / 100 / 12) * Math.pow(1 + interestRate / 100 / 12, loanTerm)) /
    (Math.pow(1 + interestRate / 100 / 12, loanTerm) - 1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-sky-50 pt-20"
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-steel hover:text-sky-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Inventory</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-sky-500/20">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-sky-500 text-white text-sm font-semibold rounded-full">
                {vehicle.category}
              </div>
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-steel" />
                </button>
                <button className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5 text-steel" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              {vehicle.name}
            </h1>
            <p className="text-3xl font-bold text-sky-500 mb-6">{vehicle.price}</p>
            
            <p className="text-steel text-lg mb-8 leading-relaxed">
              {vehicle.description}
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Fuel Type</p>
                <p className="font-semibold text-midnight">{vehicle.fuel}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Engine</p>
                <p className="font-semibold text-midnight">{vehicle.engine}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Transmission</p>
                <p className="font-semibold text-midnight">{vehicle.transmission}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Drivetrain</p>
                <p className="font-semibold text-midnight">{vehicle.drivetrain}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Passengers</p>
                <p className="font-semibold text-midnight">{vehicle.passengers}</p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <p className="text-sm text-steel mb-1">Efficiency</p>
                <p className="font-semibold text-midnight">{vehicle.mpg}</p>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <p className="text-sm text-steel mb-3">Available Colors</p>
              <div className="flex flex-wrap gap-3">
                {vehicle.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'bg-sky-500 text-white'
                        : 'bg-white text-midnight hover:bg-sky-50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 py-4 bg-sky-500 text-white text-center font-semibold rounded-full hover:bg-sky-600 transition-all"
              >
                Schedule Test Drive
              </Link>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="flex-1 py-4 bg-midnight text-white text-center font-semibold rounded-full hover:bg-sky-500 transition-all flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Payment</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financing Calculator */}
      {showCalculator && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8">
            <h3 className="text-2xl font-bold text-midnight mb-6">Estimate Your Payment</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <label className="block text-sm font-medium text-steel mb-2">Down Payment</label>
                <input
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-steel mb-2">Loan Term (months)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none"
                >
                  <option value={36}>36 months</option>
                  <option value={48}>48 months</option>
                  <option value={60}>60 months</option>
                  <option value={72}>72 months</option>
                  <option value={84}>84 months</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-steel mb-2">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none"
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-sky-50 rounded-xl text-center">
              <p className="text-steel mb-2">Estimated Monthly Payment</p>
              <p className="text-4xl font-bold text-sky-500">
                ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                <span className="text-lg text-steel font-normal">/mo</span>
              </p>
            </div>

            <p className="text-sm text-steel mt-4 text-center">
              *This is an estimate only. Actual rates and terms may vary based on creditworthiness.
            </p>
          </div>
        </motion.section>
      )}

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8">
          <h3 className="text-2xl font-bold text-midnight mb-6">Features & Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicle.features.map((feature) => (
              <div key={feature} className="flex items-center space-x-3">
                <div className="p-2 bg-sky-500/10 rounded-lg">
                  <Check className="w-4 h-4 text-sky-500" />
                </div>
                <span className="text-midnight">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Shield className="w-10 h-10 text-sky-500 mx-auto mb-4" />
            <h4 className="font-bold text-midnight mb-2">5-Star Safety</h4>
            <p className="text-steel text-sm">Top safety ratings across all vehicle categories.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Truck className="w-10 h-10 text-sky-500 mx-auto mb-4" />
            <h4 className="font-bold text-midnight mb-2">All-Terrain Ready</h4>
            <p className="text-steel text-sm">Built to handle any road condition with ease.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <Waves className="w-10 h-10 text-sky-500 mx-auto mb-4" />
            <h4 className="font-bold text-midnight mb-2">Premium Comfort</h4>
            <p className="text-steel text-sm">First-class interior experience for every journey.</p>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
