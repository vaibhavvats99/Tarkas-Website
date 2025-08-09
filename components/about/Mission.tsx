"use client"

import { motion } from 'framer-motion'
import { Shield, Lightbulb, Heart, Globe } from 'lucide-react'

const Mission = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every product we design prioritizes the safety and protection of people and equipment.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to create better, more efficient solutions for cable management.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Our customers are at the center of everything we do, from design to delivery.',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We are committed to sustainable practices and creating products that last.',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To revolutionize workplace safety through innovative cable protection solutions 
            that combine durability, functionality, and aesthetic appeal. We believe that 
            safety shouldn't compromise style, and efficiency shouldn't sacrifice quality.
          </p>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group"
            >
              <div className={`inline-flex p-6 rounded-3xl ${pillar.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className={`w-12 h-12 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent/10 to-primary-400/10 rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the global leader in cable protection solutions, creating a world 
                where every workspace is safer, more organized, and more efficient. We envision 
                a future where cable-related accidents are eliminated through innovative design 
                and universal adoption of proper cable management practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Zero workplace accidents caused by cable hazards
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Universal adoption of professional cable management
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sustainable solutions for a better tomorrow
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="aspect-square bg-gradient-to-br from-accent to-primary-400 rounded-3xl flex items-center justify-center shadow-2xl"
              >
                <div className="text-center text-white space-y-4">
                  <div className="text-8xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold">Future Forward</h4>
                  <p className="text-lg opacity-90">Building tomorrow's solutions today</p>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-accent/20 rounded-full blur-sm"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-300/20 rounded-full blur-sm"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission