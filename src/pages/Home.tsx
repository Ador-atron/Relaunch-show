import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react'
import Hero from '../components/Hero'
import VehicleCard from '../components/VehicleCard'
import { vehicles } from '../data/vehicles'

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

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Adventure Enthusiast',
    text: 'The Terrain Pro handled my Iceland expedition flawlessly. Ultimate comfort on the roughest roads.',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    role: 'Business Executive',
    text: 'CAR SHOW made buying my first luxury SUV an absolute pleasure. The ceremony was impressive.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    role: 'Family Traveler',
    text: 'Roomy, safe, and gorgeous. We took it across the Alps and it exceeded every expectation.',
    rating: 5
  }
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />

      {/* Featured Vehicles */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              Featured Vehicles
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Discover our handpicked selection of premium terrain-ready vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.slice(0, 3).map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/inventory"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-sky-500 transition-all"
            >
              <span>View All Inventory</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              Why Choose CAR SHOW
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Experience the difference of a dealership that puts you first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-sky-50 hover:shadow-xl hover:shadow-sky-500/10 transition-all"
              >
                <div className="inline-flex p-4 bg-sky-500 text-white rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-midnight mb-3">{feature.title}</h3>
                <p className="text-steel">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/secondary-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for the <span className="text-sky-400">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Every vehicle in our showroom is designed to transform every drive into an adventure — no terrain too challenging, no destination too far.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-all"
              >
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CAR SHOW.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-sky-500/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-steel mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-midnight">{testimonial.name}</p>
                  <p className="text-sm text-sky-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Visit our showroom or schedule a personal consultation with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inventory"
                className="px-8 py-4 bg-sky-500 text-white text-lg font-semibold rounded-full hover:bg-sky-600 transition-all"
              >
                Browse Inventory
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
