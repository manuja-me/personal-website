"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: {
      time: { type: string; value: number }
      resolution: { type: string; value: THREE.Vector2 }
      isDark: { type: string; value: number }
    }
    animationId: number
  } | null>(null)

  // Update theme uniform when resolvedTheme changes
  useEffect(() => {
    if (sceneRef.current?.uniforms) {
      sceneRef.current.uniforms.isDark.value = resolvedTheme === "dark" ? 1.0 : 0.0
    }
  }, [resolvedTheme])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float isDark;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;
        float lineWidth = 0.0025;

        float intensity = 0.0;
        for(int j = 0; j < 3; j++){
          for(int i = 0; i < 5; i++){
            intensity += lineWidth * float(i * i) / (abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2)) + 0.001);
          }
        }

        intensity = clamp(intensity * 0.35, 0.0, 1.0);

        vec3 darkBg = vec3(0.02, 0.025, 0.02);
        vec3 darkLine = vec3(0.15, 0.9, 0.45);

        vec3 lightBg = vec3(0.99, 1.0, 0.99);
        vec3 lightLine = vec3(0.06, 0.65, 0.32);

        vec3 currentBg = mix(lightBg, darkBg, isDark);
        vec3 currentLine = mix(lightLine, darkLine, isDark);

        vec3 color = mix(currentBg, currentLine, intensity);

        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      isDark: { type: "f", value: 1.0 },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    container.appendChild(renderer.domElement)

    // Handle window resize
    const onWindowResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    // Initial resize
    onWindowResize()
    window.addEventListener("resize", onWindowResize, false)

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    // Store scene references for cleanup
    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    // Start animation
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onWindowResize)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-background overflow-hidden"
    />
  )
}
