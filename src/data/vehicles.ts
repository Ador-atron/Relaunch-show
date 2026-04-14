export interface Vehicle {
  id: string
  name: string
  price: string
  image: string
  fuel: string
  engine: string
  transmission: string
  passengers: string
  category: string
  drivetrain: string
  mpg: string
  description: string
  features: string[]
  colors: string[]
}

export const vehicles: Vehicle[] = [
  {
    id: 'terrain-pro-x',
    name: 'Terrain Pro X',
    price: '$68,900',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    fuel: 'Hybrid',
    engine: '3.0L V6 Twin-Turbo',
    transmission: '8-Speed Auto',
    passengers: '7 Seats',
    category: 'SUV',
    drivetrain: 'AWD',
    mpg: '28/32 mpg',
    description: 'The ultimate all-terrain SUV. Featuring advanced air suspension, intelligent AWD, and a whisper-quiet interior that transforms any journey into first-class travel.',
    features: ['Adaptive Air Suspension', 'Panoramic Roof', '360° Camera', 'Premium Leather', 'Heads-Up Display', 'Wireless Charging', 'Apple CarPlay', 'Ambient Lighting'],
    colors: ['Midnight Black', 'Glacier White', 'Ocean Blue', 'Forest Green']
  },
  {
    id: 'summit-elite',
    name: 'Summit Elite',
    price: '$82,500',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    fuel: 'Electric',
    engine: 'Dual Motor AWD',
    transmission: 'Single-Speed',
    passengers: '5 Seats',
    category: 'Luxury SUV',
    drivetrain: 'AWD',
    mpg: '350 mi range',
    description: 'Where sustainability meets supercar performance. The Summit Elite combines zero emissions with 500HP and an interior that rivals the finest hotel suites.',
    features: ['Dual Motor AWD', '0-60 in 3.8s', 'Autopilot', 'Executive Seating', '21-Speaker Audio', 'Massage Seats', 'Climate Control', 'Frunk Storage'],
    colors: ['Pearl White', 'Matte Black', 'Racing Red', 'Silver Frost']
  },
  {
    id: 'expedition-max',
    name: 'Expedition Max',
    price: '$74,200',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
    fuel: 'Diesel',
    engine: '3.5L Power Stroke',
    transmission: '10-Speed Auto',
    passengers: '8 Seats',
    category: 'Full-Size SUV',
    drivetrain: '4WD',
    mpg: '21/28 mpg',
    description: 'Built for the boldest expeditions. The Expedition Max tows up to 9,300 lbs while keeping passengers coddled in luxury across any landscape.',
    features: ['Terrain Management System', 'Pro Power Onboard', 'Trailer Hitch', 'Captain Chairs', 'Rear Entertainment', 'Wireless Hotspot', 'Blind Spot Monitor', 'Lane Keep'],
    colors: ['Agate Black', 'Star White', 'Forged Green', 'Burnished Bronze']
  },
  {
    id: 'vista-cruiser',
    name: 'Vista Cruiser',
    price: '$54,800',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    fuel: 'Gasoline',
    engine: '2.7L EcoBoost',
    transmission: '8-Speed Auto',
    passengers: '5 Seats',
    category: 'Crossover',
    drivetrain: 'FWD',
    mpg: '26/33 mpg',
    description: 'The perfect blend of efficiency and capability. Vista Cruiser is equally at home on coastal highways and mountain passes.',
    features: ['EcoBoost Engine', 'Co-Pilot360', 'SYNC 4', 'Wireless Charging', 'Roof Rails', 'Hands-Free Liftgate', 'Remote Start', 'Heated Seats'],
    colors: ['Iconic Silver', 'Rapid Red', 'Blue Metallic', 'White Platinum']
  },
  {
    id: 'conqueror-gt',
    name: 'Conqueror GT',
    price: '$91,000',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80',
    fuel: 'Hybrid',
    engine: '4.0L V8 Hybrid',
    transmission: '9-Speed Auto',
    passengers: '5 Seats',
    category: 'Performance SUV',
    drivetrain: 'AWD',
    mpg: '22/26 mpg',
    description: 'For those who refuse to compromise. The Conqueror GT delivers supercar performance with SUV practicality in one breathtaking package.',
    features: ['Sport-Tuned Suspension', 'Carbon Ceramic Brakes', 'Active Exhaust', 'Sport Bucket Seats', 'Carbon Fiber Trim', 'Launch Control', 'Track Mode', 'Performance Data'],
    colors: ['Nardo Grey', 'Sunset Orange', 'Deep Blue', 'Diamond Silver']
  },
  {
    id: 'horizon-touring',
    name: 'Horizon Touring',
    price: '$61,400',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
    fuel: 'Gasoline',
    engine: '3.5L V6',
    transmission: '10-Speed Auto',
    passengers: '7 Seats',
    category: 'Luxury SUV',
    drivetrain: 'AWD',
    mpg: '19/26 mpg',
    description: 'First-class travel for the whole family. The Horizon Touring wraps advanced technology in an interior designed for pure relaxation.',
    features: ['Captains Chairs', 'Rear Entertainment', 'Premium Audio', 'Ambient Lighting', 'Heated/Cooled Seats', 'Panoramic Vista Roof', 'Wireless Device Charging', '360-Degree Camera'],
    colors: ['Ebony Black', 'Ivory White', 'Chestnut Brown', 'Navy Blue']
  }
]
