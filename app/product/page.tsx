"use client"

import { motion } from 'framer-motion'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductSpecs from '@/components/product/ProductSpecs'
import RelatedProducts from '@/components/product/RelatedProducts'
import ProductReviews from '@/components/product/ProductReviews'

export default function ProductPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <ProductGallery />
          <ProductInfo />
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