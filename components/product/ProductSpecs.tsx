"use client"

import { motion } from 'framer-motion'
import { Ruler, Weight, Thermometer, Droplets, Zap, Shield } from 'lucide-react'

const ProductSpecs = () => {
  const specifications = [
    {
      category: 'Dimensions',
      icon: Ruler,
      specs: [
        { label: 'Length', value: '36 inches (3 feet)' },
        { label: 'Width', value: '3.54 inches' },
        { label: 'Channel Height', value: '0.6 inches' },
        { label: 'Channel Width', value: '1.2 inches total' },
      ]
    },
    {
      category: 'Material & Build',
      icon: Shield,
      specs: [
        { label: 'Material', value: 'Heavy-duty ABS' },
        { label: 'Weight Capacity', value: '600 kg per linear foot' },
        { label: 'Flexural Modulus', value: '1.7–2.8 GPa (stiffness)' },
        { label: 'Color', value: 'Yellow + Black, Yellow,  Black, Black + Yellow' },
      ]
    },
    {
      category: 'Performance',
      icon: Zap,
      specs: [
        { label: 'Temperature Range', value: '-20°C to 80°C (-4°F to 176°F)' },
        { label: 'UV Resistance', value: 'UV stabilized for outdoor use' },
        { label: 'Chemical Resistance', value: 'Resistant to oils and solvents' },
        { label: 'Flame Rating', value: 'Self-extinguishing' },
      ]
    },
    {
      category: 'Environmental',
      icon: Droplets,
      specs: [
        { label: 'Water Resistance', value: 'IP65 rated' },
        { label: 'Anti-Slip', value: 'Textured Cover Surface' },
        { label: 'Recyclable', value: '100% recyclable thermoplastic' },
        { label: 'Warranty', value: 'No standard warranty' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

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
          Technical <span className="gradient-text">Specifications</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Detailed specifications and performance characteristics of our premium floor wire protector.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {specifications.map((category, index) => (
          <motion.div
            key={category.category}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <category.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.category}
              </h3>
            </div>

            <div className="space-y-4">
              {category.specs.map((spec, specIndex) => (
                <div
                  key={specIndex}
                  className="flex justify-between items-start py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
                >
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {spec.label}
                  </span>
                  <span className="text-gray-900 dark:text-white font-semibold text-right max-w-[60%]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Installation Guide Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-accent/10 to-primary-400/10 rounded-2xl p-8"
      >
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Easy Installation
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
           No tools required! Our protector comes with 3M double-sided tape for secure adhesion to the surface and features an interlocking design for extended coverage. 
           Simply paste it on the floor, place your cables inside, and cover it for maximum protection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Position</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Place the protectors where needed
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Insert</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Put down the cables in the channel
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">Protect</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cover the protector with the lid  
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProductSpecs