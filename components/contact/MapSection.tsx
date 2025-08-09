"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Navigation } from 'lucide-react'

const MapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
              {/* Map placeholder with interactive elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm">
                    Pitampura,<br />
                    New Delhi<br />

                  </p>
                </div>
              </div>

              {/* Map Marker */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Navigation className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              {/* Interactive overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 cursor-pointer group">
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Open in Maps</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Address
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Pitampura</p>
                <p>New Delhi</p>
             
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Parking
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    Free visitor parking available
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    Handicap accessible
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    Electric vehicle charging
                  </span>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Transportation
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Metro Station</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Innovation Center (0.3 mi)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Bus Stop</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Business Ave & 5th St (0.1 mi)</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">Airport</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">City Airport (45 min drive)</p>
                </div>
              </div>
            </div>

            {/* Visit CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-accent to-primary-400 p-6 rounded-2xl text-white"
            >
              <h3 className="text-lg font-bold mb-2">Schedule a Visit</h3>
              <p className="text-sm opacity-90 mb-4">
                Want to see our products in person? Schedule a visit to our showroom.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MapSection