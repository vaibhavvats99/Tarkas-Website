"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const team = [
	{
		name: "Deepak",
		role: "Founder",
		icon: "👨🏻‍💻",
	},
	// ...
]

const reviews = [
	{
		name: "Deepak",
		role: "Office Manager",
		icon: "👨🏻‍💻",
		verified: true,
		comment: "Clean professional look...",
	},
	// ...
]

const FloatingProduct = () => {
	return (
		<motion.div className="w-full h-full">
			<div className="text-5xl">👨🏻‍💻</div>
			<div className="relative w-full max-w-[700px] h-[500px] flex items-center justify-center">
				<motion.div
					animate={{ y: [0, -10, 0] }}
					transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					className="relative"
				>
					<Image
						src="/61hACD4D8sL.jpg"
						alt="Product"
						width={700}
						height={500}
						className="w-full h-auto object-contain rounded-3xl shadow-2xl"
						priority
					/>
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
			<span className="text-2xl">👨🏻‍💻</span>
		</motion.div>
	)
}

export default FloatingProduct