"use client";
import styles from "./FAQ.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "最低契約期間はありますか？", a: "最低契約期間は3ヶ月とさせていただいております（初月は日割り計算）。効果を実感していただくため、一定期間の継続をお願いしております。" },
        { q: "対応可能なSNSを教えてください", a: "Instagram、X（旧Twitter）、TikTok、LINE公式アカウント、Facebookに対応しております。お客様の商材に合わせて最適なプラットフォームをご提案します。" },
        { q: "広告予算はどのくらい必要ですか？", a: "月額数万円から可能です。まずは少額でテストマーケティングを行い、効果を見ながら徐々に予算を拡大することをお勧めしています。" },
        { q: "画像や動画などの素材がないのですが...", a: "ご安心ください。弊社で撮影や素材の作成も可能です（一部別途費用）。また、AIを活用した素材生成プランもご用意しております。" }
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section} id="faq">
            <div className={styles.container}>
                <h2 className={styles.title}>よくある質問</h2>
                <div>
                    {faqs.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <button className={styles.question} onClick={() => toggle(index)}>
                                Q. {item.q}
                                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className={styles.answer}
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
