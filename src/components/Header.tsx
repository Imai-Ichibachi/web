"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

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
                <Link href="#about-madeit" className={styles.navLink}>Madeitとは</Link>
                <Link href="#features" className={styles.navLink}>特徴</Link>
                <Link href="#achievements" className={styles.navLink}>導入事例</Link>
                <Link href="#reviews" className={styles.navLink}>導入実績</Link>
                <Link href="#pricing" className={styles.navLink}>料金</Link>
                <Link href="#faq" className={styles.navLink}>FAQ</Link>
            </nav>

            <div className={styles.actions}>
                <Link href="/contact" className={styles.buttonInquiry}>お問い合わせ</Link>
                <button className={styles.buttonDownload}>資料ダウンロード</button>
            </div>
        </header>
    );
}
