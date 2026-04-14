import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Car } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Inventory', path: '/inventory' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-sky-500/20 py-3' 
          : 'bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-md py-4 border-b border-sky-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className={`p-3 rounded-2xl transition-all duration-300 ${
                isScrolled ? 'bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/30' : 'bg-sky-500'
              }`}>
                <Car className="w-7 h-7 text-white" />
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-midnight' : 'text-midnight'
              }`}>
                CAR <span className="text-sky-500">SHOW</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-base font-medium transition-colors duration-300 group ${
                    location.pathname === link.path ? 'text-sky-500' : 'text-steel hover:text-midnight'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    location.pathname === link.path ? 'scale-x-100' : ''
                  }`} />
                </Link>
              ))}
              <Link
                to="/inventory"
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300 hover:scale-105"
              >
                Browse Cars
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-sky-50 text-midnight hover:bg-sky-100 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div className="absolute top-24 right-4 left-4 bg-white rounded-3xl shadow-2xl shadow-sky-500/20 p-6">
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block w-full text-left px-6 py-4 rounded-2xl text-lg font-semibold transition-all ${
                        location.pathname === link.path
                          ? 'bg-sky-50 text-sky-500'
                          : 'text-midnight hover:bg-sky-50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/inventory"
                    className="block w-full text-center px-6 py-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-2xl shadow-lg shadow-sky-500/30"
                  >
                    Browse Cars
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
