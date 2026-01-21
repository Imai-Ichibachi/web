import styles from "./ProgressExample.module.css";
import Image from "next/image";

export default function ProgressExample() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>進行例</h2>
      <div className={styles.container}>
        <p className={styles.subtitle}>店舗の集客を増やしたい場合</p>
        <p className={styles.planName}>(スタンダードプラン)</p>

        <h3 className={styles.descriptionTitle}>
          導線全体の設計〜改善までを、最短で回す
        </h3>
        <p className={styles.descriptionText}>
          ヒアリング → 導線設計 → 撮影・編集 → 投稿・配信 →
          効果測定までを一気通貫で運用。
          {"\n"}
          配信後の結果は即座に改善へ反映し、勝ちパターンを高速で作ります。
        </p>

        <div className={styles.imageWrapper}>
          <Image
            src="/progress_flow.png"
            unoptimized={true}
            alt="進行例：店舗の集客を増やしたい場合（スタンダードプラン）"
            width={1024}
            height={352}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
