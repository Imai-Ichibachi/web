"use client";
import styles from "./BackgroundDecorations.module.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ParallaxSymbolProps {
    className: string;
    rotate: number;
    speed: number;
}

function ParallaxSymbol({ className, rotate, speed }: ParallaxSymbolProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Create parallax effect: move element based on scroll position
    // We map 0-1000px scroll to different Y values based on speed
    // Negative speed moves up, positive moves down relative to scroll
    const yRange = useTransform(scrollY, [0, 1000], [0, speed * 100]);

    // Add spring physics for the "delayed" follow effect
    const y = useSpring(yRange, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{
                rotate,
                y,
                // Ensure we don't interfere with CSS positioning
                position: 'absolute'
            }}
        >
            %
        </motion.div>
    );
}

export default function BackgroundDecorations() {
    return (
        <div className={styles.container}>
            {/* Color Group 1 */}
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.blue} ${styles.pos1}`}
                rotate={-15}
                speed={-1.5}
            />
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.green} ${styles.pos4}`}
                rotate={-10}
                speed={0.5}
            />

            {/* Color Group 2 */}
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.red} ${styles.pos2}`}
                rotate={20}
                speed={-0.8}
            />
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.yellow} ${styles.pos5}`}
                rotate={15}
                speed={-1.2}
            />

            {/* Color Group 3 */}
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.blue} ${styles.pos3}`}
                rotate={45}
                speed={0.8}
            />
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.green} ${styles.pos6}`}
                rotate={-30}
                speed={-2}
            />
            <ParallaxSymbol
                className={`${styles.symbol} ${styles.red} ${styles.pos7}`}
                rotate={60}
                speed={1.5}
            />
        </div>
    );
}
