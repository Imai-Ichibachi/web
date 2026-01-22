"use client";
import styles from "./Problems.module.css";

/* eslint-disable @next/next/no-img-element */
export default function Problems() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>こんなお悩みありませんか？</h2>
        <div className={styles.imageWrapper}>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/problems_sp_new.png"
            />
            <img
              src="/problems_pc_new.png"
              alt="こんなお悩みありませんか？"
              className={styles.image}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
