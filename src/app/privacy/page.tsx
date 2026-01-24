import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "プライバシーポリシー | Madeit",
    description: "Madeit（メイドイット）のプライバシーポリシー（個人情報保護方針）ページです。",
};

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>プライバシーポリシー</h1>

                    <p className={styles.intro}>
                        株式会社ICHIKABACHIKA（以下「当社」といいます。）は、当社が運営する「Madeit」（以下「本サービス」といいます。）において取得する個人情報等の取扱いについて、個人情報の保護に関する法律その他関連法令・ガイドラインを遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
                    </p>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>1. 取得する情報</h2>
                        <p>当社は、本サービスの提供にあたり、次の情報を取得することがあります。</p>

                        <h3 className={styles.subHeading}>お客様からご提供いただく情報</h3>
                        <ul className={styles.list}>
                            <li>氏名、会社名（屋号）、部署名、役職</li>
                            <li>メールアドレス、電話番号</li>
                            <li>お問い合わせ内容、相談内容、その他お客様が入力・送信する情報（添付情報を含む場合があります）</li>
                        </ul>

                        <h3 className={styles.subHeading}>自動的に取得される情報</h3>
                        <ul className={styles.list}>
                            <li>アクセスログ（IPアドレス、ブラウザ・OS等の情報、参照元、閲覧日時、閲覧ページ、操作履歴 等）</li>
                            <li>Cookie、端末識別子等（利用者のブラウザ設定により取得を制限できる場合があります）</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>2. 利用目的</h2>
                        <p>当社は、取得した情報を以下の目的で利用します。</p>
                        <ul className={styles.list}>
                            <li>お問い合わせ・ご相談への対応、連絡、本人確認、資料送付、提案、商談・契約手続きの実施</li>
                            <li>本サービス（SNS/広告運用等の集客支援）の提供、運用、改善、品質向上</li>
                            <li>利用状況の分析、マーケティング施策の検討・実施（広告配信・効果測定を含みます）</li>
                            <li>不正アクセス、不正利用、スパム行為等の防止およびセキュリティ確保</li>
                            <li>法令・規約等への対応、紛争・トラブル対応</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>3. 第三者提供</h2>
                        <p>当社は、次の場合を除き、取得した個人情報を第三者に提供しません。</p>
                        <ul className={styles.list}>
                            <li>ご本人の同意がある場合</li>
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難な場合</li>
                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難な場合</li>
                            <li>国の機関または地方公共団体等が法令の定める事務を遂行することに協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合</li>
                            <li>次条（委託）に定める委託に伴い提供する場合</li>
                            <li>事業承継に伴って提供する場合（合併その他）</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>4. 委託</h2>
                        <p>当社は、利用目的の達成に必要な範囲で、個人情報の取扱いを外部事業者に委託することがあります（例：サーバーホスティング、フォーム・CRM、メール配信、アクセス解析、広告配信等）。この場合、当社は委託先に対し、適切な監督を行います。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>5. Cookie等の利用（アクセス解析・広告）</h2>
                        <p>当社は、本サービスの利便性向上、利用状況の把握、広告配信および効果測定のため、Cookie等の技術を利用することがあります。</p>
                        <p>Cookie等は、ブラウザ設定により無効化・削除できる場合があります。ただし、無効化により本サービスの一部機能が利用できないことがあります。</p>
                        <p>また、当社が第三者の提供するアクセス解析・広告関連サービスを利用する場合、当該第三者がCookie等を用いて情報を取得・利用することがあります。オプトアウト（無効化）方法は各サービス提供者の案内をご確認ください。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>6. 安全管理措置</h2>
                        <p>当社は、個人情報の漏えい、滅失、き損、不正アクセス等を防止するため、必要かつ適切な安全管理措置（組織的・人的・物理的・技術的措置）を講じます。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>7. 保有期間</h2>
                        <p>当社は、利用目的の達成に必要な期間に限り個人情報を保有し、不要となった場合は合理的な方法で速やかに消去または匿名化等の措置を行います。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>8. 開示・訂正・利用停止等の請求</h2>
                        <p>ご本人は、当社が保有する自己の個人情報について、法令の定めに従い、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止等を請求できます。請求手続きは「11. お問い合わせ窓口」へご連絡ください。</p>
                        <p>なお、本人確認のための情報提供をお願いする場合があります。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>9. 未成年者の情報</h2>
                        <p>未成年の方が本サービスに関して個人情報を提供する場合は、親権者等の同意を得たうえで行ってください。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>10. 外部サイトへのリンク</h2>
                        <p>本サービスには、外部サイトへのリンクが含まれる場合があります。リンク先での個人情報の取扱いについて、当社は責任を負いません。各リンク先のポリシーをご確認ください。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>11. 本ポリシーの変更</h2>
                        <p>当社は、法令等の変更や本サービス内容の変更等に応じて、本ポリシーを改定することがあります。改定後の内容は本サービス上での掲示その他当社が適切と判断する方法により周知します。</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.heading}>12. お問い合わせ窓口</h2>
                        <p>本ポリシーに関するお問い合わせ、または個人情報の取扱いに関するご相談は、以下までご連絡ください。</p>
                        <div className={styles.contactInfo}>
                            <p>株式会社ICHIKABACHIKA</p>
                            <p>メールアドレス：info@ichika-bachika.com</p>
                        </div>
                    </section>

                    <p className={styles.date}>（制定日：2026年1月20日）</p>

                    <div className={styles.buttonContainer}>
                        <Link href="/" className={styles.backButton}>
                            TOPへ戻る
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}
