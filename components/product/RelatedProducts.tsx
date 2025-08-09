"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

const RelatedProducts = () => {
  const relatedProducts = [
    {
      id: 1,
      name: 'Tarkas Heavy Duty Floow Wire Protector',
      price: 1299,
      originalPrice: 1799,
      rating: 4.8,
      reviews: 89,
      image: '🛡️',
      color: 'bg-gray-700',
      badge: 'Heavy Duty',
      badgeColor: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Tarkas Standard Floor Wire Protector',
      price: 599,
      originalPrice: 899,
      rating: 4.7,
      reviews: 67,
      image: '🌧️',
      color: 'bg-green-600',
      badge: 'Weather Proof',
      badgeColor: 'bg-green-500',
    },
    {
      id: 3,
      name: 'Tarkas Double-Sided Tape',
      price: 200,
      originalPrice: 400,
      rating: 4.9,
      reviews: 143,
      image: '🧻',
      color: 'bg-orange-500',
      badge: 'Compact',
      badgeColor: 'bg-orange-500',
    },
    {
      id: 4,
      name: 'Tarkas Screws and Anchors',
      price: 100,
      originalPrice: 250,
      rating: 4.6,
      reviews: 52,
      image: '🔩',
      color: 'bg-purple-600',
      badge: 'Screws',
      badgeColor: 'bg-purple-500',
    },
  ]

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Related <span className="gradient-text">Products</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Complete your cable protection setup with these complementary products
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative">
              <div className={`aspect-square ${product.color} flex items-center justify-center text-4xl text-white relative overflow-hidden`}>
                <span>{product.image}</span>
                
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {product.badge}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/product">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-accent transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Rs {product.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                  Rs {product.originalPrice}
                </span>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-accent/90 text-white py-2 rounded-xl font-semibold text-sm transition-colors group"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Products CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center space-x-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300"
          >
            <span>View All Products</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

export default RelatedProducts