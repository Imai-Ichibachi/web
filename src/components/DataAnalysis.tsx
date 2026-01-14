"use client";
import styles from "./DataAnalysis.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DataAnalysis() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>DATA DRIVEN</span>
                    <h2 className={styles.title}>
                        感覚に頼らない、<br />
                        確かなデータ分析
                    </h2>
                    <p className={styles.description}>
                        日々の運用データをリアルタイムで分析・可視化。<br />
                        インプレッション、エンゲージメント、クリック率など<br />
                        重要指標を常にモニタリングし、<br />
                        次のアクションプランへ即座に反映します。
                    </p>
                </motion.div>

                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/images/feature_analysis.png"
                        alt="Data Analysis Dashboard"
                        width={500}
                        height={400}
                    />
                </motion.div>
            </div>
        </section>
    );
}
