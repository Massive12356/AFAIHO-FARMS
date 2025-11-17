import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Heart, Star, Sprout, TreePine, Wheat } from 'lucide-react';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { useState, useEffect } from 'react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: '100% organic produce grown without harmful pesticides or synthetic fertilizers',
    },
    {
      icon: Award,
      title: 'Sustainable Practices',
      description: 'Eco-friendly farming methods that protect our soil, water, and biodiversity',
    },
    {
      icon: Heart,
      title: 'Mixed Farming',
      description: 'Integrated crop and livestock farming for a balanced, self-sustaining ecosystem',
    },
    {
      icon: Sprout,
      title: 'Crop Diversity',
      description: 'Growing a wide variety of seasonal vegetables, fruits, and grains',
    },
    {
      icon: TreePine,
      title: 'Livestock Care',
      description: 'Ethically raised animals with access to pasture and natural diets',
    },
    {
      icon: Wheat,
      title: 'Soil Health',
      description: 'Using composting, crop rotation, and cover crops to enrich our soil',
    },
  ];

  // Get current season
  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  };

  const currentSeason: 'spring' | 'summer' | 'fall' | 'winter' | 'garden' = getCurrentSeason() as 'spring' | 'summer' | 'fall' | 'winter' | 'garden';

  const seasonalHighlights = [
    {
      season: 'spring',
      name: 'Spring Harvest',
      color: 'from-green-500 to-emerald-600',
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Fresh lettuce and greens', 'Radishes and turnips', 'Fresh herbs', 'Pasture-raised eggs'],
    },
    {
      season: 'summer',
      name: 'Summer Bounty',
      color: 'from-amber-500 to-orange-600',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Tomatoes and peppers', 'Corn and beans', 'Berries and melons', 'Grass-fed beef'],
    },
    {
      season: 'garden',
      name: 'Garden Essentials',
      color: 'from-purple-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Organic compost', 'Natural fertilizers', 'Seed varieties', 'Gardening tools'],
    },
    {
      season: 'fall',
      name: 'Fall Harvest',
      color: 'from-orange-600 to-red-700',
      image: 'https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Pumpkins and squash', 'Apples and pears', 'Root vegetables', 'Fresh dairy products'],
    },
    {
      season: 'winter',
      name: 'Winter Storage',
      color: 'from-blue-600 to-indigo-700',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Stored root vegetables', 'Preserved fruits', 'Aged cheeses', 'Fresh eggs'],
    },
  ];

  const currentSeasonData = seasonalHighlights.find(s => s.season === currentSeason) || seasonalHighlights[0];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Welcome to AFAIHO FARMS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Sustainable Mixed Farming - Fresh Organic Produce & Ethically Raised
            Livestock
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors group"
            >
              View Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated sketch elements for mission section */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 opacity-20 dark:opacity-15"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="#10b981"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 opacity-20 dark:opacity-15"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M30,70 Q50,30 70,70"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M40,60 Q50,40 60,60"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="50" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Our Mission"
            subtitle="Dedicated to sustainable mixed farming and delivering the freshest organic produce"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed mb-8"
          >
            At AFAIHO FARMS, we believe in the power of sustainable agriculture.
            Our mixed farming approach combines traditional methods with modern
            innovation to produce the highest quality organic crops and raise
            healthy livestock. We're committed to environmental stewardship and
            supporting our local community through ethical farming practices.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Mixed Farming Benefits
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>Nutrient cycling between crops and livestock</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>Diverse income streams for economic stability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>Reduced dependency on external inputs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Our Commitment
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>100% organic certification maintained</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>Animal welfare as a top priority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-2">
                    •
                  </span>
                  <span>Community education and engagement</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Highlights Section */}
      <section className="py-20 px-4 bg-green-50 dark:bg-green-900/10 relative overflow-hidden">
        {/* Animated sketch decorative elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,30 Q40,5 60,30 T100,30"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M10,50 Q30,25 50,50 T90,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,70 Q50,45 70,70 T110,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="50" r="5" fill="#10b981" />
            <circle cx="30" cy="30" r="4" fill="#10b981" />
            <circle cx="70" cy="30" r="4" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, -20, 0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,30 L70,70 M70,30 L30,70"
              stroke="#10b981"
              strokeWidth="3"
            />
            <path d="M50,10 L50,90" stroke="#10b981" strokeWidth="3" />
            <path d="M10,50 L90,50" stroke="#10b981" strokeWidth="3" />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,60 Q40,40 60,60 T100,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,40 Q40,20 60,40 T100,40"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="30" cy="50" r="5" fill="#10b981" />
            <circle cx="70" cy="50" r="5" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-28 h-28 opacity-25 dark:opacity-20"
          animate={{
            x: [0, 25, 0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,10 Q70,30 50,50 T30,90"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,30 Q50,50 70,30 T90,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="30" r="6" fill="#10b981" />
            <circle cx="40" cy="60" r="5" fill="#10b981" />
            <circle cx="60" cy="60" r="5" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Seasonal Highlights"
            subtitle={`What's fresh this ${currentSeasonData.name
              .split(" ")[0]
              .toLowerCase()}`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div
                className={`h-48 bg-gradient-to-r ${currentSeasonData.color} flex items-center justify-center relative`}
              >
                <img
                  src={currentSeasonData.image}
                  alt={currentSeasonData.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="text-center text-white relative z-10">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/50">
                    <img
                      src={currentSeasonData.image}
                      alt={currentSeasonData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    {currentSeasonData.name}
                  </h3>
                  <p className="text-xl opacity-90">Currently Available</p>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Seasonal Offerings
                </h4>
                <ul className="space-y-3">
                  {currentSeasonData.products.map((product, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 dark:text-green-400 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        {product}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors"
                >
                  View all seasonal products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {seasonalHighlights.map((season) => (
                <motion.div
                  key={season.season} 
                  whileHover={{ y: -5 }}
                  className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${currentSeason === season.season ? 'ring-2 ring-green-500' : ''}`}
                >
                  <div
                    className={`h-24 bg-gradient-to-r ${season.color} flex items-center p-4 relative`}
                  >
                    <img
                      src={season.image}
                      alt={season.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />
                    <div className="flex items-center relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/50 mr-3">
                        <img
                          src={season.image}
                          alt={season.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-white font-semibold text-sm">
                        {season.name}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4">
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {season.products.slice(0, 2).map((product, idx) => (
                        <li key={idx} className="truncate">
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Farm Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for features section */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 opacity-20 dark:opacity-15"
          animate={{
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20,60 Q40,40 60,60 T100,60"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="30" cy="50" r="4" fill="#10b981" />
            <circle cx="50" cy="50" r="4" fill="#10b981" />
            <circle cx="70" cy="50" r="4" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 opacity-20 dark:opacity-15"
          animate={{
            rotate: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,50 Q50,30 70,50 T90,70"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle title="Why Choose Our Farm" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                    <Icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Animated sketch elements for products section */}
        <motion.div
          className="absolute top-10 right-10 w-28 h-28 opacity-20 dark:opacity-15"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M30,30 Q50,10 70,30 T90,50"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M20,50 Q40,30 60,50 T80,70"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="40" r="6" fill="#10b981" />
            <circle cx="60" cy="60" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 opacity-20 dark:opacity-15"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50,20 L50,80 M20,50 L80,50"
              stroke="#10b981"
              strokeWidth="2"
            />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Featured Products"
            subtitle="Fresh picks from our farm"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors group"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for testimonials section */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 opacity-20 dark:opacity-15"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,60 Q50,40 70,60"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="50" r="4" fill="#10b981" />
            <circle cx="60" cy="50" r="4" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-20 dark:opacity-15"
          animate={{
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,30 Q50,50 70,30"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,70 Q50,50 70,70"
              stroke="#10b981"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle title="What Our Customers Say" />
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                )
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </p>
          </motion.div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial
                    ? "bg-green-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600 text-white relative overflow-hidden">
        {/* Animated sketch elements for CTA section */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 opacity-20"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M30,60 Q50,40 70,60"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="40" cy="50" r="6" fill="white" />
            <circle cx="60" cy="50" r="6" fill="white" />
          </svg>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experience Sustainable Farming
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-green-50"
          >
            Visit our farm or get in touch to learn more about our mixed farming
            practices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Farm
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}