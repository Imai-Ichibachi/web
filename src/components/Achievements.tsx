"use client";
import styles from "./Achievements.module.css";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function Achievements() {
    const cases = [
        {
            category: "出張専門寿司店",
            title: "SNS運用代行＋広告運用",
            result: "売上3倍を達成",
            detail: "導入前と比較し、予約数が劇的に増加。シズル感のある写真投稿でファンを獲得。",
            color: "#f43f5e"
        },
        {
            category: "結婚相談所",
            title: "ドラマ形式動画コンテンツ",
            result: "アカウント流入9万人増",
            detail: "1本目の動画でバズを生み出し、認知を一気に拡大。共感を呼ぶストーリー設計。",
            color: "#ec4899"
        },
        {
            category: "立ち飲み店",
            title: "オープン前SNS運用",
            result: "平均売上の約2倍",
            detail: "店舗オープン前から期待感を醸成。初日から行列を作ることに成功。",
            color: "#eab308"
        },
        {
            category: "美容サロン",
            title: "Meta広告動画＋運用",
            result: "生徒数が2倍に",
            detail: "ターゲット層に響く動画クリエイティブで、CVRを大幅に改善。",
            color: "#06b6d4"
        },
        {
            category: "クレジットカード",
            title: "YouTube広告動画",
            result: "問い合わせ 前年比20%UP",
            detail: "リード獲得に特化した動画構成で、質の高い見込み客を獲得。",
            color: "#3b82f6"
        }
    ];

    return (
        <section className={styles.section} id="achievements">
            <h2 className={styles.title}>導入実績・事例</h2>
            <div className={styles.grid}>
                {cases.map((item, index) => (
                    <motion.div
                        key={index}
                        className={styles.card}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={styles.mockupArea}>
                            {/* Placeholder for actual mockup image */}
                            <div className={styles.mockupPlaceholder}>
                                <Smartphone size={48} />
                            </div>
                        </div>
                        <span className={styles.category} style={{ color: item.color, background: `${item.color}15` }}>
                            {item.category}
                        </span>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.result}>{item.result}</div>
                        <p className={styles.details}>{item.detail}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
