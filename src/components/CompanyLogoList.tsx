"use client";

import styles from "./CompanyLogoList.module.css";
import Image from "next/image";

// Reusing same logos for consistency
const LOGOS = [
    "/images/logos/logo1.png",
    "/images/logos/logo2.png",
    "/images/logos/logo3.png",
    "/images/logos/logo4.png",
    "/images/logos/logo5.png",
    "/images/logos/logo6.png",
    "/images/logos/logo7.png",
    "/images/logos/logo8.png",
    "/images/logos/logo9.png",
    "/images/logos/logo10.png",
];

export default function CompanyLogoList() {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.sectionTitle}>
                <span className={styles.ja}>導入企業一覧</span>
            </h3>

            <div className={styles.grid}>
                {LOGOS.map((src, index) => (
                    <div key={index} className={styles.logoItem}>
                        <Image
                            src={src}
                            alt={`Client Logo ${index + 1}`}
                            width={160}
                            height={80}
                            className={styles.logoImg}
                        />
                    </div>
                ))}
            </div>
            <p className={styles.note}>※協業先の実績も含みます</p>
        </div>
    );
}
