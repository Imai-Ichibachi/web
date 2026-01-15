"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLink = (id: string) => isHome ? `#${id}` : `/#${id}`;

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/madeit_logo3.png"
                    alt="Madeit"
                    width={180}
                    height={40}
                    className={styles.logoImg}
                    priority
                />
            </Link>

            <nav className={styles.nav}>
                <Link href={getLink("about-madeit")} className={styles.navLink}>Madeitとは</Link>
                <Link href={getLink("features")} className={styles.navLink}>特徴</Link>
                <Link href={getLink("achievements")} className={styles.navLink}>導入事例</Link>
                <Link href={getLink("reviews")} className={styles.navLink}>導入実績</Link>
                <Link href={getLink("pricing")} className={styles.navLink}>料金</Link>
                <Link href={getLink("faq")} className={styles.navLink}>FAQ</Link>
            </nav>

            <div className={styles.actions}>
                <Link href="/contact" className={styles.buttonInquiry}>お問い合わせ</Link>
                <button className={styles.buttonDownload}>資料ダウンロード</button>
            </div>
        </header>
    );
}
