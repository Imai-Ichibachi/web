"use client";
import styles from "./Pricing.module.css";
import { Check, X, Circle } from "lucide-react";

export default function Pricing() {
    return (
        <section className={styles.section} id="pricing">
            <div className={styles.container}>
                <p className={styles.label}>Price</p>
                <h2 className={styles.title}>料金体系</h2>

                <div className={styles.planToggle}>
                    <button className={`${styles.toggleButton} ${styles.active}`}>BASE PLAN</button>
                    <button className={styles.toggleButton}>SHORT PLAN</button>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.pricingTable}>
                        <thead>
                            <tr>
                                <th className={styles.headerLabel}></th>
                                <th className={`${styles.headerCell} ${styles.lite}`}>
                                    <div className={styles.planName}>LITE</div>
                                    <div className={styles.planNameJa}>ライト</div>
                                </th>
                                <th className={`${styles.headerCell} ${styles.standard}`}>
                                    <div className={styles.planName}>STANDARD</div>
                                    <div className={styles.planNameJa}>スタンダード</div>
                                </th>
                                <th className={`${styles.headerCell} ${styles.premium}`}>
                                    <div className={styles.planName}>PREMIUM</div>
                                    <div className={styles.planNameJa}>プレミアム</div>
                                </th>
                                <th className={`${styles.headerCell} ${styles.option}`}>
                                    <div className={styles.planName}>+ OPTION A</div>
                                    <div className={styles.planNameJa}>丸投げオプション</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1: All Functions */}
                            <tr>
                                <td className={styles.rowLabel}>全ての機能</td>
                                <td colSpan={3} className={`${styles.cell} ${styles.highlightText}`}>
                                    基本使い放題<br />
                                    <span className={styles.smallText}>(用途によっては別途要課金)</span>
                                </td>
                                <td rowSpan={7} className={`${styles.cell} ${styles.optionCell}`}>
                                    <div className={styles.optionContent}>
                                        <p>インフルエンサー<br />ディレクター 1名付与</p>
                                        <div className={styles.optionBadge}>丸投げPLAN</div>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2: Customer Success */}
                            <tr>
                                <td className={styles.rowLabel}>カスタマー<br />サクセス付与</td>
                                <td className={`${styles.cell} ${styles.grayBg}`}>
                                    <X size={24} className={styles.iconX} /><br />
                                    <span className={styles.tinyText}>お問い合わせフォームでの対応</span>
                                </td>
                                <td colSpan={2} className={styles.cell}>
                                    <strong>担当1名</strong><br />
                                    <span className={styles.tinyText}>(Zoom会議、電話、チャットサポート)</span>
                                </td>
                            </tr>

                            {/* Row 3: Meetings */}
                            <tr>
                                <td className={styles.rowLabel}>お振り返り・定例会</td>
                                <td className={`${styles.cell} ${styles.grayBg}`}>
                                    <X size={24} className={styles.iconX} />
                                </td>
                                <td colSpan={2} className={styles.cell}>
                                    <Circle size={24} className={styles.iconCircle} />
                                </td>
                            </tr>

                            {/* Row 4: Contract Period */}
                            <tr>
                                <td className={styles.rowLabel}>初期契約期間</td>
                                <td className={`${styles.cell} ${styles.lightBlueBg}`}>
                                    <span className={styles.badgeBase}>BASE</span> <strong>6ヶ月</strong>
                                </td>
                                <td colSpan={2} className={`${styles.cell} ${styles.lightBlueBg} ${styles.noLeftBorder}`}>
                                    <span className={styles.badgeBase}>BASE</span> <strong>1年</strong>
                                </td>
                            </tr>

                            {/* Row 5: Account Count */}
                            <tr>
                                <td className={styles.rowLabel}>1契約での<br />アカウント数</td>
                                <td colSpan={2} className={`${styles.cell} ${styles.lightBlueBg}`}>
                                    <strong>1契約につき1アカウント (1つのID・PASS)</strong>
                                </td>
                                <td className={`${styles.cell} ${styles.lightBlueBg}`}>
                                    <strong>最大3アカウント付与</strong>
                                </td>
                            </tr>

                            {/* Row 6: Commission */}
                            <tr>
                                <td className={styles.rowLabel}>従量課金</td>
                                <td colSpan={2} className={`${styles.cell} ${styles.lightBlueBg}`}>
                                    <strong>インフルエンサー報酬手数料30%</strong>
                                </td>
                                <td className={`${styles.cell} ${styles.lightBlueBg}`}>
                                    <strong>0%</strong>
                                </td>
                            </tr>

                            {/* Row 7: Initial Cost */}
                            <tr>
                                <td className={styles.rowLabel}>初期費用</td>
                                <td colSpan={3} className={styles.cell}>
                                    <strong>50,000 円</strong> (初月のみ)
                                </td>
                            </tr>

                            {/* Row 8: Monthly Cost */}
                            <tr className={styles.priceRow}>
                                <td className={styles.rowLabel}>月額料金</td>
                                <td className={`${styles.priceCell} ${styles.lite}`}>
                                    <span className={styles.badgeBase}>BASE</span> <span className={styles.priceVal}>38,000</span> 円/月
                                </td>
                                <td className={`${styles.priceCell} ${styles.standard}`}>
                                    <span className={styles.badgeBase}>BASE</span> <span className={styles.priceVal}>70,000</span> 円/月
                                </td>
                                <td className={`${styles.priceCell} ${styles.premium}`}>
                                    <span className={styles.badgeBase}>BASE</span> <span className={styles.priceVal}>250,000</span> 円/月
                                </td>
                                <td className={`${styles.priceCell} ${styles.option}`}>
                                    <span className={styles.plus}>+</span> <span className={styles.priceVal}>80,000</span> 円/月
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className={styles.notes}>
                    <p>※1: 解約は契約終了期日1ヶ月前までの申告が必要になり、期日までの申告が無い場合は自動更新となります。</p>
                    <p>※2: 契約期間中のプラン変更は原則アップグレードのみ受け付け可能です。</p>
                    <p>※3: LITEプランは、初期契約が6ヶ月の場合は自動的に1年間の契約として、初期契約が3ヶ月の場合は自動的に6ヶ月の契約として、それぞれ自動更新されます。いずれの場合も※1に基づき、1ヶ月前の申告が必要となります。</p>
                </div>

            </div>
        </section>
    );
}
