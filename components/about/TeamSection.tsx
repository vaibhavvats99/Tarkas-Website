"use client"

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Indervir',
      role: 'CEO & Founder',
      bio: 'Former engineer with 10+ years in industrial equipment design. Passionate about workplace safety innovation.',
      avatar: '👨‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@tarkas.com',
      },
    },
    {
      name: 'Vaibhav',
      role: 'CTO & Co-Founder',
      bio: 'Materials science expert with a PhD from MIT. Leads our product development and innovation initiatives.',
      avatar: '👨',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@tarkas.com',
      },
    },
    {
      name: 'Deepanshu',
      role: 'VP of Operations',
      bio: 'Operations specialist with extensive experience in manufacturing and supply chain optimization.',
      avatar: '👨‍🔧',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mike@tarkas.com',
      },
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
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind Tarkas who work tirelessly to create innovative 
            solutions and deliver exceptional experiences for our customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary-400 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-accent font-semibold">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors group"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href={member.social.twitter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-400 transition-colors group"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-accent/10 hover:text-accent transition-colors group"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Team
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals who share our passion for innovation 
              and commitment to excellence. If you're interested in making a difference in 
              workplace safety, we'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Send Your Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection