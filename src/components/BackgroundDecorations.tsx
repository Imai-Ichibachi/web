"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import styles from "./BackgroundDecorations.module.css";

interface FloatingSymbolData {
  id: number;
  x: number; // Horizontal position %
  initialY: number; // Initial Vertical Pixel Offset
  size: number;
  rotation: number;
  color: "red" | "yellow" | "blue" | "green";
  number: number;
  depth: number; // 0.1 to 1.5
}

const colors: ("red" | "yellow" | "green" | "blue")[] = [
  "red",
  "yellow",
  "green",
  "blue",
];

function ParallaxSymbol({
  data,
  scrollY,
  winHeight,
}: {
  data: FloatingSymbolData;
  scrollY: MotionValue<number>;
  winHeight: number;
}) {
  const speed = data.depth * 0.5; // Faster speed

  const yRaw = useTransform(scrollY, (v) => {
    // Simple upward movement - no looping
    const scrollOffset = v * speed;
    const pos = data.initialY - scrollOffset;
    return pos;
  });

  // Smooth out the movement
  const y = useSpring(yRaw, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  return (
    <motion.div
      className={`${styles.symbol} ${styles[data.color]}`}
      style={{
        left: `${data.x}%`,
        // Start from top 0 relative to container, y handles the position
        top: 0,
        fontSize: `${data.size}px`,
        rotate: data.rotation,
        y: y,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {data.number}%
    </motion.div>
  );
}

export default function BackgroundDecorations() {
  const [symbols, setSymbols] = useState<FloatingSymbolData[]>([]);
  const { scrollY } = useScroll();
  const [winHeight, setWinHeight] = useState(1000); // Default/Server height

  useEffect(() => {
    // Client-side execution
    setWinHeight(window.innerHeight);

    // Increase total count for higher density at top
    const count = 30;
    const newSymbols: FloatingSymbolData[] = [];

    // Limit where symbols stop appearing (pixel value)
    // Approximate: Hero(800) + Logo(100) + Problems(800) + About(800) + ServiceIntro(800) + Features(Start)
    // We want them to fade out/stop by Features section.
    // Let's concentrate them in the first 2500px, heavily weighted to 0-1000px.

    // Custom probability distribution: heavy at top, scarce at bottom

    for (let i = 0; i < count; i++) {
      // Weighted random Y: 
      // Using a power function to bias towards 0. 
      // Math.pow(Math.random(), 2) gives more small numbers (top heavy).
      const r = Math.pow(Math.random(), 2);
      const yPos = r * 3000 + 100; // Spread over 100px to 3100px

      // Skip if too far down (security measure if logic matches "Features" start approx)
      if (yPos > 3200) continue;

      // Enforce alternating sides for balance
      const isLeft = i % 2 === 0;

      // Generate x within 2-20% (Left) or 78-98% (Right)
      const x = isLeft
        ? Math.random() * 18 + 2   // 2% to 20%
        : Math.random() * 20 + 78; // 78% to 98%

      newSymbols.push({
        id: i,
        x: x,
        initialY: yPos,
        size: 60 + Math.random() * 120, // Random size 60-180
        rotation: Math.random() * 360,
        color: colors[i % 4],
        number: 10 + Math.floor(Math.random() * 90), // Random % number
        depth: 0.2 + Math.random() * 0.6, // Random depth
      });
    }

    // Sort by Y so they render in somewhat order (optional but nice)
    newSymbols.sort((a, b) => a.initialY - b.initialY);

    setSymbols(newSymbols);

    // Handle resize
    const handleResize = () => setWinHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {symbols.map((symbol) => (
        <ParallaxSymbol
          key={symbol.id}
          data={symbol}
          scrollY={scrollY}
          winHeight={winHeight}
        />
      ))}
    </div>
  );
}
