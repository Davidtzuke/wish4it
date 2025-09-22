"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function DottedBackground({ className, ...props }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const { theme } = useTheme();

  // Initialize the Three.js scene once
  useEffect(() => {
    if (!containerRef.current) return;

    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Use theme-appropriate fog color
    const fogColor = theme === "dark" ? 0x0a0d12 : 0xfafafa;
    scene.fog = new THREE.Fog(fogColor, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 0);
    containerRef.current.appendChild(renderer.domElement);

    const positions: number[] = [];
    const colors: number[] = [];
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        const y = 0;
        const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        positions.push(x, y, z);
        // Use theme-appropriate dot colors (normalized values)
        if (theme === "dark") {
          colors.push(180/255, 180/255, 180/255); // Light gray for dark theme
        } else {
          colors.push(60/255, 60/255, 60/255);    // Dark gray for light theme
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    pointsRef.current = points;
    scene.add(points);

    let count = 0;
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const idx = i * 3;
          arr[idx + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.008;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      try {
        scene.traverse((o) => {
          // @ts-ignore
          if (o.isPoints) {
            // @ts-ignore
            o.geometry?.dispose?.();
            // @ts-ignore
            o.material?.dispose?.();
          }
        });
        renderer.dispose();
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
      } catch {}
    };
  }, []); // Remove theme dependency to prevent recreation

  // Update colors and fog when theme changes
  useEffect(() => {
    if (!sceneRef.current || !pointsRef.current || !rendererRef.current) return;

    console.log('Theme changed to:', theme); // Debug log
    
    const scene = sceneRef.current;
    const points = pointsRef.current;
    const renderer = rendererRef.current;

    // Update fog color
    const fogColor = theme === "dark" ? 0x0a0d12 : 0xfafafa;
    scene.fog = new THREE.Fog(fogColor, 2000, 10000);
    renderer.setClearColor(scene.fog.color, 0);

    // Update dot colors
    const geometry = points.geometry;
    const colorAttr = geometry.getAttribute("color") as THREE.BufferAttribute;
    const colorArray = colorAttr.array as Float32Array;
    
    // Define better contrasting colors
    const darkThemeColor = { r: 180, g: 180, b: 180 }; // Light gray for dark theme
    const lightThemeColor = { r: 60, g: 60, b: 60 };   // Dark gray for light theme
    
    for (let i = 0; i < colorArray.length; i += 3) {
      if (theme === "dark") {
        colorArray[i] = darkThemeColor.r / 255;     // R (normalized)
        colorArray[i + 1] = darkThemeColor.g / 255; // G (normalized)
        colorArray[i + 2] = darkThemeColor.b / 255; // B (normalized)
      } else {
        colorArray[i] = lightThemeColor.r / 255;     // R (normalized)
        colorArray[i + 1] = lightThemeColor.g / 255; // G (normalized)
        colorArray[i + 2] = lightThemeColor.b / 255; // B (normalized)
      }
    }
    colorAttr.needsUpdate = true;
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={["pointer-events-none fixed inset-0 -z-10", className].join(" ")}
      {...props}
    />
  );
}
