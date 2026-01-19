"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./contact.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ContactForm() {
    const searchParams = useSearchParams();
    const [plan, setPlan] = useState("");

    useEffect(() => {
        const planParam = searchParams.get("plan");
        if (planParam) {
            // Map param to value
            const p = planParam.toLowerCase();
            if (p === "start") setPlan("start");
            else if (p === "standard") setPlan("standard");
            else if (p === "growth") setPlan("growth");
        }
    }, [searchParams]);

    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="plan">ご相談プラン</label>
                <div className={styles.selectWrapper}>
                    <select
                        id="plan"
                        className={styles.select}
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                    >
                        <option value="">個別相談 / プラン未定</option>
                        <option value="start">STARTプラン</option>
                        <option value="standard">STANDARDプラン</option>
                        <option value="growth">GROWTHプラン</option>
                    </select>
                </div>
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">お名前 <span style={{ color: '#ef4444' }}>*</span></label>
                <input type="text" id="name" className={styles.input} required placeholder="山田 太郎" />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="company">会社名</label>
                <input type="text" id="company" className={styles.input} placeholder="株式会社Madeit" />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">メールアドレス <span style={{ color: '#ef4444' }}>*</span></label>
                <input type="email" id="email" className={styles.input} required placeholder="example@madeit.jp" />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">お問い合わせ内容 <span style={{ color: '#ef4444' }}>*</span></label>
                <textarea id="message" className={styles.textarea} required placeholder="ご相談内容をご記入ください"></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>送信する</button>
        </form>
    );
}

export default function Contact() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.heading}>お問い合わせ</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}
