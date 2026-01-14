import styles from "./contact.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.heading}>お問い合わせ</h1>
                <form className={styles.form}>
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
            </main>
            <Footer />
        </>
    );
}
