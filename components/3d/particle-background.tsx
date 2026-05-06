"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const particlesCount = 360
  const positions = new Float32Array(particlesCount * 3)

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#38bdf8" size={0.035} sizeAttenuation depthWrite={false} />
    </Points>
  )
}

function FallbackParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/40 opacity-70 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function ParticleBackground() {
  const [supported, setSupported] = useState(true)
  const [canvasError, setCanvasError] = useState(false)

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (!gl) {
        setSupported(false)
      }
    } catch {
      setSupported(false)
    }
  }, [])

  const handleCanvasError = () => {
    setCanvasError(true)
    setSupported(false)
  }

  if (!supported || canvasError) {
    return <FallbackParticles />
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 75 }}
      style={{ background: "transparent" }}
      onError={handleCanvasError}
      gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ParticleField />
    </Canvas>
  )
}
