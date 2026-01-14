"use client";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
    const steps = [
        {
            num: "01",
            title: "現状分析・戦略設計",
            desc: "現在のアカウント状況や競合他社を徹底的にリサーチ。あなたのビジネスの強みを見つけ出し、最も効果的な運用方針とKPIを設計します。",
            image: "/images/feature_analysis.png"
        },
        {
            num: "02",
            title: "クリエイティブ制作・投稿",
            desc: "ターゲットの心に響く企画・構成から、高品質な画像・動画の制作までをワンストップで。トレンドを押さえた編集でエンゲージメントを高めます。",
            image: "/images/feature_creative.png"
        },
        {
            num: "03",
            title: "データ分析・改善",
            desc: "投稿ごとのインサイト数値を細かく分析。「勝ちパターン」を見つけ出し、次回の施策に反映。PDCAを高速で回し、確実な成果へと繋げます。",
            image: "/images/feature_growth.png"
        }
    ];

    return (
        <section className={styles.section} id="features-detail">
            <div className={styles.container}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className={styles.step}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.content}>
                            <div className={styles.number}>{step.num}</div>
                            <h3 className={styles.title}>
                                STEP {step.num}
                                <span className={styles.titleMain}>{step.title}</span>
                            </h3>
                            <p className={styles.description}>{step.desc}</p>
                        </div>
                        <div className={styles.visual}>
                            <Image
                                src={step.image}
                                alt={step.title}
                                fill
                                style={{ objectFit: "contain", padding: "20px" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
