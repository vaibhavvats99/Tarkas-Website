"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductSpecs from '@/components/product/ProductSpecs'
import RelatedProducts from '@/components/product/RelatedProducts'
import ProductReviews from '@/components/product/ProductReviews'
import { defaultProductSelection, productVariants } from '@/components/product/productData'

export default function ProductPage() {
  const [selectedVariantId, setSelectedVariantId] = useState(defaultProductSelection.variantId)
  const [selectedColorId, setSelectedColorId] = useState(defaultProductSelection.colorId)

  const selectedVariant =
    productVariants.find((variant) => variant.id === selectedVariantId) || productVariants[0]
  const selectedColor =
    selectedVariant.colors.find((color) => color.id === selectedColorId) || selectedVariant.colors[0]

  const handleVariantChange = (variantId: string) => {
    const nextVariant = productVariants.find((variant) => variant.id === variantId)

    if (!nextVariant) {
      return
    }

    setSelectedVariantId(nextVariant.id)
    setSelectedColorId(nextVariant.colors[0].id)
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ProductGallery selectedVariant={selectedVariant} selectedColor={selectedColor} />
          <ProductInfo
            selectedVariant={selectedVariant}
            selectedColor={selectedColor}
            selectedVariantId={selectedVariantId}
            selectedColorId={selectedColor.id}
            onVariantChange={handleVariantChange}
            onColorChange={setSelectedColorId}
          />
        </div>

        {/* Product Specifications */}
        <ProductSpecs />

        {/* Customer Reviews */}
        <ProductReviews />

        {/* Related Products */}
        <RelatedProducts />
      </div>
    </div>
  )
}
