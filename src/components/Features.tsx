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
              あなたのビジネスの目的・業種・市場規模などを徹底的に分析し、最適なSNSの選定・ターゲティング設定を行います。
              ビジネスの成長につながっていないツールから、集客・売上に直結する広告ツールに進化させます。
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
                  制作から広告運用までまるっと実施
                </span>
              </h3>
              <p
                className={styles.description}
                style={{ whiteSpace: "pre-line" }}
              >
                SNS運用において顧客の第一印象となるクリエイティブから、あなたのビジネスに興味を持たせるための誘導まで一貫して行っております。
                PR動画、エンタメ動画、ショートドラマなどあなたのビジネスに合わせて最適な構成をご提案いたします。
                内製化された100名以上のプロ動画制作チームを抱えているのでイメージの齟齬なく制作が可能です。
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
                動線全体の設計から改善までを高速でサイクル
              </h4>
              <p className={styles.bottomText}>
                ヒアリング→動線設計→撮影→編集→投稿→効果測定までを一貫して実施。
                <br />
                効果測定で得られたデータから改善点を洗い出し、高速で最適な運用を導き出します。
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
                目先の「再生数」で終わらせず、
                <br />
                「問い合わせ・売上」を伸ばすまでとことん追求
              </span>
            </h3>
            <p
              className={styles.description}
              style={{ whiteSpace: "pre-line" }}
            >
              多くのSNS運用代行サービスは動画の再生数やいいね数などの表面定な数値を目標として設定しています。
              我々はその目先の数値だけではなく、「ビジネスに貢献する数値」を目標として設定します。
              意味のない数値をむやみに伸ばすのではなく、意味のある数値を伸ばし、あなたのビジネスの目標達成に貢献します。
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
