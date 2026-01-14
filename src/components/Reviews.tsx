"use client";
import styles from "./Reviews.module.css";
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Reviews() {
    const cases = [
        {
            company: "株式会社ファンケル",
            name: "FANCL",
            imageColor: "#e0f2fe", // Light blue
            title: "インフルエンサー投稿の二次活用で広告CV1.8倍！Madeitはマーケティングノウハウを蓄積できるプラットフォーム",
            arrowColor: "#0ea5e9"
        },
        {
            company: "株式会社ドウシシャ",
            name: "DOSHISHA",
            imageColor: "#fce7f3", // Light pink
            title: "300万回超再生の投稿も！“ファン化”を加速するSNS施策",
            arrowColor: "#eab308"
        },
        {
            company: "株式会社しまうまプリント",
            name: "SHIMAUMA",
            imageColor: "#dcfce7", // Light green
            title: "インフルエンサー施策でリーチ単価15%減＆新たなターゲット発掘を後押し",
            arrowColor: "#f43f5e"
        },
        {
            company: "ヤマダホームズ",
            name: "YAMADA HOMES",
            imageColor: "#fef3c7", // Light yellow
            title: "住宅展示場への来場数が前年比120%達成！ファミリー層への認知拡大",
            arrowColor: "#f59e0b"
        },
        {
            company: "小田急電鉄株式会社",
            name: "Odakyu",
            imageColor: "#e0e7ff", // Light indigo
            title: "沿線イベントの集客に成功。若年層の利用促進につながるSNS施策",
            arrowColor: "#6366f1"
        },
        {
            company: "株式会社ハンズ",
            name: "HANDS",
            imageColor: "#d1fae5", // Light emerald
            title: "新商品の認知拡大と店舗への送客を実現。UGC活用で信頼性を向上",
            arrowColor: "#10b981"
        }
    ];

    const logos = [
        "YAMADA HOMES", "Odakyu", "HANDS", "神戸屋", "FANCL", "WACOAL",
        "SHOP CHANNEL", "Raycop", "ADASTRIA", "KOSE", "SHIMAUMA", "CAFFE VELOCE"
    ];

    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            // Robust scrolling using child element positions
            const card = current.firstElementChild as HTMLElement;
            if (!card) return;

            const cardWidth = card.offsetWidth + 30; // approx width + gap
            const currentScroll = current.scrollLeft;
            const currentIndex = Math.round(currentScroll / cardWidth);

            let targetIndex;
            if (direction === 'left') {
                targetIndex = Math.max(0, currentIndex - 1);
            } else {
                targetIndex = currentIndex + 1;
            }

            current.scrollTo({ left: targetIndex * cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section} id="reviews">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className={styles.title}>導入実績</h2>
                <p className={styles.subtitle}>これまで3,500社以上の企業にご導入いただいております。</p>
            </motion.div>

            {/* Carousel */}
            <div className={styles.carouselWrapper}>
                <div ref={scrollRef} className={styles.carousel}>
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardImage} style={{ backgroundColor: item.imageColor }}>
                                {/* Placeholder for Image */}
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.companyInfo}>
                                    <div className={styles.companyLogo}>{item.name}</div>
                                    <span className={styles.companyName}>{item.company}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <div className={styles.arrowButton} style={{ backgroundColor: item.arrowColor }}>
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Add a duplicate card or two to show scrollability if needed, or just these 3 matching the user image */}

                </div>
            </div>

            {/* Navigation Buttons */}
            <div className={styles.navButtons}>
                <button className={styles.navButton} aria-label="Previous" onClick={() => scroll('left')}>
                    <ChevronLeft size={24} />
                </button>
                <button className={styles.navButton} aria-label="Next" onClick={() => scroll('right')}>
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Logo Grid */}
            <motion.div
                className={styles.logoGrid}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                {logos.map((logo, index) => (
                    <div key={index} className={styles.logoItem}>
                        {logo}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
