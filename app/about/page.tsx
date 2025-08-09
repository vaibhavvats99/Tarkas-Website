"use client"

import { motion } from 'framer-motion'
import CompanyStory from '@/components/about/CompanyStory'
import Mission from '@/components/about/Mission'
import TeamSection from '@/components/about/TeamSection'
import Timeline from '@/components/about/Timeline'
import Values from '@/components/about/Values'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <CompanyStory />
      <Mission />
      <Values />
      <Timeline />
      <TeamSection />
    </div>
  )
}