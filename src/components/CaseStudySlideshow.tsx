"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./CaseStudySlideshow.module.css";

const ARTICLES = [
    {
        id: 1,
        image: "/images/case-sushi.png",
        company: "株式会社寿司エンターテイメント",
        title: "出張寿司の予約数が3ヶ月で3倍に。SNS運用の裏側。",
        tag: "SNS運用",
    },
    {
        id: 2,
        image: "/images/case-bar.png",
        company: "Stand Bar TOKYO",
        title: "オープン初日から大行列！ティザー動画戦略の全貌。",
        tag: "動画制作",
    },
    {
        id: 3,
        image: "/images/case-beauty.png",
        company: "Total Beauty Salon K",
        title: "CPAを半減させながら、スクール生徒数を倍増させた広告手法。",
        tag: "広告運用",
    },
    {
        id: 4,
        image: "/images/case-credit.png",
        company: "FinTech Solutions",
        title: "信頼と獲得を両立。金融系YouTube広告の勝ちパターン。",
        tag: "YouTube広告",
    },
    {
        id: 5,
        image: "/images/case-sushi.png",
        company: "Next Gen Foods",
        title: "D2Cブランドの認知拡大。インフルエンサー施策との相乗効果。",
        tag: "SNS運用",
    },
];

export default function CaseStudySlideshow() {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.sectionTitle}>
                <span className={styles.ja}>導入事例インタビュー</span>
            </h3>

            <div className={styles.container}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    speed={500}
                    allowTouchMove={true}
                    navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    className={styles.swiper}
                >
                    {ARTICLES.map((article) => (
                        <SwiperSlide key={article.id} className={styles.slide}>
                            <div className={styles.item}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className={styles.image}
                                    />
                                    <span className={styles.tag}>{article.tag}</span>
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.company}>{article.company}</p>
                                    <h4 className={styles.title}>{article.title}</h4>
                                    <div className={styles.arrowCircle}>→</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={styles.buttonRow}>
                    <button className={`${styles.navButton} ${styles.prev} prev-btn`}>
                        ←
                    </button>
                    <button className={`${styles.navButton} ${styles.next} next-btn`}>
                        →
                    </button>
                </div>
            </div>
        </section>
    );
}
