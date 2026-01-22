"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./ContactSection.module.css";
import Image from "next/image";

function ContactForm() {
  const searchParams = useSearchParams();

  // Initialize state from URL params to avoid cascading render
  const [plan, setPlan] = useState(() => {
    const p = searchParams.get("plan")?.toLowerCase();
    if (p === "start" || p === "standard" || p === "growth") return p;
    return "";
  });

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam) {
      const p = planParam.toLowerCase();
      if (p === "start" || p === "standard" || p === "growth") {
        setPlan((current) => (current !== p ? p : current));
      }
    }
  }, [searchParams]);

  return (
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="plan">
          ご相談プラン
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="plan"
            className={styles.select}
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="">個別相談 / プラン未定</option>
            <option value="start">ミニプラン</option>
            <option value="standard">プレミアムプラン</option>
            <option value="growth">パーフェクトプラン</option>
          </select>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="name">
          お名前 <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          required
          placeholder="山田 太郎"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="company">
          会社名
        </label>
        <input
          type="text"
          id="company"
          className={styles.input}
          placeholder="株式会社Madeit"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="email">
          メールアドレス <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          required
          placeholder="example@madeit.jp"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="message">
          お問い合わせ内容 <span style={{ color: "#ef4444" }}>*</span>
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          required
          placeholder="ご相談内容をご記入ください"
        ></textarea>
      </div>
      <button type="submit" className={styles.submitButton}>
        送信する
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.label}>Contact</p>
        <h2 className={styles.heading}>お問い合わせ</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
