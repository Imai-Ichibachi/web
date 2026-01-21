"use client";
import styles from "./Reporting.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Reporting() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Left Column: Text */}
          <div className={styles.textColumn}>
            <div className={styles.header}>
              <span className={styles.label}>さらに</span>
              <h3 className={styles.title}>
                勝ちパターンを見つける レポーティング
              </h3>
              <p className={styles.description}>
                全体のサマリーや個別レポートをご報告いたします。
                どのクリエイティブがよかったのか、どんな広告施策が効果があったのかなど、
                全体と個別で広告の結果のを見える化を行い、勝ちパターンを見つけます。
              </p>
            </div>
          </div>

          {/* Right Column: 2 Images Side-by-Side */}
          <div className={styles.imageGrid}>
            {/* Image A: Graph */}
            <div className={styles.cardContainer}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src="/report_summary_new.png"
                    alt="Graph Analysis"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>
              <p className={styles.caption}>月別広告効果サマリー</p>
            </div>

            {/* Image B: Table */}
            <div className={styles.cardContainer}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src="/report_detail_new.png"
                    alt="Data Table"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>
              <p className={styles.caption}>月別数値レポート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
