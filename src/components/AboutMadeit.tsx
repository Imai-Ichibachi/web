"use client";
import styles from "./AboutMadeit.module.css";
import { motion } from "framer-motion";

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
            Madeitは、売上に直結する「集客導線」を設計し、運用までやり切る実行型マーケ支援です。
            <br />
            SNS投稿や広告運用を”やったつもり”で終わらせず、SNSでの認知獲得から、LP・LINE・電話・予約などの導線整備、成約に至るまでを一気通貫で設計・改善し、成果につながる仕組みとして回します。
          </p>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <picture>
            <source
              media="(max-width: 1024px)"
              srcSet="/about_madeit_mobile_v2.png"
            />
            <img
              src="/madeit-features.png"
              alt="Madeitの特徴"
              className={styles.featuresImage}
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
}
