import { Link } from 'react-router-dom'
import { Car, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-sky-500 rounded-xl">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                CAR<span className="text-sky-500">SHOW</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium vehicles built for comfort and engineered to conquer any terrain. Experience the road like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-sky-500 transition-colors">Home</Link></li>
              <li><Link to="/inventory" className="text-gray-400 hover:text-sky-500 transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sky-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Vehicle Financing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Trade-In Appraisal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Extended Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">Service & Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-sky-500" />
                <span>123 Auto Drive, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-sky-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-sky-500" />
                <span>hello@carshow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; 2026 CAR SHOW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
