"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award, Rocket, Globe } from 'lucide-react'

const Timeline = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Three engineers with a shared vision start Tarkas in a small garage workshop.',
      icon: Rocket,
      color: 'bg-blue-500',
      details: ['Initial prototype development', 'First patent application', 'Seed funding secured'],
    },
    {
      year: '2023',
      title: 'First Product Launch',
      description: 'Launch of our flagship Premium Floor Wire Protector after extensive testing.',
      icon: Award,
      color: 'bg-green-500',
      details: ['Product launch', '100 first customers', 'Manufacturing partnership'],
    },
    {
      year: '2024',
      title: 'Market Expansion',
      description: 'Expanded operations to serve customers across North America.',
      icon: MapPin,
      color: 'bg-purple-500',
      details: ['5 new markets entered', '1,000+ customers served', 'Distribution network'],
    },
    
    {
      year: '2025',
      title: 'Sustainability Commitment',
      description: 'Launched eco-friendly product line and committed to carbon neutrality by 2030.',
      icon: Globe,
      color: 'bg-yellow-500',
      details: ['Eco-friendly materials', 'Sustainability initiatives', 'Carbon offset program'],
    },
    {
      year: '2026',
      title: 'Global Reach',
      description: 'Expansion to 25+ countries, becoming a trusted name in cable protection solutions.',
      icon: Users,
      color: 'bg-red-500',
      details: ['International partnerships', 'Global customer base', 'Localized support'],
    },
    
  ]

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a small garage startup to a leader in cable protection solutions. 
            Here's how we've grown and evolved over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary-400 to-accent rounded-full hidden lg:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Year badge */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-3xl font-bold gradient-text">{milestone.year}</span>
                      <div className={`p-3 ${milestone.color} rounded-xl`}>
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {milestone.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-900 border-4 border-accent rounded-full z-10" />

                {/* Spacer for mobile */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary-400/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What's Next?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We're just getting started. Our roadmap includes exciting new products, 
              expanded global reach, and continued innovation in cable protection technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">🌍</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Global Expansion</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Serving customers in 50+ countries by 2025
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">🔬</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">New Technologies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Smart cable management with IoT integration
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="text-5xl mb-4">♻️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Sustainability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  100% recyclable products and carbon neutrality
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline