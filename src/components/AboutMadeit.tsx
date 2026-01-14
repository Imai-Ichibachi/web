"use client";
import styles from "./AboutMadeit.module.css";
import { motion } from "framer-motion";
import { Smartphone, ThumbsUp, LayoutTemplate, Camera } from "lucide-react";

export default function AboutMadeit() {
    return (
        <section className={styles.section} id="about-madeit">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className={styles.label}>What is Madeit!</p>
                    <h2 className={styles.title}>Madeitとは</h2>
                    <p className={styles.description}>
                        Madeitは「売れるインフルエンサーが一目でわかる」インフルエンサープラットフォームです。<br />
                        さらに、インフルエンサーの投稿を無料で二次利用でき、広告や商品ページなどに活用が可能です。<br />
                        話題化から広告成果最大化まで、投資効率の良いSNSプロモーションを実現します。
                    </p>
                </motion.div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {/* Top Left */}
                        <motion.div
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Smartphone size={32} color="#0f172a" />
                            </div>
                            <div className={styles.featureContent}>
                                <div className={styles.featureLabel}>認知・獲得</div>
                                <div className={styles.featureTitle}>インフルエンサーPR</div>
                            </div>
                        </motion.div>

                        {/* Top Right */}
                        <motion.div
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className={styles.iconWrapper}>
                                <ThumbsUp size={32} color="#0f172a" />
                            </div>
                            <div className={styles.featureContent}>
                                <div className={styles.featureLabel}>商品理解促進</div>
                                <div className={styles.featureTitle}>商品レビュー大量作成</div>
                            </div>
                        </motion.div>

                        {/* Bottom Left */}
                        <motion.div
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className={styles.iconWrapper}>
                                <LayoutTemplate size={32} color="#0f172a" />
                            </div>
                            <div className={styles.featureContent}>
                                <div className={styles.featureLabel}>成果改善・工数削減</div>
                                <div className={styles.featureTitle}>広告素材制作効率化</div>
                            </div>
                        </motion.div>

                        {/* Bottom Right */}
                        <motion.div
                            className={styles.featureItem}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className={styles.iconWrapper}>
                                <Camera size={32} color="#0f172a" />
                            </div>
                            <div className={styles.featureContent}>
                                <div className={styles.featureLabel}>工数削減・コスト削減</div>
                                <div className={styles.featureTitle}>Web/SNS素材制作</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
