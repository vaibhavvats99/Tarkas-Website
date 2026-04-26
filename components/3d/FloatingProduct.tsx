"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const productImages = [
	"/transparent-Photoroom%20(3).png",
	"/transparent-Photoroom%20(4).png",
]

const FloatingProduct = () => {
	const [activeImageIndex, setActiveImageIndex] = useState(0)

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveImageIndex((currentIndex) => (currentIndex + 1) % productImages.length)
		}, 2000)

		return () => window.clearInterval(interval)
	}, [])

	return (
		<motion.div className="w-full h-full">
			<div className="relative flex h-[500px] w-full max-w-[700px] items-center justify-center">
				<div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-white/80 via-teal-50/70 to-amber-50/70 blur-3xl dark:from-teal-400/10 dark:via-cyan-300/10 dark:to-amber-300/10" />
				<div className="absolute inset-x-12 bottom-12 h-16 rounded-full bg-slate-900/10 blur-2xl dark:bg-black/40" />
				<motion.div
					animate={{ y: [0, -10, 0] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					className="relative z-10 px-6"
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={productImages[activeImageIndex]}
							initial={{ opacity: 0, scale: 0.96 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 1.02 }}
							transition={{ duration: 0.45, ease: "easeInOut" }}
						>
							<Image
								src={productImages[activeImageIndex]}
								alt="Product"
								width={700}
								height={500}
								className="h-auto w-full object-contain drop-shadow-[0_28px_40px_rgba(15,23,42,0.18)] dark:drop-shadow-[0_32px_52px_rgba(0,0,0,0.45)]"
								priority
							/>
						</motion.div>
					</AnimatePresence>
				</motion.div>
			</div>
			<a
				href="https://amzn.in/d/04gCn5rM"
				target="_blank"
				rel="noreferrer"
				className="btn-primary"
			>
				Buy Now
			</a>
		</motion.div>
	)
}

export default FloatingProduct
