"use client"

import { motion } from 'framer-motion'
import { Star, ThumbsUp, Verified } from 'lucide-react'

const ProductReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Indervir',
      role: 'IT Manager',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      content: 'Excellent quality and very easy to install. We use these throughout our office building and they\'ve held up perfectly even with heavy foot traffic. The cable channels keep everything organized.',
      helpful: 24,
      avatar: '👨‍💻',
    },
    {
      id: 2,
      name: 'Vaibhav',
      role: 'Student',
      rating: 5,
      date: '1 month ago',
      verified: true,
      content: 'Perfect for our outdoor events. Weather resistant and the non-slip covers keeps them in place even in high footfall area. Great investment for our equipment safety.',
      helpful: 18,
      avatar: '👩‍🎨',
    },
    {
      id: 3,
      name: 'Deepanshu',
      role: 'Graduate Student',
      rating: 4,
      date: '1 month ago',
      verified: true,
      content: 'Heavy duty construction that can handle our forklift traffic. Only minor complaint is that they could be a bit longer, but overall very satisfied with the quality.',
      helpful: 15,
      avatar: '👨‍🔧',
    },
    {
      id: 4,
      name: 'Deepak',
      role: 'Office Manager',
      rating: 5,
      date: '2 months ago',
      verified: true,
      content: 'Clean professional look that doesn\'t detract from our office aesthetics. Easy to remove and reposition when we need to change our setup. Highly recommend!',
      helpful: 22,
      avatar: '👩‍💼',
    }
  ]

  const ratingBreakdown = [
    { stars: 5, percentage: 75, count: 95 },
    { stars: 4, percentage: 20, count: 25 },
    { stars: 3, percentage: 3, count: 4 },
    { stars: 2, percentage: 1, count: 2 },
    { stars: 1, percentage: 1, count: 1 },
  ]

  const averageRating = 4.9
  const totalReviews = 127

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Customer <span className="gradient-text">Reviews</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          See what our customers have to say about their experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {averageRating}
              </div>
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Based on {totalReviews} reviews
              </p>
            </div>

            <div className="space-y-3">
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 w-12">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.stars}
                    </span>
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 bg-accent hover:bg-accent/90 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              Write a Review
            </motion.button>
          </div>
        </motion.div>

        {/* Review List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-400 rounded-full flex items-center justify-center text-white text-xl">
                  {review.avatar}
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                            <Verified className="w-4 h-4" />
                            <span className="text-xs font-medium">Verified</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {review.role} • {review.date}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {review.content}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                    <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">
                        Helpful ({review.helpful})
                      </span>
                    </button>
                    
                    <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-6"
          >
            <button className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-xl font-semibold transition-all duration-300">
              Load More Reviews
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductReviews