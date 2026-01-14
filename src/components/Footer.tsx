import styles from "./Footer.module.css";
import Link from "next/link";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        <Image
                            src="/madeit_logo2.png"
                            alt="Madeit"
                            width={160}
                            height={36}
                            className={styles.logoImg}
                        />
                    </div>
                    <p className={styles.desc}>
                        売上につながるSNS/広告運用支援。<br />
                        あなたのビジネスの成長を共に歩みます。
                    </p>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <h4>サービス</h4>
                        <Link href="#features">選ばれる理由</Link>
                        <Link href="#achievements">導入事例</Link>
                        <Link href="#pricing">料金プラン</Link>
                    </div>
                    <div className={styles.linkGroup}>
                        <h4>会社情報</h4>
                        <Link href="#">会社概要</Link>
                        <Link href="#">プライバシーポリシー</Link>
                        <Link href="#">お問い合わせ</Link>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                © 2026 Madeit. All Rights Reserved.
            </div>
        </footer>
    );
}
