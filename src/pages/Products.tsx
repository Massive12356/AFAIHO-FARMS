import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Leaf, Wheat, Egg, Beef, Truck, Award, Shield, Calendar } from 'lucide-react';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import bgImage from '../public/images/pepper1.jpg'
import p1 from '../public/images/29.jpeg'
import p2 from '../public/images/8.jpeg'
import machinery1 from '../public/images/machinery1.jpg'
import machinery2 from '../public/images/machinery2.avif'
import machinery3 from '../public/images/machinery3.avif'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Crops', 'Livestock', 'Dairy', 'Poultry'];

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
    Crops: Leaf,
    Livestock: Beef,
    Dairy: Wheat,
    Poultry: Egg,
  };

  // Seasonal highlights data with images
  const seasonalHighlights = [
    {
      season: 'rainy',
      name: 'Rainy Season Harvest',
      color: 'from-green-500 to-emerald-600',
      image: machinery1, // Using local image instead of external URL
      products: ['Mangoes and pawpaws', 'Pineapples and bananas', 'Okra and eggplant', 'Fresh vegetables'],
    },
    {
      season: 'dry',
      name: 'Dry Season Bounty',
      color: 'from-amber-500 to-orange-600',
      image: machinery2, // Using local image instead of external URL
      products: ['Citrus fruits and pineapples', 'Root vegetables', 'Stored grains', 'Dried legumes'],
    },
    {
      season: 'garden',
      name: 'Garden Essentials',
      color: 'from-purple-500 to-indigo-600',
      image: machinery3, // Using local image instead of external URL
      products: ['Organic compost', 'Natural fertilizers', 'Seed varieties', 'Gardening tools'],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <section
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-200">
            Fresh, organic, and locally grown from our mixed farm
          </p>
        </motion.div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const Icon = categoryIcons[category] || null;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                        selectedCategory === category
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No products found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Seasonal Products Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for seasonal section */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 opacity-25 dark:opacity-20"
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
              r="45"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,50 Q50,30 70,50 T90,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
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
              d="M30,60 Q50,40 70,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="50" r="5" fill="#10b981" />
            <circle cx="60" cy="50" r="5" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Seasonal Highlights"
            subtitle="What's fresh this season in Ghana"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {seasonalHighlights.map((season, index) => (
              <motion.div
                key={season.season}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
              >
                <div
                  className={`h-40 bg-gradient-to-r ${season.color} flex items-center p-4 relative`}
                >
                  <img
                    src={season.image}
                    alt={season.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="flex items-center relative z-10">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50 mr-4">
                      <img
                        src={season.image}
                        alt={season.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {season.name}
                      </h3>
                      <p className="text-green-100">Currently Available in Ghana</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                    {season.products.map((product, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-4 h-4 text-green-600 dark:text-green-400 mr-2"
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
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for quality section */}
        <motion.div
          className="absolute top-10 right-10 w-24 h-24 opacity-25 dark:opacity-20"
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
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,50 Q40,30 60,50 T80,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="40" r="6" fill="#10b981" />
            <circle cx="60" cy="60" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 15, 0, -15, 0],
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
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="#10b981"
              strokeWidth="3"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Quality Assurance"
            subtitle="Our commitment to excellence and safety"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Certified Organic
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our products are certified organic by recognized
                authorities, ensuring the highest standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Food Safety
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rigorous testing and quality control measures ensure our
                products are safe for your family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Leaf className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Sustainable Practices
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Environmentally responsible farming methods that protect our
                planet for future generations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Fresh Harvest
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Products harvested at peak ripeness and delivered to you within
                24-48 hours for maximum freshness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farm to Table Section */}
      <section className="py-20 px-4 bg-green-600 text-white relative overflow-hidden">
        {/* Animated sketch elements for farm-to-table section */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 opacity-25"
          animate={{
            x: [0, 25, 0, -25, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q40,30 60,50 T100,50"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M20,60 Q40,40 60,60 T100,60"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="30" cy="50" r="5" fill="white" />
            <circle cx="50" cy="50" r="5" fill="white" />
            <circle cx="70" cy="50" r="5" fill="white" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-25"
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
              r="40"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,20 L50,80 M20,50 L80,50"
              stroke="white"
              strokeWidth="3"
            />
            <circle cx="50" cy="50" r="10" fill="white" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Our Farm to Your Table
              </h2>
              <p className="text-green-50 text-lg mb-6">
                We believe in complete transparency in our farming and
                production processes. Know exactly where your food comes from
                and how it's produced.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-200 mr-3">•</span>
                  <span>
                    Farm visits available by appointment to see our practices
                    firsthand
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-3">•</span>
                  <span>
                    Detailed information about growing/harvesting dates on all
                    products
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-3">•</span>
                  <span>
                    Direct relationship with our farmers and producers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-200 mr-3">•</span>
                  <span>Seasonal harvest calendars available for planning</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Truck className="w-12 h-12 text-green-200 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">Delivery & Pickup</h3>
                  <p className="text-green-100">
                    Fresh to your door or farm pickup
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-green-500/30 pb-2">
                  <span>Local Delivery</span>
                  <span className="font-semibold">Within 50 miles</span>
                </div>
                <div className="flex justify-between border-b border-green-500/30 pb-2">
                  <span>Delivery Days</span>
                  <span className="font-semibold">Tue, Thu, Sat</span>
                </div>
                <div className="flex justify-between border-b border-green-500/30 pb-2">
                  <span>Pickup Available</span>
                  <span className="font-semibold">Daily 8am-6pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Cutoff</span>
                  <span className="font-semibold">12pm prior day</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for testimonials section */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
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
              d="M30,60 Q50,40 70,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="40" cy="50" r="6" fill="#10b981" />
            <circle cx="60" cy="50" r="6" fill="#10b981" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 opacity-25 dark:opacity-20"
          animate={{
            rotate: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 1],
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
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,30 Q50,50 70,30"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M30,70 Q50,50 70,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Hear from our valued community"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  KA
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Kwame Asante
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Local Chef
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "The quality and freshness of AFIAHO FARMS products have
                transformed my restaurant's menu. My customers constantly ask
                about our suppliers, and I'm proud to recommend your farm."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  AM
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Adwoa Mensah
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Weekly Customer
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "As a family of four, we've been getting our produce from
                AFIAHO FARMS for two years. The difference in taste and quality
                compared to supermarket produce is remarkable. Our kids actually
                ask for vegetables now!"
              </p>
              <div className="flex mt-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
                <svg
                  key={4}
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  KB
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Kofi Boateng
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Health Enthusiast
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "After switching to AFIAHO FARMS products, I've noticed a
                significant improvement in my family's health and energy levels.
                Knowing exactly where our food comes from gives us peace of mind
                we never had with store-bought produce."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Animated sketch elements for mixed farming section */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 opacity-25 dark:opacity-20"
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
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M50,10 L50,90 M10,50 L90,50"
              stroke="#10b981"
              strokeWidth="3"
            />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 opacity-25 dark:opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M30,70 Q50,30 70,70"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M40,60 Q50,40 60,60"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="50" r="8" fill="#10b981" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle
            title="Our Mixed Farming Approach"
            subtitle="How we integrate crop and livestock production"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Sustainable Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our mixed farming system creates a closed-loop ecosystem where
                crops and livestock support each other. Livestock provide
                natural fertilizer for crops, while crop residues feed our
                animals. This symbiotic relationship reduces waste, improves
                soil health, and produces higher quality products.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Crop Rotation Benefits
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Different crops are rotated seasonally to maintain soil
                      fertility and prevent pest buildup
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-1">
                    <Beef className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Livestock Integration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Animals graze on rotated pastures and provide natural
                      fertilizer for crop fields
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src={p1}
                alt="Farm integration"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src={p2}
                alt="Mixed farming"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                loading="lazy"
              />
            </motion.div>
          </div>

          <SectionTitle
            title="Why Our Products Stand Out"
            subtitle="Quality you can taste, sustainability you can trust"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Organic Certified",
                description: "All products are 100% organic and chemical-free",
              },
              {
                title: "Locally Grown",
                description: "Fresh from our farm to your table",
              },
              {
                title: "Sustainable",
                description: "Eco-friendly farming practices",
              },
              {
                title: "Quality Assured",
                description: "Rigorous quality control standards",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}