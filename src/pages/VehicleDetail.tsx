import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Heart, Share2, Shield, Truck, Waves, Check, Calculator } from 'lucide-react'
import { vehicles } from '../data/vehicles'

const smokeFloat = {
  initial: { y: 60, opacity: 0, filter: 'blur(10px)' },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    y: -60, 
    opacity: 0, 
    filter: 'blur(10px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

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
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Vehicle not found</p>
      </div>
    )
  }

  const price = parseInt(vehicle.price.replace(/[$,K]/g, '')) * 1000
  const monthlyPayment = ((price - downPayment) * (interestRate / 100) * Math.pow(1 + interestRate / 100, loanTerm)) / (Math.pow(1 + interestRate / 100, loanTerm) - 1) / 12

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={stagger}
      className="min-h-screen bg-sky-50 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div variants={smokeFloat} className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-sky-500 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Inventory</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div variants={smokeFloat}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="sticky top-28"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full rounded-3xl shadow-2xl shadow-sky-500/20"
              />
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div variants={stagger} className="space-y-8">
            <motion.div variants={smokeFloat}>
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-500 font-semibold rounded-full mb-4">
                {vehicle.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
                {vehicle.name}
              </h1>
              <p className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
                {vehicle.price}
              </p>
            </motion.div>

            <motion.div variants={smokeFloat} className="bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-lg text-steel mb-6">{vehicle.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-sky-500" />
                  <span className="text-midnight">{vehicle.drivetrain}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-sky-500" />
                  <span className="text-midnight">{vehicle.engine}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Waves className="w-5 h-5 text-sky-500" />
                  <span className="text-midnight">{vehicle.fuel}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-sky-500" />
                  <span className="text-midnight">{vehicle.mpg}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={smokeFloat} className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-midnight mb-4">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {vehicle.colors.map((color) => (
                  <motion.button
                    key={color}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-sky-500 bg-sky-50 text-sky-500'
                        : 'border-gray-200 text-steel hover:border-sky-300'
                    }`}
                  >
                    {color}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={smokeFloat} className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-midnight mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-3">
                {vehicle.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="w-5 h-5 text-sky-500" />
                    <span className="text-steel">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div variants={smokeFloat}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCalculator(!showCalculator)}
                className="w-full py-4 bg-midnight text-white font-semibold rounded-xl flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5" />
                <span>{showCalculator ? 'Hide' : 'Show'} Payment Calculator</span>
              </motion.button>

              {showCalculator && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">Down Payment</label>
                      <input
                        type="range"
                        min={0}
                        max={30000}
                        step={1000}
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full"
                      />
                      <p className="text-sky-500 font-bold mt-1">${downPayment.toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">Loan Term</label>
                      <div className="flex gap-2">
                        {[36, 48, 60, 72, 84].map((term) => (
                          <motion.button
                            key={term}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setLoanTerm(term)}
                            className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                              loanTerm === term
                                ? 'bg-sky-500 text-white'
                                : 'bg-sky-50 text-sky-500'
                            }`}
                          >
                            {term} mo
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">Interest Rate: {interestRate}%</label>
                      <input
                        type="range"
                        min={0}
                        max={15}
                        step={0.1}
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl p-6 text-white text-center">
                      <p className="text-sm mb-1">Estimated Monthly Payment</p>
                      <p className="text-4xl font-bold">${Math.round(monthlyPayment).toLocaleString()}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={smokeFloat} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/30"
              >
                Schedule Test Drive
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl"
              >
                <Heart className="w-6 h-6 text-sky-500" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white rounded-xl shadow-lg hover:shadow-xl"
              >
                <Share2 className="w-6 h-6 text-sky-500" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
