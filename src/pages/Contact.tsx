import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react'

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 5:00 PM' }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buy',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-sky-50 pt-20"
    >
      {/* Header */}
      <section className="py-16 bg-midnight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Schedule a test drive, ask a question, or simply say hello. We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {isSubmitted ? (
                <div className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-12 text-center">
                  <div className="inline-flex p-4 bg-sky-500 text-white rounded-full mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-midnight mb-4">Thank You!</h3>
                  <p className="text-steel">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8">
                  <h3 className="text-2xl font-bold text-midnight mb-6">Send Us a Message</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-midnight mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-midnight mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">I'm interested in...</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 outline-none transition-all"
                      >
                        <option value="buy">Buying a Vehicle</option>
                        <option value="finance">Financing Options</option>
                        <option value="trade">Trade-In Appraisal</option>
                        <option value="service">Service & Maintenance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-midnight mb-2">Message</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8">
                <h3 className="text-2xl font-bold text-midnight mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-500/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight">Address</p>
                      <p className="text-steel">123 Auto Drive, Los Angeles, CA 90001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-500/10 rounded-xl">
                      <Phone className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight">Phone</p>
                      <p className="text-steel">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-500/10 rounded-xl">
                      <Mail className="w-6 h-6 text-sky-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-midnight">Email</p>
                      <p className="text-steel">hello@carshow.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-xl shadow-sky-500/10 p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-sky-500/10 rounded-xl">
                    <Clock className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-midnight">Hours</h3>
                </div>

                <div className="space-y-4">
                  {hours.map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                      <span className="text-midnight">{item.day}</span>
                      <span className="text-steel font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-midnight rounded-2xl overflow-hidden h-64 flex items-center justify-center">
                <p className="text-white/60">Interactive Map Coming Soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
