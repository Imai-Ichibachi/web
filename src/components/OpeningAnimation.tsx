"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./OpeningAnimation.module.css";

// Particle Colors (Red, Yellow, Blue, Green)
const COLORS = ["#ff5858", "#ffe358", "#58dbff", "#58ff5e"];

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function OpeningAnimation() {
    const [isVisible, setIsVisible] = useState(true);
    const [showLogo, setShowLogo] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    // Generate random particles
    const particleCount = 20;
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string; size: number }[]>([]);

    // Check session storage to prevent re-running animation
    useIsomorphicLayoutEffect(() => {
        try {
            const hasVisited = sessionStorage.getItem("visited");
            if (hasVisited) {
                setIsVisible(false);
                return;
            }

            // Mark as visited
            sessionStorage.setItem("visited", "true");
        } catch (e) {
            console.error("Session storage access failed", e);
        }

        setParticles(
            Array.from({ length: particleCount }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                size: Math.random() * 40 + 40,
            }))
        );

        // Sequence
        // 1. Gather particles (0s - 1.2s)
        // 2. Switch to Logo (1.2s)
        // 3. Fade in Text (1.4s - 2.2s)
        // 4. Exit (3.0s)

        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 1200);

        const exitTimer = setTimeout(() => {
            setIsVisible(false);
        }, 3200);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(exitTimer);
        };
    }, []);

    const handleSkip = () => {
        setIsVisible(false);
    };

    // If reduced motion is preferred, simple fade logic
    useEffect(() => {
        if (prefersReducedMotion) {
            const exit = setTimeout(() => setIsVisible(false), 2000); // Shorter duration
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
                    exit={{ y: "-100%", opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <button className={styles.skipButton} onClick={handleSkip}>SKIP</button>

                    <div className={styles.content}>
                        {/* Particles -> Logo Transition */}
                        {!showLogo && !prefersReducedMotion && particles.map((p) => (
                            <motion.div
                                key={p.id}
                                className={styles.particle}
                                style={{
                                    color: p.color,
                                    fontSize: `${p.size}px`,
                                    left: `${p.x}%`,
                                    top: `${p.y}%`,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [0, 1, 1],
                                    scale: [0.5, 1, 0.2], // Scale down at end as they converge
                                    left: "50%",
                                    top: "50%",
                                    x: "-50%", // Center align
                                    y: "-50%"
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: "easeOut",
                                    times: [0, 0.2, 1] // Fade in quickly, move to center
                                }}
                            >
                                %
                            </motion.div>
                        ))}

                        {/* Official Logo */}
                        {(showLogo || prefersReducedMotion) && (
                            <div className={styles.logoContainer}>
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                        duration: 0.4
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
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.8 }}
                                >
                                    売上につながる集客支援
                                </motion.p>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
