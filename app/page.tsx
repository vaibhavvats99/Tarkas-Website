"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import ProductShowcase from '@/components/home/ProductShowcase'
import Testimonials from '@/components/home/Testimonials'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ProductShowcase />
      <Testimonials />
    </div>
  )
}