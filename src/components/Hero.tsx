"use client";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.heading}>
                    顧客の想いをカタチに。<br />
                    <span className={styles.highlight}>売上につながる</span>
                    集客支援
                </h1>
                <p className={styles.description}>
                    月額15万円から始める、成果重視のSNS/広告運用。<br />
                    あなたのビジネスを深く理解し、<br />
                    最適なプランをオーダーメイドでご提案します。
                </p>

                <div className={styles.ctaMetrics}>
                    {/* Metrics removed for cleaner centered look if needed, or kept but centered */}
                </div>

                <div className={styles.buttonGroup}>
                    <button className={styles.buttonMain}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            無料で相談する <ArrowRight size={20} />
                        </span>
                    </button>
                </div>
            </motion.div>

            <motion.div
                className={styles.visual}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Abstract background blobs for the visual area */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <div className={styles.mockupPlaceholder}>
                    <Image
                        src="/images/hero_visual.png"
                        alt="Dashboard Mockup"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
