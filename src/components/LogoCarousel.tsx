"use client";
import styles from "./LogoCarousel.module.css";
import Image from "next/image";

const LOGOS = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
  "/images/logos/logo10.png",
];

export default function LogoCarousel() {
  return (
    <section className={styles.section}>
      <p className={styles.title}>導入企業・取引実績</p>
      <div className={styles.carousel}>
        {/* Original set */}
        <div className={styles.slide}>
          {LOGOS.map((src, index) => (
            <Image
              key={`logo-${index}`}
              src={src}
              alt={`Client Logo ${index + 1}`}
              width={220}
              height={100}
              className={styles.logoImg}
            />
          ))}
        </div>
        {/* Duplicate set for infinite scroll */}
        <div className={styles.slide}>
          {LOGOS.map((src, index) => (
            <Image
              key={`logo-dup-${index}`}
              src={src}
              alt={`Client Logo ${index + 1}`}
              width={220}
              height={100}
              className={styles.logoImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
