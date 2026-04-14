import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, Check, Car, Users, Star } from 'lucide-react'

const smokeFloat = {
  initial: { y: 80, opacity: 0, filter: 'blur(12px)' },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    y: -80, 
    opacity: 0, 
    filter: 'blur(12px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 5:00 PM' }
]

const reasons = [
  { icon: <Car className="w-6 h-6" />, text: '15+ Years of Excellence' },
  { icon: <Users className="w-6 h-6" />, text: '5,000+ Happy Customers' },
  { icon: <Star className="w-6 h-6" />, text: '98% Satisfaction Rate' }
]

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen bg-sky-50 pt-24 pb-16"
    >
      {/* Hero */}
      <motion.section variants={smokeFloat} className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight via-sky-600 to-midnight" />
        <motion.div 
          variants={smokeFloat}
          className="relative text-center text-white max-w-4xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Schedule a consultation or visit our showroom for a personalized experience.
          </p>
        </motion.div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={smokeFloat}
            className="bg-white rounded-3xl shadow-2xl shadow-sky-500/20 p-8"
          >
            <h2 className="text-2xl font-bold text-midnight mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">I'm Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none">
                  <option>Buying a Vehicle</option>
                  <option>Trading In My Car</option>
                  <option>Scheduling Service</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={stagger} className="space-y-6">
            <motion.div
              variants={smokeFloat}
              className="bg-white rounded-3xl shadow-xl shadow-sky-500/10 p-8"
            >
              <h2 className="text-2xl font-bold text-midnight mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sky-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight">Visit Our Showroom</h3>
                    <p className="text-steel">123 Auto Boulevard, Luxury District<br />Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sky-50 rounded-xl">
                    <Phone className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight">Call Us</h3>
                    <p className="text-steel">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-sky-50 rounded-xl">
                    <Mail className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-midnight">Email Us</h3>
                    <p className="text-steel">concierge@carshow.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={smokeFloat}
              className="bg-midnight rounded-3xl shadow-xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center">
                    <span className="text-gray-300">{item.day}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={smokeFloat}
              className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl shadow-xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Why Choose CAR SHOW?</h2>
              <div className="space-y-3">
                {reasons.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-white/20 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
