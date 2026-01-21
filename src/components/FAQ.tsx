"use client";
import styles from "./FAQ.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqs = [
    {
      q: "最低契約期間はありますか？",
      a: "最低契約期間は3ヶ月とさせていただいております（初月は日割り計算）。効果を実感していただくため、一定期間の継続をお願いしております。",
    },
    {
      q: "対応可能なSNSを教えてください",
      a: "Instagram、X（旧Twitter）、TikTok、LINE公式アカウント、Facebookに対応しております。お客様の商材に合わせて最適なプラットフォームをご提案します。",
    },
    {
      q: "広告予算はどのくらい必要ですか？",
      a: "月額数万円から可能です。まずは少額でテストマーケティングを行い、効果を見ながら徐々に予算を拡大することをお勧めしています。",
    },
    {
      q: "画像や動画などの素材がないのですが...",
      a: "ご安心ください。弊社で撮影や素材の作成も可能です（一部別途費用）。また、AIを活用した素材生成プランもご用意しております。",
    },
    {
      q: "定例ミーティングやレポート報告はありますか？",
      a: "はい、毎月1回の定例オンラインミーティングにて、数値レポートを用いた振り返りと翌月の施策提案を行っております。",
    },
    {
      q: "契約後の解約はいつでも可能ですか？",
      a: "契約期間満了の1ヶ月前までにお申し出いただければ、契約更新のタイミングで解約が可能です。無理な引き止めは一切ございません。",
    },
    {
      q: "BtoB企業でも依頼できますか？",
      a: "はい、BtoB・BtoC問わず対応可能です。採用広報やリード獲得など、目的に応じたSNS戦略をご提案させていただきます。",
    },
    {
      q: "申し込みから開始までの期間は？",
      a: "通常、ご契約からアカウント開設・初期設定を含めて約2週間〜1ヶ月程度で運用を開始いただけます。",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <p className={styles.label}>FAQ</p>
        <h2 className={styles.title}>よくある質問</h2>
        <div className={styles.grid}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.item}>
              <button className={styles.question} onClick={() => toggle(index)}>
                Q. {item.q}
                {openIndexes.includes(index) ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndexes.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answer}
                    onClick={() => toggle(index)}
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
