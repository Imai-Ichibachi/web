"use client";
import styles from "./LogoCarousel.module.css";
import Image from "next/image";

export default function LogoCarousel() {
    return (
        <section className={styles.section}>
            <p className={styles.title}>導入企業・取引実績</p>
            <div className={styles.carousel}>
                <div className={styles.slide}>
                    <Image src="/images/logo_set.png" alt="Client Logos" width={800} height={100} className={styles.logoImg} />
                </div>
                <div className={styles.slide}>
                    <Image src="/images/logo_set.png" alt="Client Logos" width={800} height={100} className={styles.logoImg} />
                </div>
            </div>
        </section>
    );
}
