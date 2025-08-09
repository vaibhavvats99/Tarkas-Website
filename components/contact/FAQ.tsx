"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What materials are Tarkas wire protectors made from?',
      answer: 'Our wire protectors are made from high-quality ABS material that is strong, impact-resistant, and highly durable. The material offers excellent heat resistance, maintains structural integrity under pressure, and is suitable for both indoor and outdoor use. It also resists chemicals, moisture, and general wear, ensuring long-lasting performance.',
    },
    {
      question: 'How much weight can the wire protectors support?',
      answer: 'Our standard wire protectors can support up to 400 kgs per linear foot. For heavier applications, we offer heavy-duty models that can handle even greater loads. The weight capacity varies by model, so please check the specifications for your specific needs.',
    },
    {
      question: 'Do you offer bulk pricing for large orders?',
      answer: 'Yes, we offer competitive bulk pricing for orders over 50 units. For wholesale and bulk orders, please contact our sales team directly at tarkasindia@gmail.com or call +91 7678541911 for a custom quote.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day replacement policy for products with a valid problem. If your item is found to be defective or damaged, we will provide a replacement. Custom orders may have different replacement terms.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Most orders ship within 48 hours and arrive within 4-6 business days via standard shipping. Express shipping options are available for faster delivery. International shipping times vary by location.',
    },
    {
      question: 'Do you provide installation support?',
      answer: 'Our wire protectors are designed for easy installation without tools. However, we provide detailed installation guides and video tutorials. For large commercial installations, we can connect you with certified installers in your area.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'Tarkas products do not come with a warranty. We only offer replacements under certain conditions, such as valid manufacturing defects or damage during delivery. Normal wear and tear is not covered.',
    },
    {
      question: 'Can wire protectors be used outdoors?',
      answer: 'Yes, our wire protectors are Heavy-Duty and weather-resistant, making them suitable for outdoor use. They can withstand rain, snow, and extreme temperatures while maintaining their protective properties.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our products, shipping, and support.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary-400/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Browse Help Center
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ