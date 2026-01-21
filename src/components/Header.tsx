"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const getLink = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <Link href={getLink("about-madeit")} className={styles.navLink}>
          Madeitとは
        </Link>
        <Link href={getLink("features")} className={styles.navLink}>
          特徴
        </Link>
        <Link href={getLink("achievements")} className={styles.navLink}>
          導入事例
        </Link>
        <Link href={getLink("pricing")} className={styles.navLink}>
          料金
        </Link>
        <Link href={getLink("faq")} className={styles.navLink}>
          FAQ
        </Link>
      </nav>

      <div className={styles.actions}>
        <Link href={isHome ? "#contact" : "/#contact"} className={styles.buttonInquiry}>
          お問い合わせ
        </Link>
        <button className={styles.buttonDownload}>無料で相談する</button>
      </div>

      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Menu"
        style={{
          opacity: isMenuOpen ? 0 : 1,
          pointerEvents: isMenuOpen ? "none" : "auto",
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.mobileMenuOverlay}
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={styles.mobileMenu}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className={styles.mobileNav}>
                <Link
                  href="/"
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>ホーム
                </Link>
                <Link
                  href={getLink("about-madeit")}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>
                  Madeitとは
                </Link>
                <Link
                  href={getLink("features")}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>特徴
                </Link>
                <Link
                  href={getLink("achievements")}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>導入事例
                </Link>
                <Link
                  href={getLink("pricing")}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>料金
                </Link>
                <Link
                  href={getLink("faq")}
                  className={styles.mobileNavLink}
                  onClick={closeMenu}
                >
                  <span className={styles.mobileNavLinkIcon}>&gt;</span>FAQ
                </Link>
              </nav>

              <div className={styles.mobileActions}>
                <button className={styles.mobileButtonDownload}>
                  無料で相談する
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16L7 11L8.41421 9.58579L11 12.1716V4H13V12.1716L15.5858 9.58579L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"
                      fill="#031430"
                    />
                  </svg>
                </button>
                <Link
                  href={isHome ? "#contact" : "/#contact"}
                  className={styles.mobileButtonInquiry}
                  onClick={closeMenu}
                >
                  お問い合わせ
                </Link>
              </div>

              <div className={styles.closeButtonContainer}>
                <button className={styles.closeButton} onClick={closeMenu}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                      fill="#031430"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
