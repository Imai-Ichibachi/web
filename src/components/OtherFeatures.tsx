"use client";
import styles from "./OtherFeatures.module.css";
import { motion } from "framer-motion";

export default function OtherFeatures() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Left Aligned Header with Check Icon */}
                <div className={styles.header}>
                    <svg
                        className={styles.checkIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="12" fill="currentColor" />
                        <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h2 className={styles.title}>その他のサービス特徴</h2>
                </div>

                <div className={styles.grid}>
                    {/* Feature 1 */}
                    <div className={styles.item}>
                        <div className={styles.icon}>📊</div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>アカウントの設定・最適化によって<br /><span className={styles.highlightsub}>流入数が</span><span className={styles.highlight}>最大600%UP</span></h3>
                            <p className={styles.cardText}>
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className={styles.item}>
                        <div className={styles.icon}>🛒</div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>自社運用では取りこぼしていた見込み顧客の発掘によって<br />
                                <span className={styles.highlight}>伸びなかったアカウントが伸びるように。</span></h3>
                            <p className={styles.cardText}>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
