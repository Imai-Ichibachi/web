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

    const count = 8;
    const newSymbols: FloatingSymbolData[] = [];

    // Fixed X positions across full screen width
    const xPositions = [10, 25, 40, 55, 70, 85, 15, 75];

    for (let i = 0; i < count; i++) {
      const depth = 0.3 + i * 0.1; // Consistent depth progression

      const x = xPositions[i % xPositions.length];

      newSymbols.push({
        id: i,
        x: x,
        initialY: 100 + i * 300, // Spread out vertically (300px apart)
        size: 80 + (i % 3) * 40, // Varied sizes: 80, 120, 160
        rotation: (i * 45) % 360,
        color: colors[i % 4],
        number: 30 + i * 10,
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
