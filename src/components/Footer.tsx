import { Link } from 'react-router-dom'
import { Car, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="p-2 bg-sky-500 rounded-xl">
                <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold">
                CAR<span className="text-sky-500">SHOW</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Premium vehicles built for comfort and engineered to conquer any terrain.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-sky-500 transition-colors">
                <Twitter className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Home</Link></li>
              <li><Link to="/inventory" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Inventory</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Vehicle Financing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Trade-In Appraisal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Extended Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-500 transition-colors text-sm md:text-base">Service & Maintenance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-sky-500 mt-0.5" />
                <span className="text-sm md:text-base">123 Auto Drive, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                <span className="text-sm md:text-base">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                <span className="text-sm md:text-base">hello@carshow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm md:text-base">&copy; 2026 CAR SHOW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
