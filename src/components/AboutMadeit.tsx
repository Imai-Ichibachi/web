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
                        Madeitは、売上に直結する“集客導線”をつくって回す、実行型マーケ支援です。<br />
                        SNS投稿や広告運用を「やったつもり」で終わらせず、<br />
                        SNS＝集客の入口 → LP／LINE／電話／予約 → 成約までを一気通貫で設計・運用します。
                    </p>
                </motion.div>

                <div className={styles.gridWrapper}>
                    <div className={styles.grid}>
                        {/* Top Left - Item 1 */}
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
                                <div className={styles.featureTitle}>導線設計</div>
                                <p className={styles.featureDesc}>
                                    商材に合わせて、最短で成果が出る導線（LP／LINE／予約など）を選定・構築
                                </p>
                            </div>
                        </motion.div>

                        {/* Top Right - Item 2 */}
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
                                <div className={styles.featureTitle}>制作と運用がセット</div>
                                <p className={styles.featureDesc}>
                                    企画 → 撮影 → 編集 → 配信／広告 → 改善まで「実装」
                                </p>
                            </div>
                        </motion.div>

                        {/* Bottom Left - Item 3 */}
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
                                <div className={styles.featureTitle}>制作体制が強い</div>
                                <p className={styles.featureDesc}>
                                    ショート動画〜撮影まで対応／編集チームで量産と品質を両立
                                </p>
                            </div>
                        </motion.div>

                        {/* Bottom Right - Item 4 */}
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
                                <div className={styles.featureTitle}>売上直結の広告運用</div>
                                <p className={styles.featureDesc}>
                                    問い合わせ・予約・売上など“数字”をKPIに運用改善
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
