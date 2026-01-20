"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./OpeningAnimation.module.css";

// Particle Colors (Red, Yellow, Blue, Green)
const COLORS = ["#ff5858", "#ffe358", "#58dbff", "#58ff5e"];

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function OpeningAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<
    "gather" | "circle" | "expand" | "fade" | "done"
  >("gather");
  const prefersReducedMotion = useReducedMotion();

  // Generate particles that cluster together
  const particleCount = 100;
  const [particles, setParticles] = useState<
    {
      id: number;
      startX: number;
      startY: number;
      endOffsetX: number;
      endOffsetY: number;
      color: string;
      size: number;
    }[]
  >([]);

  useIsomorphicLayoutEffect(() => {
    // Check sessionStorage - only show once per session
    // Cmd+Shift+R (hard refresh) clears sessionStorage, so animation will show
    try {
      const hasVisited = sessionStorage.getItem("visited");
      if (hasVisited) {
        setIsVisible(false);
        return;
      }
      sessionStorage.setItem("visited", "true");
    } catch (e) {
      console.error("Session storage access failed", e);
    }

    // Generate particles with random start positions and clustered end positions
    const newParticles = Array.from({ length: particleCount }).map((_, i) => {
      // Random position within cluster area (matching 400px circle)
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 200; // 0-200px radius (matches 400px circle)
      return {
        id: i,
        startX: (Math.random() - 0.5) * window.innerWidth * 1.5,
        startY: (Math.random() - 0.5) * window.innerHeight * 1.5,
        endOffsetX: Math.cos(angle) * distance,
        endOffsetY: Math.sin(angle) * distance,
        color: COLORS[i % COLORS.length],
        size: 20 + Math.random() * 25,
      };
    });
    setParticles(newParticles);

    // Sequence (slowed down)
    // 1. Gather particles into circle (0s - 1.5s)
    // 2. Transform to solid circle (1.5s - 2.5s)
    // 3. Expand circle with logo (2.5s - 4.5s)
    // 4. Fade out (4.5s - 5.5s)
    // 5. Exit (5.5s)

    const circleTimer = setTimeout(() => setPhase("circle"), 1500);
    const expandTimer = setTimeout(() => setPhase("expand"), 2500);
    const fadeTimer = setTimeout(() => setPhase("fade"), 4500);
    const exitTimer = setTimeout(() => {
      setPhase("done");
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(circleTimer);
      clearTimeout(expandTimer);
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  const handleSkip = () => {
    setIsVisible(false);
  };

  // If reduced motion is preferred, simple fade logic
  useEffect(() => {
    if (prefersReducedMotion) {
      const exit = setTimeout(() => setIsVisible(false), 1500);
      return () => clearTimeout(exit);
    }
  }, [prefersReducedMotion]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeOut" } }}
        >
          <button className={styles.skipButton} onClick={handleSkip}>
            SKIP
          </button>

          <div className={styles.content}>
            {/* Phase 1: Particles gathering into circle */}
            {phase === "gather" &&
              !prefersReducedMotion &&
              particles.map((p) => (
                <motion.div
                  key={p.id}
                  className={styles.particle}
                  style={{
                    color: p.color,
                    fontSize: `${p.size}px`,
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{
                    x: p.startX,
                    y: p.startY,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: p.endOffsetX,
                    y: p.endOffsetY,
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                >
                  %
                </motion.div>
              ))}

            {/* Phase 2: Circle of particles (brief hold) */}
            {phase === "circle" &&
              !prefersReducedMotion &&
              particles.map((p) => (
                <motion.div
                  key={p.id}
                  className={styles.particle}
                  style={{
                    color: p.color,
                    fontSize: `${p.size}px`,
                    left: "50%",
                    top: "50%",
                    x: p.endOffsetX,
                    y: p.endOffsetY,
                  }}
                  animate={{ scale: [1, 0.5], opacity: [1, 0] }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  %
                </motion.div>
              ))}

            {/* Solid circle that expands */}
            {(phase === "circle" || phase === "expand" || phase === "fade") && (
              <motion.div
                className={styles.expandingCircle}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: phase === "circle" ? 1 : 20,
                  opacity: phase === "fade" ? 0 : 1,
                }}
                transition={{
                  duration: phase === "fade" ? 1 : phase === "expand" ? 2 : 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            )}

            {/* Logo appears during expansion and fades out */}
            {(phase === "expand" || phase === "fade") && (
              <motion.div
                className={styles.logoContainer}
                animate={{ opacity: phase === "fade" ? 0 : 1 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: phase === "expand" ? 0.3 : 0,
                  }}
                >
                  <Image
                    src="/madeit_logo3.png"
                    alt="Madeit"
                    width={280}
                    height={80}
                    className={styles.logo}
                    priority
                  />
                </motion.div>

                <motion.p
                  className={styles.subCopy}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: phase === "expand" ? 0.6 : 0,
                    duration: 0.6,
                  }}
                >
                  売上につながる集客支援
                </motion.p>
              </motion.div>
            )}

            {/* Reduced motion fallback */}
            {prefersReducedMotion && (
              <div className={styles.logoContainer}>
                <Image
                  src="/madeit_logo3.png"
                  alt="Madeit"
                  width={280}
                  height={80}
                  className={styles.logo}
                  priority
                />
                <p className={styles.subCopy}>売上につながる集客支援</p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
