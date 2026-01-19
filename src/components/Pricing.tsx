"use client";
import styles from "./Pricing.module.css";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <p className={styles.label}>Price</p>
        <h2 className={styles.title}>料金体系</h2>

        {/* Common Conditions */}
        <div className={styles.commonConditions}>
          <h3 className={styles.commonTitle}>
            プラン共通の前提（成果のために固定）
          </h3>
          <ul className={styles.commonList}>
            <li className={styles.commonItem}>
              <div className={styles.commonIcon}>
                <Check size={18} />
              </div>
              <span>
                広告用動画は
                <br className={styles.spOnly} />
                「獲得用」
                <br className={styles.spOnly} />
                <span className={styles.commonNote}>
                  （フック強・訴求1点・CTA明確）
                </span>
              </span>
            </li>
            <li className={styles.commonItem}>
              <div className={styles.commonIcon}>
                <Check size={18} />
              </div>
              <span>
                広告費は別<span className={styles.commonNote}>（実費）</span>
                <br className={styles.spOnly} /> ／ 修正：各動画1回まで
              </span>
            </li>
            <li className={styles.commonItem}>
              <div className={styles.commonIcon}>
                <Check size={18} />
              </div>
              <span>
                撮影1回＝最大3時間
                <br />
                1ロケ
                <span className={styles.commonNote}>
                  （大阪市内想定・現地撮影で素材担保）
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Plans Grid */}
        <div className={styles.plansGrid}>
          {/* PLAN 1: START */}
          <div className={`${styles.planCard} ${styles.startPlan}`}>
            <div className={styles.cardHeader}>
              <div className={styles.planName}>ミニプラン</div>
              <div className={styles.priceArea}>
                <span className={styles.priceVal}>15</span>
                <span className={styles.priceUnit}>万円／月</span>
              </div>
            </div>
            <div className={styles.purposeBox}>
              <span className={styles.purposeLabel}>目的</span>
              <p className={styles.purposeText}>
                最短で“勝ち訴求”を見つけて、
                <br />
                問い合わせ／予約を発生させる。
              </p>
            </div>
            <ul className={styles.specList}>
              <li>
                <span className={styles.specLabel}>投稿用制作</span>
                <span className={styles.specValue}>4本／月</span>
              </li>
              <li>
                <span className={styles.specLabel}>広告用動画</span>
                <span className={styles.specValue}>4本／月</span>
              </li>
              <li>
                <span className={styles.specLabel}>広告運用</span>
                <span className={styles.specValue}>1媒体</span>
              </li>
              <li>
                <span className={styles.specLabel}>撮影(大阪)</span>
                <span className={styles.specValue}>月1回込み</span>
              </li>
              <li>
                <span className={styles.specLabel}>定例</span>
                <span className={styles.specValue}>月1＋月次レポート</span>
              </li>
            </ul>
            <div className={styles.flowBox}>
              <h4 className={styles.flowTitle}>
                初期構築
                <span className={styles.flowSub}>（初月で導線を決め切る）</span>
              </h4>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoC</p>
                <ul className={styles.flowList}>
                  <li>広告 → 公式LINE（主）</li>
                  <li>LP → 予約／電話（副）</li>
                  <li>LINE：自動返信＋簡易ヒアリング＋誘導（予約／相談）</li>
                </ul>
              </div>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoB</p>
                <ul className={styles.flowList}>
                  <li>広告 → LP（1枚）</li>
                  <li>LP → フォーム（主）／LINE（副）</li>
                  <li>LP：FV／オファー／実績枠／FAQ／CTAを最低限完成</li>
                </ul>
              </div>
            </div>
            <Link href="/contact?plan=start" className={styles.ctaButton}>
              ミニプランで相談する
            </Link>
          </div>

          {/* PLAN 2: STANDARD */}
          <div className={`${styles.planCard} ${styles.standardPlan}`}>
            <div className={styles.cardHeader}>
              <div className={styles.planName}>スタンダードプラン</div>
              <div className={styles.priceArea}>
                <span className={styles.priceVal}>30</span>
                <span className={styles.priceUnit}>万円／月</span>
              </div>
            </div>
            <div className={styles.purposeBox}>
              <span className={styles.purposeLabel}>目的</span>
              <p className={styles.purposeText}>
                週次改善でCV／CPAを安定させ、
                <br />
                売上の再現性を作る。
              </p>
            </div>
            <ul className={styles.specList}>
              <li>
                <span className={styles.specLabel}>投稿用制作</span>
                <span className={styles.specValue}>8本／月</span>
              </li>
              <li>
                <span className={styles.specLabel}>広告用動画</span>
                <span className={styles.specValue}>8本／月</span>
                <span className={styles.specNote}>
                  （訴求2軸×各4本などで検証量を確保）
                </span>
              </li>
              <li>
                <span className={styles.specLabel}>広告運用</span>
                <span className={styles.specValue}>2媒体まで</span>
              </li>
              <li>
                <span className={styles.specLabel}>撮影(大阪)</span>
                <span className={styles.specValue}>月2回込み</span>
              </li>
              <li>
                <span className={styles.specLabel}>定例</span>
                <span className={styles.specValue}>
                  隔週(月2)＋改善サマリー＋月次レポート
                </span>
              </li>
            </ul>
            <div className={styles.flowBox}>
              <h4 className={styles.flowTitle}>
                導線
                <span className={styles.flowSub}>
                  （BtoC／BtoBともに“最適化”まで含む）
                </span>
              </h4>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoC</p>
                <ul className={styles.flowList}>
                  <li>直LINE主を前提に、予約／電話のCVもテスト</li>
                </ul>
              </div>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoB</p>
                <ul className={styles.flowList}>
                  <li>
                    LP → フォーム主を前提に、LP内のCTA・フォーム項目の最適化
                  </li>
                  <li>
                    LINE：タグ設計（最低限）＋ステップ配信（短め3通）で追客
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact?plan=standard" className={styles.ctaButton}>
              スタンダードで相談する
            </Link>
          </div>

          {/* PLAN 3: GROWTH */}
          <div className={`${styles.planCard} ${styles.growthPlan}`}>
            <div className={styles.cardHeader}>
              <div className={styles.planName}>プレミアムプラン</div>
              <div className={styles.priceArea}>
                <span className={styles.priceVal}>60</span>
                <span className={styles.priceUnit}>万円〜／月</span>
              </div>
            </div>
            <div className={styles.purposeBox}>
              <span className={styles.purposeLabel}>目的</span>
              <p className={styles.purposeText}>
                広告テスト量と改善速度を最大化して、
                <br />
                売上インパクトを取りにいく。
              </p>
            </div>
            <ul className={styles.specList}>
              <li>
                <span className={styles.specLabel}>投稿用制作</span>
                <span className={styles.specValue}>12本／月</span>
              </li>
              <li>
                <span className={styles.specLabel}>広告用動画</span>
                <span className={styles.specValue}>16本／月</span>
                <span className={styles.specNote}>
                  （AB前提：フック／訴求／オファー差分を回す）
                </span>
              </li>
              <li>
                <span className={styles.specLabel}>広告運用</span>
                <span className={styles.specValue}>最大3媒体</span>
              </li>
              <li>
                <span className={styles.specLabel}>撮影(大阪)</span>
                <span className={styles.specValue}>月4回込み</span>
                <span className={styles.specNote}>（週1目安）</span>
              </li>
              <li>
                <span className={styles.specLabel}>定例</span>
                <span className={styles.specValue}>
                  週1＋週次改善サマリー＋月次レポート
                </span>
              </li>
            </ul>
            <div className={styles.flowBox}>
              <h4 className={styles.flowTitle}>追加対応</h4>
              <ul className={styles.flowList} style={{ marginBottom: "16px" }}>
                <li>
                  LPO軽微改善（FV／CTA／構成／文言の改善提案＋軽微修正）
                  <br />
                  <span className={styles.tinyNote}>※大規模制作は別</span>
                </li>
              </ul>
              <h4 className={styles.flowTitle}>
                導線<span className={styles.flowSub}>（本格運用）</span>
              </h4>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoC</p>
                <ul className={styles.flowList}>
                  <li>
                    LINE主導線のCV率を上げつつ、予約／電話の取りこぼしも回収
                  </li>
                </ul>
              </div>
              <div className={styles.flowSection}>
                <p className={styles.flowType}>BtoB</p>
                <ul className={styles.flowList}>
                  <li>
                    LP → フォームでCV最大化し、LINE副導線で“即レス商談”も拾う
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/contact?plan=growth" className={styles.ctaButton}>
              プレミアムで相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
