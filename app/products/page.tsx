"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ShoppingCart, Star } from 'lucide-react'

const productHighlights = [
  'Heavy-duty cable protection',
  'Interlocking design',
  'Slip-resistant surface',
  'Indoor and outdoor use',
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              Tarkas Product Collection
            </span>
            <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              Built to keep cables protected, organized, and safe.
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore our premium floor wire protector designed for clean setups,
              safer walkways, and long-lasting performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-700 p-10">
                <div className="w-full max-w-md rounded-[2rem] bg-slate-950/80 p-6 shadow-2xl">
                  <div className="h-10 rounded-xl bg-slate-700/80" />
                  <div className="mt-3 h-4 rounded bg-teal-500/80" />
                  <div className="mt-2 h-4 rounded bg-teal-500/60" />
                  <p className="mt-6 text-center text-sm font-medium text-slate-200">
                    Tarkas Premium Floor Wire Protector
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span>4.9 rating</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Premium Floor Wire Protector
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                A durable cable management solution for homes, offices, studios,
                and commercial spaces where safety and a neat finish matter.
              </p>

              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rs 1299
                </span>
                <span className="text-lg text-gray-500 line-through dark:text-gray-400">
                  Rs 1799
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  25% OFF
                </span>
              </div>

              <div className="mt-8 space-y-3">
                {productHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/product"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl"
                >
                  <ShoppingCart className="h-5 w-5" />
                  View Product
                </Link>
                <a
                  href="https://amzn.in/d/04gCn5rM"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent px-6 py-4 text-lg font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Buy on Amazon
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
