"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ServiceIntro.module.css";

export default function ServiceIntro() {
    const cards = [
        {
            num: "01",
            title: "SNSを“入口”として設計",
            link: "#step1",
            color: "#ff5858",
            image: "/images/feature_analysis.png"
        },
        {
            num: "02",
            title: "広告×SNS×制作×LP\n一体運用",
            link: "#step2",
            color: "#ffe358",
            image: "/images/feature_creative.png"
        },
        {
            num: "03",
            title: "提案で終わらず\n実装まで回し切る",
            link: "#step3",
            color: "#58dbff",
            image: "/images/feature_growth.png"
        },
        {
            num: "04",
            title: "データで改善し\n成果に寄せる",
            link: "#step4",
            color: "#58ff5e",
            image: "/images/feature_growth.png" // Reusing
        },
        {
            num: "05",
            title: "制作力×運用力で\n成果を落とさない",
            link: "#step5",
            color: "#a855f7",
            image: "/images/feature_creative.png" // Reusing
        },
        {
            num: "06",
            title: "DATA DRIVEN\n感覚に頼らない、\n確かなデータ分析",
            link: "#step6",
            color: "#ff9f58",
            image: "/images/feature_analysis.png"
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
                        <Link href={card.link} key={index} className={styles.cardLink}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 0.98 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.number} style={{ color: card.color }}>
                                    {card.num}
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
