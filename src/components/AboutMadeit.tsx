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
            SNSで集客したいけど、なにをしたらいいのかわからない。そこまで手が回らない。
            <br />
            Madeitでは作成から運用、マーケットまで一貫してサポートし、目標達成に貢献します。
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
              srcSet="/about_madeit_mobile_v3.png"
            />
            <img
              src="/about_madeit_pc_v2.png"
              alt="Madeitの特徴"
              className={styles.featuresImage}
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
}
