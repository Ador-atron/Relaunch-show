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

export default function VehicleCard({ vehicle }: { vehicle: VehicleProps }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-sky-500/10 hover:shadow-2xl hover:shadow-sky-500/20"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-sky-500 text-white text-xs font-semibold rounded-full">
          {vehicle.category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-midnight mb-2">{vehicle.name}</h3>
        <p className="text-2xl font-bold text-sky-500 mb-4">{vehicle.price}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
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
          className="block w-full py-3 bg-sky-50 text-sky-500 text-center font-semibold rounded-xl hover:bg-sky-500 hover:text-white transition-all"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
