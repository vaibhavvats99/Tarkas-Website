"use client"

import { motion } from 'framer-motion'
import { Shield, Zap, Wrench, Star, Truck, Award } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Ultimate Protection',
      description: 'Heavy-duty construction protects cables from foot traffic, vehicles, and environmental damage.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Zap,
      title: 'Easy Installation',
      description: 'No tools required. Simply place over cables and secure. Installation takes seconds, not minutes.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: Wrench,
      title: 'Durable Design',
      description: 'Made from high-quality materials that withstand years of use in demanding environments.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Engineered to the highest standards with attention to detail and superior craftsmanship.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
      icon: Truck,
      title: 'Fast Shipping',
      description: 'Quick delivery to your doorstep. Most orders ship within 24 hours of placement.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      icon: Award,
      title: 'Warranty',
      description: 'Backed by our comprehensive warranty and dedicated customer support team.',
      color: 'text-accent',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="gradient-text">Tarkas</span>?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our floor wire protectors combine innovative design with premium materials 
            to deliver unmatched performance and reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 dark:to-gray-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold gradient-text">5K+</div>
            <div className="text-gray-600 dark:text-gray-300">Products Sold</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold gradient-text">98%</div>
            <div className="text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold gradient-text">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl lg:text-4xl font-bold gradient-text">5+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features