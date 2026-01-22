"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./ContactSection.module.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const searchParams = useSearchParams();
  const form = useRef<HTMLFormElement>(null);

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

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      // Please replace with your actual EmailJS Service ID, Template ID, and Public Key
      emailjs
        .sendForm("service_madeit", "template_Madeit", form.current, {
          publicKey: "NKAWi0SDilKHsSjjG",
        })
        .then(
          () => {
            alert("お問い合わせを送信しました。");
            if (form.current) form.current.reset();
            setPlan(""); // Reset plan selection if desired
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("送信に失敗しました。時間をおいて再度お試しください。");
          }
        );
    }
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="plan">
          ご相談プラン
        </label>
        <div className={styles.selectWrapper}>
          <select
            id="plan"
            name="plan"
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
          name="user_name"
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
          name="company"
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
          name="user_email"
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
          name="message"
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
