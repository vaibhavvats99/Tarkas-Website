"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, RotateCcw } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import ProductMesh3D from '@/components/3d/ProductMesh3D'

const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [view3D, setView3D] = useState(false)

  // Placeholder images - replace with real product images
  const images = [
    {
      id: 1,
      src: '/product images/main Photoroom-Photoroom (2).png',
      alt: 'Tarkas Floor Wire Protector - Main View',
      placeholder: '🔧',
      color: 'bg-gray-800',
    },
    {
      id: 2,
      src: '/product images/Complete Packaging V2 (3) copy.png',
      alt: 'Tarkas Floor Wire Protector - Side View',
      placeholder: '📐',
      color: 'bg-gray-700',
    },
    {
      id: 3,
      src: '/product images/IMG20250131192310-Photoroom.jpg',
      alt: 'Tarkas Floor Wire Protector - Installation',
      placeholder: '⚙️',
      color: 'bg-gray-600',
    },
    {
      id: 4,
      src: '/product images/Zoom In Image (3).png',
      alt: 'Tarkas Floor Wire Protector - In Use',
      placeholder: '✅',
      color: 'bg-gray-500',
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image/3D Viewer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden group"
      >
        <AnimatePresence mode="wait">
          {view3D ? (
            <motion.div
              key="3d-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} color="#ff9900" intensity={0.5} />
                <ProductMesh3D />
              </Canvas>
            </motion.div>
          ) : (
            <motion.div
              key={`image-${currentImage}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`w-full h-full flex items-center justify-center ${images[currentImage].color}`}
            >
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="max-w-full max-h-full object-contain mx-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Navigation */}
        {!view3D && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-gray-700"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setView3D(!view3D)}
            className={`p-3 rounded-full shadow-lg transition-colors ${
              view3D 
                ? 'bg-accent text-white' 
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300'
            }`}
            title={view3D ? 'Show Images' : 'View in 3D'}
          >
            <RotateCcw size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsModalOpen(true)}
            className="p-3 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            title="Fullscreen"
          >
            <Maximize2 size={20} />
          </motion.button>
        </div>

        {/* Image Indicator */}
        {!view3D && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage
                    ? 'bg-accent w-6'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setCurrentImage(index)
              setView3D(false)
            }}
            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              index === currentImage && !view3D
                ? 'border-accent shadow-lg'
                : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
            }`}
          >
            <div className={`w-full h-full flex items-center justify-center ${image.color}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-full object-contain mx-auto"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* 3D View Toggle */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setView3D(!view3D)}
        className={`w-full py-3 rounded-xl font-semibold transition-all ${
          view3D
            ? 'bg-accent text-white shadow-lg'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {view3D ? 'View Photos' : 'View in 3D'}
      </motion.button>

      {/* Modal would go here for fullscreen view */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content */}
              <div className={`w-full h-full flex items-center justify-center ${images[currentImage].color}`}>
                <img
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  className="max-w-full max-h-full object-contain mx-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductGallery