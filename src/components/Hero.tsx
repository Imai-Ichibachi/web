"use client";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.heading}>
            顧客の想いをカタチに。
            <br />
            <span className={styles.highlight}>売上につながる</span>
            集客支援
          </h1>
          <p className={styles.description}>
            月額15万円から始める、成果重視のSNS/広告運用。
            あなたのビジネスを深く理解し、
            最適なプランをオーダーメイドでご提案します。
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/contact" className={styles.buttonMain}>
              無料で相談する <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className={styles.visualArea}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.mockupContainer}>
            <Image
              src="/hero-new.png"
              alt="サービスイメージ"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
