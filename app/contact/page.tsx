"use client"

import { motion } from 'framer-motion'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import MapSection from '@/components/contact/MapSection'
import FAQ from '@/components/contact/FAQ'

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our products or need assistance? We're here to help. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}