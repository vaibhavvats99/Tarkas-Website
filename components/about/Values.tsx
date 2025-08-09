"use client"

import { motion } from 'framer-motion'
import { CheckCircle, Users, Zap, Award, Target, Recycle } from 'lucide-react'

const Values = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality Excellence',
      description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.',
      points: ['Premium materials only', 'Extensive testing protocols', 'Continuous improvement'],
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Our success comes from the collective effort of our talented team working towards common goals.',
      points: ['Diverse perspectives', 'Open communication', 'Shared responsibility'],
    },
    {
      icon: Zap,
      title: 'Innovation Drive',
      description: 'We constantly push boundaries to develop cutting-edge solutions that solve real-world problems.',
      points: ['Research & development', 'Creative problem solving', 'Future-focused thinking'],
    },
    {
      icon: Award,
      title: 'Customer Success',
      description: 'Our customers\' success is our success. We go above and beyond to ensure satisfaction.',
      points: ['Responsive support', 'Customer feedback integration', 'Long-term partnerships'],
    },
    {
      icon: Target,
      title: 'Results Focused',
      description: 'We set clear goals and work systematically to achieve measurable outcomes.',
      points: ['Clear objectives', 'Data-driven decisions', 'Continuous monitoring'],
    },
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility in all aspects of our business.',
      points: ['Eco-friendly materials', 'Sustainable practices', 'Carbon footprint reduction'],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and drive our commitment 
            to excellence in everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {value.description}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {value.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (pointIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover effect border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Culture
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              At Tarkas, we've built a culture of innovation, collaboration, and excellence. 
              We believe that great products come from great people who are passionate about 
              what they do and committed to making a difference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Working together to achieve more than we could alone
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Constantly exploring new ways to improve and excel
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Committed to continuous learning and development
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Values