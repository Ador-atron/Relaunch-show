import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Shield, Truck, Waves } from 'lucide-react'

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Conquer Every <span className="text-sky-400">Terrain</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Premium vehicles engineered for ultimate comfort and built to tackle any road — from city streets to mountain paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inventory"
              className="px-8 py-4 bg-sky-500 text-white text-lg font-semibold rounded-full hover:bg-sky-600 transition-all hover:shadow-lg hover:shadow-sky-500/30"
            >
              Explore Inventory
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
            >
              Book Test Drive
            </Link>
          </div>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-32 left-0 right-0"
        >
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap">
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-medium">5-Star Safety</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Truck className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-medium">All-Terrain Ready</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Waves className="w-5 h-5 text-sky-400" />
              <span className="text-sm font-medium">Premium Comfort</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
