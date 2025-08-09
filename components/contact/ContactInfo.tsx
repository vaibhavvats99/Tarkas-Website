"use client"

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Headphones } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      details: 'tarkasindia@gmail.com',
      action: 'mailto:tarkasindia@gmail.com',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm EST',
      details: '7678541811',
      action: 'tel:+91 7678541911',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      details: 'Available 24/7',
      action: '#',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: Headphones,
      title: 'Support Center',
      description: 'Find answers to common questions',
      details: 'Help & Documentation',
      action: '#',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Choose your preferred way to get in touch with us. We're here to help!
        </p>

        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {method.description}
                  </p>
                  <p className="text-accent font-medium">
                    {method.details}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-accent/10 rounded-xl">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Office Hours
          </h3>
        </div>

        <div className="space-y-3">
          {officeHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                {schedule.day}
              </span>
              <span className="text-gray-900 dark:text-white font-semibold">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Office Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-accent/10 rounded-xl">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Our Location
          </h3>
        </div>

        <div className="space-y-3">
          <p className="text-gray-900 dark:text-white font-semibold">
            Tarkas Headquarters
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Pitampura, New Delhi<br />
            
          </p>
        </div>
      </motion.div>

      {/* Response Time */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-accent/10 to-primary-400/10 p-8 rounded-2xl"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          What to Expect
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> We respond within 2-4 business hours
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Phone:</strong> Immediate assistance during business hours
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Live Chat:</strong> Real-time support 24/7
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo