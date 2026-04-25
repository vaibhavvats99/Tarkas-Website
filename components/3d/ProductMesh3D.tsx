"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

const ProductMesh3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Image
          src="/61hACD4D8sL.jpg"
          alt="Product"
          width={500}
          height={500}
          className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

export default ProductMesh3D