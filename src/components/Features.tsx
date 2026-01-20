"use client";
import styles from "./Features.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const steps = [
    {
      id: "step1",
      num: "01",
      title: "SNSを“入口”として設計し、売上まで繋げる",
      desc: "SNSはバズのためではなく、成約に繋げるための入口。\nKPIを再生数ではなく、問い合わせ数／予約数／売上に寄せて運用します。",
      image: "/images/feature_analysis.png",
      color: "#ff5858",
    },
    {
      id: "step2",
      num: "02",
      title: "広告×SNS×制作×LPを“一体運用”できる",
      desc: "分業だと改善が止まりがち。\nMadeitは広告・SNS・クリエイティブ・LPを同じチームで回し、改善速度を最大化します。",
      image: "/images/feature_creative.png",
      color: "#ffe358",
    },
    {
      id: "step3",
      num: "03",
      title: "提案で終わらず、「実装」まで回し切る",
      desc: "提案書は立派でも、現場が回らないと成果は出ません。\nMadeitは制作も運用も改善も、実行を前提に最後まで完了させます。",
      image: "/images/feature_growth.png",
      color: "#58dbff",
    },
    {
      id: "step4",
      num: "04",
      title: "クリエイティブを“スタート地点”にして、データで勝ちに寄せる",
      desc: "動画やLPは作って終わりではありません。\n反応データを見て、訴求・構成・CTA・導線を継続改善し、成果が出る形に寄せ続けます。",
      image: "/images/feature_growth.png", // Reusing image as per plan
      color: "#58ff5e",
    },
    {
      id: "step5",
      num: "05",
      title: "制作力と運用力が両方強い（成果まで落ちない）",
      desc: "「良い動画だけど売れない」「運用は回すが素材が弱い」を起こしません。\n制作体制と運用設計が揃っているから、成果に直結します。",
      image: "/images/feature_creative.png", // Reusing image as per plan
      color: "#a855f7",
    },
    {
      id: "step6",
      num: "06",
      title: "DATA DRIVEN",
      desc: "感覚や経験だけに頼らず、広告・SNS・LP・導線の各データを定点観測。\n反応が出た要素は伸ばし、弱い要素は切り替えることで、\n“勝ちパターン”を最短で見つけて成果に寄せます。",
      image: "/images/feature_analysis.png",
      color: "#ff9f58",
    },
  ];

  return (
    <section className={styles.section} id="features-detail">
      <div className={styles.container}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            id={step.id}
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
                style={{ color: step.color, opacity: 1 }}
              >
                {step.num}
              </div>
              <h3 className={styles.title}>
                STEP {step.num}
                <span className={styles.titleMain}>{step.title}</span>
              </h3>
              <p
                className={styles.description}
                style={{ whiteSpace: "pre-line" }}
              >
                {step.desc}
              </p>
            </div>
            <div className={styles.visual}>
              <Image
                src={step.image}
                alt={step.title}
                fill
                style={{ objectFit: "contain", padding: "20px" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
