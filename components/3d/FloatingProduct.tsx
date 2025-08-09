"use client"

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Simple 3D Box representing the wire protector
function ProductMesh() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      <boxGeometry args={[4, 0.3, 1]} />
      <meshStandardMaterial
        color={hovered ? "#ff9900" : "#333333"}
        metalness={0.5}
        roughness={0.2}
      />
      
      {/* Wire channels */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[3.8, 0.1, 0.3]} />
        <meshStandardMaterial color="#ff9900" metalness={0.3} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.15, -0.35]}>
        <boxGeometry args={[3.8, 0.1, 0.3]} />
        <meshStandardMaterial color="#ff9900" metalness={0.3} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.15, 0.35]}>
        <boxGeometry args={[3.8, 0.1, 0.3]} />
        <meshStandardMaterial color="#ff9900" metalness={0.3} roughness={0.1} />
      </mesh>
    </mesh>
  )
}

// Floating particles around the product
function Particles() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  const particlePositions = new Float32Array(50 * 3)
  for (let i = 0; i < 50; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 10
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 10
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002
      particlesRef.current.rotation.x += 0.001
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={50}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ff9900" transparent opacity={0.6} />
    </points>
  )
}

const FloatingProduct = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full"
    >
      <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#ff9900" intensity={0.5} />
        
        {/* 3D Objects */}
        <ProductMesh />
        <Particles />
        
        {/* Floor reflection */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            roughness={0}
            metalness={0.1}
          />
        </mesh>
      </Canvas>
    </motion.div>
  )
}

export default FloatingProduct