"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw, Check } from 'lucide-react'
import { productVariants, type ProductColor, type ProductVariant } from '@/components/product/productData'

type ProductInfoProps = {
  selectedVariant: ProductVariant
  selectedColor: ProductColor
  selectedVariantId: string
  selectedColorId: string
  onVariantChange: (variantId: string) => void
  onColorChange: (colorId: string) => void
}

const ProductInfo = ({
  selectedVariant,
  selectedColor,
  selectedVariantId,
  selectedColorId,
  onVariantChange,
  onColorChange,
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)

  const features = [
    { icon: Shield, text: 'Premium Protection' },
    { icon: Truck, text: 'Heavy-Duty' },
    { icon: RotateCcw, text: 'Interlocking Designs' },
    { icon: Check, text: 'Slip-Resistant' },
  ]

  const savings = selectedVariant.originalPrice - selectedVariant.price
  const savingsPercent = Math.round((savings / selectedVariant.originalPrice) * 100)

  const updateQuantity = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  return (
    <div className="product-info">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Product Title & Rating */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full">
                In Stock
              </span>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                type="button"
                aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
                className={`p-2 rounded-full transition-colors ${
                  isFavorited 
                    ? 'bg-red-100 text-red-500' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500'
                }`}
              >
                <Heart className={isFavorited ? 'fill-current' : ''} size={20} />
              </button>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tarkas Premium Floor Wire Protector
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">4.9 (127 reviews)</span>
            </div>
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="flex items-baseline space-x-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                Rs{selectedVariant.price}
              </span>
              <span className="text-xl text-gray-500 dark:text-gray-400 line-through">
                Rs{selectedVariant.originalPrice}
              </span>
              <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-semibold rounded-full">
                Save {savingsPercent}%
              </span>
            </div>
            <p className="text-green-600 dark:text-green-400 font-medium">
              You save Rs {savings.toFixed(2)}
            </p>
          </motion.div>
        </div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Protect your cables and prevent tripping hazards with our premium floor wire protector. 
            Designed for indoor and outdoor purposes, this durable solution keeps your workspace safe and organized 
            while maintaining a professional appearance.
          </p>
        </motion.div>

        {/* Variant Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Choose Variant
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {productVariants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                onClick={() => onVariantChange(variant.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selectedVariantId === variant.id
                    ? 'border-accent bg-accent/5'
                    : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {variant.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Rs{variant.price} (was Rs{variant.originalPrice})
                    </div>
                  </div>
                  {selectedVariantId === variant.id && (
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Color Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Choose Color
            </h3>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {selectedColor.name}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {selectedVariant.colors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => onColorChange(color.id)}
                className={`flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-sm font-semibold transition-all ${
                  selectedColorId === color.id
                    ? 'border-accent bg-accent/5 text-accent shadow-sm'
                    : 'border-gray-200 text-gray-700 hover:border-accent/50 dark:border-gray-700 dark:text-gray-300'
                }`}
              >
                <span
                  className="h-8 w-8 rounded-full border border-gray-300 shadow-inner dark:border-gray-600"
                  style={{ background: color.swatch }}
                />
                <span className="text-center leading-tight">{color.name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Quantity & Add to Cart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Quantity:
            </span>
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
              <button
                type="button"
                onClick={() => updateQuantity(-1)}
                className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(1)}
                className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart - Rs {(selectedVariant.price * quantity).toFixed(2)}</span>
            </motion.button>
            
            <motion.a
              href={selectedColor.amazonUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full border-2 border-accent text-accent hover:bg-accent hover:text-white py-4 rounded-xl font-semibold text-lg text-center transition-all duration-300"
            >
              Buy Now
            </motion.a>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <feature.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <span className="text-gray-600 dark:text-gray-400">Share:</span>
          <button type="button" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <Share2 size={18} />
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProductInfo
