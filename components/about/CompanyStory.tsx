"use client"

import { motion } from 'framer-motion'
import { Award, Users, Globe, Target } from 'lucide-react'

const CompanyStory = () => {
  const stats = [
    { icon: Users, value: '5K+', label: 'Happy Customers' },
    { icon: Globe, value: '25+', label: 'States Served' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Target, value: '95%', label: 'Customer Satisfaction' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                  Our Story
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Building a Safer{' '}
                  <span className="gradient-text">Tomorrow</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <p>
                  Founded in 2019, Tarkas emerged from a simple observation: workplaces around the world 
                  were struggling with cable management and safety hazards. Our founders, experienced engineers 
                  with backgrounds in safety equipment, saw an opportunity to create something better.
                </p>
                <p>
                  What started as a small team of three in a garage workshop has grown into a trusted brand 
                  serving thousands of customers worldwide. Our commitment to quality, innovation, and 
                  customer satisfaction remains at the heart of everything we do.
                </p>
                <p>
                  Today, Tarkas is recognized as a leader in cable protection solutions, trusted by 
                  businesses, event organizers, and safety professionals.
                </p>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="col-span-2 aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center space-y-3">
                    <div className="text-6xl">🏭</div>
                    <p className="text-lg font-medium">Our Manufacturing Facility</p>
                  </div>
                </div>
              </motion.div>

              {/* Two smaller images */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-gradient-to-br from-accent to-orange-600 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">👥</div>
                    <p className="text-sm font-medium">Our Team</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center space-y-2">
                    <div className="text-4xl">🔬</div>
                    <p className="text-sm font-medium">R&D Lab</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed mb-8">
              "Our mission is simple: to create innovative safety solutions that protect people 
              and equipment while making workplaces more organized and efficient."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-400 rounded-full flex items-center justify-center text-white text-2xl">
                👨‍💼
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 dark:text-white">
                  Indervir
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  CEO & Founder, Tarkas
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompanyStory