import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award, Clock, Truck, Shield, Waves } from 'lucide-react'
import Hero from '../components/Hero'
import VehicleCard from '../components/VehicleCard'
import { vehicles } from '../data/vehicles'

const smokeFloat = {
  initial: { y: 80, opacity: 0, filter: 'blur(12px)' },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    y: -80, 
    opacity: 0, 
    filter: 'blur(12px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const floatVariants = {
  initial: { y: 60, opacity: 0, scale: 0.95 },
  animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: -60, opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } }
}

const features = [
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Premium Selection',
    description: 'Handpicked vehicles that meet our rigorous quality standards.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'VIP Treatment',
    description: 'Personalized concierge service from browse to delivery.'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Certified Quality',
    description: 'Every vehicle undergoes 150-point inspection.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for peace of mind.'
  }
]

export default function Home() {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />

      {/* Features Section */}
      <motion.section
        variants={smokeFloat}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={smokeFloat} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              The CAR SHOW Difference
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Experience automotive excellence with our commitment to quality, service, and your complete satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={smokeFloat}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="p-8 bg-sky-50 rounded-2xl hover:shadow-xl hover:shadow-sky-500/20 transition-all"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-midnight mb-3">{feature.title}</h3>
                <p className="text-steel">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Terrain Section with Video */}
      <motion.section
        variants={smokeFloat}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/secondary-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-midnight/70" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div variants={smokeFloat} className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Built for the Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Whether you're navigating city streets or conquering mountain passes, our terrain-ready vehicles deliver unmatched comfort and capability.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-sky-400" />
                  <span className="text-white font-medium">Advanced Safety Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-sky-400" />
                  <span className="text-white font-medium">All-Terrain Drivetrains</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Waves className="w-6 h-6 text-sky-400" />
                  <span className="text-white font-medium">Superior Comfort</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Vehicles */}
      <motion.section
        variants={smokeFloat}
        className="py-24 bg-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={smokeFloat} className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
                Featured Vehicles
              </h2>
              <p className="text-xl text-steel">
                Explore our handpicked selection of premium automobiles.
              </p>
            </div>
            <Link
              to="/inventory"
              className="hidden md:flex items-center space-x-2 text-sky-500 font-semibold hover:text-sky-600 transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {vehicles.slice(0, 3).map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                variants={smokeFloat}
                custom={index}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={smokeFloat} className="mt-8 text-center md:hidden">
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 text-sky-500 font-semibold"
            >
              <span>View All Inventory</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={smokeFloat}
        className="py-24 bg-midnight"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={smokeFloat}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Visit our showroom or schedule a personal consultation with our concierge team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inventory"
                className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-105"
              >
                Browse Inventory
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}
