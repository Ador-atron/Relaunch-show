import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Shield, Truck, Waves } from 'lucide-react'

const floatVariants = {
  initial: { y: 60, opacity: 0, scale: 0.95 },
  animate: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    y: -60, 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const smokeFloat = {
  initial: { y: 100, opacity: 0, filter: 'blur(10px)' },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 2, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight/80" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={smokeFloat}
          initial="initial"
          animate="animate"
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-500/30 rounded-full text-sky-400 text-sm font-medium mb-8">
            Premium Terrain-Ready Vehicles
          </span>
        </motion.div>

        <motion.h1
          variants={floatVariants}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          Conquer Every
          <span className="block bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
            Horizon
          </span>
        </motion.h1>

        <motion.p
          variants={smokeFloat}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12"
        >
          Discover vehicles engineered for comfort, capability, and uncompromising adventure.
        </motion.p>

        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/inventory"
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-105"
          >
            Explore Inventory
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
          >
            Schedule Test Drive
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={smokeFloat}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8, duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl"
        >
          {[
            { icon: Shield, label: 'All-Terrain', desc: 'AWD/4WD Systems' },
            { icon: Truck, label: 'Premium', desc: '150-Point Inspection' },
            { icon: Waves, label: 'Comfort', desc: 'Luxury Interiors' },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <feature.icon className="w-8 h-8 text-sky-400 mx-auto mb-2" />
              <p className="text-white font-semibold">{feature.label}</p>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}
