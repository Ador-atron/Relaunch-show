import { motion } from 'framer-motion'
import { Users, Target, Heart, Shield, Truck } from 'lucide-react'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Vehicles Sold' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50+', label: 'Premium Brands' }
]

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Integrity First',
    description: 'We believe in complete transparency. No hidden fees, no pushy tactics — just honest dealings that build lasting relationships.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'People Matter',
    description: 'Every customer is treated like family. Our concierge approach ensures you feel supported from first hello to final delivery.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'Excellence Always',
    description: 'From our 150-point inspection to our premium service centers, we never cut corners on quality.'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Passion Drive',
    description: 'We are car people serving car people. This isn\'t just our job — it\'s our obsession.'
  }
]

const team = [
  {
    name: 'Marcus Sterling',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Elena Vasquez',
    role: 'Sales Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  },
  {
    name: 'David Chen',
    role: 'Service Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  }
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-sky-50 pt-20"
    >
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-midnight to-sky-600" />
        <div className="relative text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              For over 15 years, CAR SHOW has been redefining what a dealership can be — transforming every customer interaction into a ceremony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-sky-500 mb-2">{stat.value}</p>
                <p className="text-steel font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-sky-500/10 px-4 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-sky-500" />
                <span className="text-sky-500 font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-midnight mb-6">
                Driving the Future of Automotive Excellence
              </h2>
              <p className="text-steel text-lg mb-6 leading-relaxed">
                We started CAR SHOW with a simple belief: buying a car should feel like an event, not a transaction. Today, that philosophy guides everything we do — from our meticulously curated showroom to our white-glove service philosophy.
              </p>
              <p className="text-steel text-lg leading-relaxed">
                Every vehicle in our collection is chosen not just for its capability, but for its character. We search the world for automobiles that truly elevate the driving experience — machines that transform ordinary journeys into extraordinary adventures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1562141961-5a69c6ef35e4?w=800&q=80"
                alt="Showroom"
                className="rounded-2xl shadow-2xl shadow-sky-500/20"
              />
              <div className="absolute -bottom-8 -left-8 bg-midnight text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold text-sky-400">150+</p>
                <p className="text-sm">Point Inspection</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Four principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-sky-50 rounded-2xl hover:shadow-xl hover:shadow-sky-500/10 transition-all"
              >
                <div className="inline-flex p-4 bg-sky-500 text-white rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-midnight mb-3">{value.title}</h3>
                <p className="text-steel">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-midnight mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-steel max-w-2xl mx-auto">
              Passionate car enthusiasts dedicated to finding your perfect match.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-sky-500/10"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-midnight">{member.name}</h3>
                  <p className="text-sky-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-midnight">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Visit our showroom or schedule a personal consultation today.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-sky-500 text-white text-lg font-semibold rounded-full hover:bg-sky-600 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
