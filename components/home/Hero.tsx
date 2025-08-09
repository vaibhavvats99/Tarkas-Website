"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import FloatingProduct from '@/components/3d/FloatingProduct'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255,153,0)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 120, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Protect Your Wires,{' '}
                <span className="gradient-text">Protect Your Space</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Premium quality floor wire protectors designed for safety, durability, and style. 
                Keep your cables organized and your space hazard-free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:bg-white/30 transition-all duration-300"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">5K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">4.6★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Product Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <FloatingProduct />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg glass"
            >
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Premium Quality</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Durable & Safe</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg glass"
            >
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Easy Installation</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">No Tools Required</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero