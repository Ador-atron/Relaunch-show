import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Fuel, Gauge, Settings2, Users } from 'lucide-react'

interface VehicleProps {
  id: string
  name: string
  price: string
  image: string
  fuel: string
  engine: string
  transmission: string
  passengers: string
  category: string
}

const smokeFloat = {
  initial: { y: 60, opacity: 0, filter: 'blur(8px)' },
  animate: { 
    y: 0, 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    y: -60, 
    opacity: 0, 
    filter: 'blur(8px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function VehicleCard({ vehicle }: { vehicle: VehicleProps }) {
  return (
    <motion.div
      variants={smokeFloat}
      whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-sky-500/10 hover:shadow-2xl hover:shadow-sky-500/30 transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-midnight/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
            {vehicle.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-midnight group-hover:text-sky-500 transition-colors">
              {vehicle.name}
            </h3>
            <p className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-transparent">
              {vehicle.price}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center space-x-2 text-steel text-sm">
            <Fuel className="w-4 h-4 text-sky-500" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center space-x-2 text-steel text-sm">
            <Gauge className="w-4 h-4 text-sky-500" />
            <span>{vehicle.engine}</span>
          </div>
          <div className="flex items-center space-x-2 text-steel text-sm">
            <Settings2 className="w-4 h-4 text-sky-500" />
            <span>{vehicle.transmission}</span>
          </div>
          <div className="flex items-center space-x-2 text-steel text-sm">
            <Users className="w-4 h-4 text-sky-500" />
            <span>{vehicle.passengers}</span>
          </div>
        </div>
        <Link
          to={`/vehicle/${vehicle.id}`}
          className="block w-full py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white text-center font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:scale-[1.02]"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
