"use client"

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Indervir',
      role: 'Office Manager',
      company: 'TekyCorp',
      content: 'These wire protectors are exactly what we needed for our office. Easy to install and they look professional. Highly recommend!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Vaibhav',
      role: 'Student',
      company: 'NST',
      content: 'Perfect for our events. They protect our equipment cables and prevent tripping hazards. Quality is outstanding.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Deepanshu',
      role: 'Facility Manager',
      company: 'RetailMax',
      content: 'We use these throughout our retail locations. Durable, safe, and they maintain the clean look of our spaces.',
      rating: 5,
      avatar: '👩‍🔧',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about 
            their experience with Tarkas floor wire protectors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
            >
              {/* Background Quote */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/10" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-400 rounded-full flex items-center justify-center text-white text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center space-y-6"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary-400/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Join thousands of satisfied customers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Experience the quality and reliability that makes Tarkas the trusted choice 
              for cable protection solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials