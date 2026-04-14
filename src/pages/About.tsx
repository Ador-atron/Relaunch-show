import { motion } from 'framer-motion'
import { Users, Target, Heart, Shield, Truck } from 'lucide-react'

const smokeFloat = {
  initial: { y: 80, opacity: 0, filter: 'blur(12px)' },
  animate: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { y: -80, opacity: 0, filter: 'blur(12px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const stagger = { animate: { transition: { staggerChildren: 0.12 } } }

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Vehicles Sold' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50+', label: 'Premium Brands' }
]

const values = [
  { icon: <Shield className="w-8 h-8" />, title: 'Integrity First', description: 'Complete transparency. No hidden fees, no pushy tactics.' },
  { icon: <Users className="w-8 h-8" />, title: 'People Matter', description: 'Every customer treated like family with concierge support.' },
  { icon: <Truck className="w-8 h-8" />, title: 'Excellence Always', description: '150-point inspection and premium service centers.' },
  { icon: <Heart className="w-8 h-8" />, title: 'Passion Drive', description: 'Car people serving car people with obsessive dedication.' }
]

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={stagger} className="min-h-screen bg-sky-50 pt-20">
      <motion.section variants={smokeFloat} className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight to-sky-600" />
        <motion.div variants={smokeFloat} className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">For over 15 years, CAR SHOW has been redefining what a dealership can be.</p>
        </motion.div>
      </motion.section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={smokeFloat} custom={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">{stat.value}</p>
                <p className="text-steel font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={smokeFloat}>
              <div className="inline-flex items-center space-x-2 bg-sky-500/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-sky-500" />
                <span className="text-sky-500 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-midnight mb-6">Driving the Future of Automotive Excellence</h2>
              <p className="text-steel text-lg mb-6 leading-relaxed">We started CAR SHOW with a simple belief: buying a car should feel like an event, not a transaction.</p>
            </motion.div>
            <motion.div variants={smokeFloat}>
              <img src="https://images.unsplash.com/photo-1562141961-5a69c6ef35e4?w=800&q=80" alt="Showroom" className="rounded-2xl shadow-2xl shadow-sky-500/20" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={smokeFloat} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} variants={smokeFloat} custom={index} whileHover={{ y: -10, scale: 1.02 }} className="p-8 bg-sky-50 rounded-2xl hover:shadow-xl hover:shadow-sky-500/10 transition-all">
                <div className="inline-flex p-4 bg-sky-500 text-white rounded-2xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-midnight mb-3">{value.title}</h3>
                <p className="text-steel">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
