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
  // Infinite Loop Logic:
  // Calculate position based on scrollY.
  // Move UP when scrolling DOWN (negative direction).
  // Wrap around window height (+ buffer) to reappear from bottom.

  const loopHeight = winHeight + 200; // Loop area (screen + buffer)
  const speed = data.depth * 0.5; // Speed factor

  const yRaw = useTransform(scrollY, (v) => {
    // Current scroll position offset by speed
    const scrollOffset = v * speed;
    // Calculate relative position based on initial Y and scroll
    // (initialY - scrollOffset) makes it move UP.
    let pos = (data.initialY - scrollOffset) % loopHeight;

    // Handle wrap-around
    if (pos < -150) {
      // If slightly above screen
      pos += loopHeight;
    } else if (pos > loopHeight - 150) {
      pos -= loopHeight;
    }
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
      animate={{ opacity: 0.4 }}
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

    const count = 8; // Reduced count significantly for sparsity
    const newSymbols: FloatingSymbolData[] = [];

    // Use a fixed loop height larger than typical screen height for distribution
    // Or just use window.innerHeight.
    // We generate initial positions randomly within 0 to window.innerHeight * 1.5
    const distributionHeight = window.innerHeight + 200;

    for (let i = 0; i < count; i++) {
      const depth = Math.random() * 1.0 + 0.2; // 0.2 to 1.2

      // Side positioning: 0-20% OR 80-100%
      const isLeft = Math.random() < 0.5;
      const x = isLeft
        ? Math.random() * 20 // 0 - 20%
        : Math.random() * 20 + 80; // 80 - 100%

      newSymbols.push({
        id: i,
        x: x,
        initialY: Math.random() * distributionHeight, // Random start pixel Y
        size: Math.random() * 150 + 50,
        rotation: Math.random() * 360,
        color: colors[i % 4],
        number: Math.floor(Math.random() * 71) + 30,
        depth,
      });
    }
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
