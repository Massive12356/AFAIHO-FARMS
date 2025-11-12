import { motion } from 'framer-motion';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        {/* Product description - always visible */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {product.description}
        </p>
        
        {/* Farming practices section */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">
            Farming Method
          </h4>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {product.category === 'Crops' && 'Organic crop rotation and natural pest management'}
            {product.category === 'Livestock' && 'Pasture-raised with regenerative grazing'}
            {product.category === 'Dairy' && 'Grass-fed with humane animal care'}
            {product.category === 'Poultry' && 'Free-range with natural foraging'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}