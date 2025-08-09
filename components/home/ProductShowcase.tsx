"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'

const ProductShowcase = () => {
  const features = [
    'Heavy-duty cable protection',
    'Multiple cable channels',
    'Non-slip cover surface',
    'Weather resistant material',
    'Easy snap-on installation',
    'Professional appearance',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl">
              {/* Placeholder for product image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4">
                  <div className="w-32 h-8 bg-gray-800 dark:bg-gray-300 rounded-lg mx-auto relative">
                    <div className="absolute top-1 left-2 right-2 h-2 bg-accent rounded-sm"></div>
                    <div className="absolute top-4 left-2 right-2 h-2 bg-accent rounded-sm"></div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Tarkas Floor Wire Protector
                  </p>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                Best Seller
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                In Stock
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary-400/20 rounded-3xl -z-10 blur-xl"></div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold"
              >
                Featured Product
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Premium Floor Wire{' '}
                <span className="gradient-text">Protector</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our flagship product designed to provide maximum protection for your cables 
                while maintaining a professional appearance in any environment.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Price and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">RS 1299</span>
                <span className="text-lg text-gray-500 dark:text-gray-400 line-through">Rs 1799</span>
                <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
                  25% OFF
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>View Product</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </motion.button>
                </Link>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase