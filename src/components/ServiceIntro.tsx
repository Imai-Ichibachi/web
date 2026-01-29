"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ServiceIntro.module.css";

export default function ServiceIntro() {
  const cards = [
    {
      num: "01",
      title: "SNS×広告の売上導線に特化",
      link: "#step1",
      color: "#E21E47",
      image: "/images/feature_sns_marketing.jpg",
    },
    {
      num: "02",
      title: "制作から広告運用までまるっと実施",
      link: "#step2",
      color: "#E2B21F",
      image: "/service_intro_02_new.jpg",
    },
    {
      num: "03",
      title:
        "目先の「再生数」で終わらせず、\n「問い合わせ・売上」を伸ばすまでとことん追求",
      link: "#step3",
      color: "#1F41E2",
      image: "/images/feature_sales_growth.jpg",
    },
  ];

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className={styles.label}>Why Madeit!</p>
          <h2 className={styles.title}>Madeitが選ばれる理由</h2>
          <p className={styles.text}>
            大手代理店にはできない、一人一人に寄り添ったきめ細やかなサポートで、
            <br />
            あなたのビジネスの成長に貢献します。
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className={styles.cardLink}>
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.number} style={{ color: card.color }}>
                  {card.num}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
