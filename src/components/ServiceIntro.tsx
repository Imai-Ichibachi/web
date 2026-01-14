"use client";
import styles from "./ServiceIntro.module.css";
import { MessageCircle, Settings, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceIntro() {
    const cards = [
        {
            icon: <TrendingUp size={32} />,
            title: "商材への深い理解",
            description: "ただの運用代行ではありません。お客様の商材やサービスの強みを徹底的に分析し、想いや計画に沿ったコンテンツをご提案します。"
        },
        {
            icon: <MessageCircle size={32} />,
            title: "密なコミュニケーション",
            description: "細かなコミュニケーションで、状況の変化に即座に対応。逐一軌道修正を行いながら、最短距離で成果を目指します。"
        },
        {
            icon: <Settings size={32} />,
            title: "月15万円からの導入",
            description: "高額な初期費用は不要。スモールスタートで確実な一歩を。SNS運用と広告運用を組み合わせ、効果的な集客を実現します。"
        }
    ];

    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Madeitが選ばれる理由</h2>
                    <p className={styles.text}>
                        大手代理店にはできない、きめ細やかなサポートと<br />
                        圧倒的な当事者意識で、あなたのビジネスを加速させます。
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {card.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{card.title}</h3>
                            <p className={styles.cardText}>{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
