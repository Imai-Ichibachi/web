"use client";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Reporting from "./Reporting";
import OtherFeatures from "./OtherFeatures";

export default function Features() {
  return (
    <section className={styles.section} id="features-detail">
      <div className={styles.container}>
        {/* BLOCK B: Step 01 (Text Left / Image Right) */}
        <motion.div
          id="step1"
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ scrollMarginTop: "100px" }}
        >
          <div className={styles.content}>
            <div
              className={styles.number}
              style={{ color: "#E21E47", opacity: 1 }}
            >
              01
            </div>
            <h3 className={styles.title}>
              STEP 01
              <span className={styles.titleMain}>SNS×広告の売上導線に特化</span>
            </h3>
            <p
              className={styles.description}
              style={{ whiteSpace: "pre-line" }}
            >
              お客様の目的・業種・市場規模などに合わせた、SNSの選定とターゲティング設定。
              広告をお金をかけて露出を増やすだけのツールから、
              売上・集客に直結する営業マンへと昇華させます。
              圧倒的な顧客理解によるデータ分析とABテストによって成功確率の高い広告運用を実現しています。
            </p>
          </div>
          <div className={styles.visual}>
            {/* White card wrapper for PC Mock */}
            <div className={styles.imageCard}>
              <img
                src="/pc_mock_v4.png"
                alt="PC Mock"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* BLOCK C: Reporting */}
      <Reporting />

      <div className={styles.container} style={{ marginTop: "0" }}>
        {" "}
        {/* Removed margin top 100px as separator handles spacing */}
        {/* Separator before Step 02 */}
        <hr className={styles.separator} />
        {/* BLOCK D: Step 02 (Text Left / Image Right) */}
        {/* BLOCK D: Step 02 (Text Left / Image Right) + Bottom Flow */}
        <motion.div
          id="step2"
          className={
            styles.stepContainer
          } /* Changed from step to stepContainer */
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ scrollMarginTop: "100px" }}
        >
          {/* Top Section: Existing 4:6 Grid */}
          <div className={styles.step} style={{ marginBottom: 0 }}>
            {" "}
            {/* Remove bottom margin here, handled by gap or margin-top of bottom section */}
            <div className={styles.content}>
              <div
                className={styles.number}
                style={{ color: "#E2B21F", opacity: 1 }}
              >
                02
              </div>
              <h3 className={styles.title}>
                STEP 02
                <span className={styles.titleMain}>
                  クリエイティブ制作から広告運用まで弊社が一括サポート
                </span>
              </h3>
              <p
                className={styles.description}
                style={{ whiteSpace: "pre-line" }}
              >
                広告運用において、クリエイティブというのは非常に重要なピースの1つです。
                PR動画、広告動画、エンタメ動画、ショートドラマなど...
                お客様のビジネスに合わせた最も効果的な動画ジャンルをご提案いたします。
                それを実現可能にしているのが弊社の100名以上の動画制作プロ集団です。
                内製化された編集のプロ集団だからこそ、
                お客様の想いや強みをダイレクトに訴求できるクリエイティブを制作可能です。
              </p>
            </div>
            <div className={styles.visual}>
              {/* White card wrapper for Phone Before/After */}
              <div className={styles.imageCard}>
                <Image
                  src="/phone_before_after_v2.png"
                  alt="Phone Before After"
                  fill
                  style={{ objectFit: "contain", padding: "0" }}
                />
                {/* Overlay Number if needed, leaving as flat image for now per "placeholder" instruction */}
              </div>
            </div>
          </div>

          {/* Bottom Section: Progress Flow */}
          <div className={styles.stepBottom}>
            <div className={styles.bottomContent}>
              <h4 className={styles.bottomTitle}>
                導線全体の設計〜改善までを、最短で回す
              </h4>
              <p className={styles.bottomText}>
                ヒアリング → 導線設計 → 撮影・編集 → 投稿・配信 →
                効果測定までを一気通貫で運用。
                <br />
                配信後の結果は即座に改善へ反映し、勝ちパターンを高速で作ります。
              </p>
            </div>
            <div className={styles.bottomVisual}>
              <img
                src="/progress_flow2.png"
                alt="Progress Flow"
                className={styles.bottomVisualImage}
              />
            </div>
          </div>
        </motion.div>
        {/* Separator before Step 03 */}
        <hr className={styles.separator} />
        {/* BLOCK E: Step 03 (Text Left / Image Right) */}
        <motion.div
          id="step3"
          className={styles.step}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ scrollMarginTop: "100px" }}
        >
          <div className={styles.content}>
            <div
              className={styles.number}
              style={{ color: "#1F41E2", opacity: 1 }}
            >
              03
            </div>
            <h3 className={styles.title}>
              STEP 03
              <span className={styles.titleMain}>
                『再生数』で終わらせず『問い合わせ/売上』までをとことん追求
              </span>
            </h3>
            <p
              className={styles.description}
              style={{ whiteSpace: "pre-line" }}
            >
              多くのSNS運用代行サービスは、動画の再生数をゴールとしています。
              しかし、その『再生数』こそがあなたのビジネスの成長を阻む罠だとしたら...?
              SNSで最も重要なのは正しいターゲットへコンテンツを届けることです。
              再生数のみをゴールとしていた場合、気づかぬうちに間違った方向へ進んでしまう場合があります。
              Madeitでは『問い合わせ/売上』をゴールにすることで、
              常に正しい方向へとお客様のビジネスを導くことができます。
            </p>
          </div>
          <div className={styles.visual}>
            {/* Existing image logic */}
            <div
              className={styles.imageCard}
              style={{ border: "none", background: "none", boxShadow: "none" }}
            >
              <Image
                src="/STEP03.jpg"
                alt="Feature Growth"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </motion.div>
        {/* Separator before Other Features */}
        <hr className={styles.separator} />
      </div>

      {/* BLOCK F: Other Features */}
      <OtherFeatures />
    </section>
  );
}
