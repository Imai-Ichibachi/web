import styles from "./ProgressExample.module.css";
import Image from "next/image";

export default function ProgressExample() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>進行例</h2>
      <div className={styles.container}>
        <p className={styles.subtitle}>店舗の集客を増やしたい場合</p>
        <p className={styles.planName}>(スタンダードプラン)</p>

        <div className={styles.imageWrapper}>
          <img
            src="/progress_flow_v4.png"
            alt="進行例：店舗の集客を増やしたい場合（スタンダードプラン）"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
