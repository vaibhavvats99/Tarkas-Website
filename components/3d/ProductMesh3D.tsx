"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ProductMesh3D = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main body of the wire protector */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.4, 1.2]} />
        <meshStandardMaterial
          color="#2a2a2a"
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Wire channels - orange/accent colored */}
      <mesh position={[0, 0.2, -0.3]} castShadow>
        <boxGeometry args={[3.8, 0.15, 0.25]} />
        <meshStandardMaterial
          color="#ff9900"
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[3.8, 0.15, 0.25]} />
        <meshStandardMaterial
          color="#ff9900"
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0, 0.2, 0.3]} castShadow>
        <boxGeometry args={[3.8, 0.15, 0.25]} />
        <meshStandardMaterial
          color="#ff9900"
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>

      {/* Side caps for finished look */}
      <mesh position={[-2, 0.1, 0]} castShadow>
        <boxGeometry args={[0.1, 0.3, 1.2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      
      <mesh position={[2, 0.1, 0]} castShadow>
        <boxGeometry args={[0.1, 0.3, 1.2]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Non-slip bottom texture simulation */}
      <mesh position={[0, -0.21, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.8, 1]} />
        <meshStandardMaterial
          color="#333333"
          roughness={0.8}
          metalness={0.1}
          normalScale={new THREE.Vector2(0.5, 0.5)}
        />
      </mesh>

      {/* Subtle brand marking */}
      <mesh position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1, 0.2]} />
        <meshStandardMaterial
          color="#ff9900"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.6}
        />
      </mesh>
    </group>
  )
}

export default ProductMesh3D