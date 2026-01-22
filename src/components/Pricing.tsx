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
                広告用動画は「獲得用」
                <span className={styles.commonNote}>
                  （フック強・訴求1点・CTA明確）
                </span>
              </span>
            </li>
            <li className={styles.commonItem}>
              <div className={styles.commonIcon}>
                <Check size={18} />
              </div>
              <span>広告費は別（実費）／ 修正：各動画1回まで</span>
            </li>
            <li className={styles.commonItem}>
              <div className={styles.commonIcon}>
                <Check size={18} />
              </div>
              <span>
                撮影1回＝最大3時間
                <span className={styles.commonNote}>
                  （大阪市内想定・現地撮影で素材担保）
                </span>
              </span>
            </li>
          </ul>
        </div>

        {/* Pricing Grid Table */}
        <div className={styles.tableWrapper}>
          <div className={styles.pricingGrid}>
            {/* --- HEADERS --- */}
            <div className={styles.headerLabel}></div> {/* Empty Corner */}
            <div className={`${styles.headerCell} ${styles.miniHeader}`}>
              <span className={styles.planEn}>MINI</span>
              <span className={styles.planJa}>ミニプラン</span>
            </div>
            <div className={`${styles.headerCell} ${styles.standardHeader}`}>
              <span className={styles.planEn}>PREMIUM</span>
              <span className={styles.planJa}>プレミアムプラン</span>
            </div>
            <div className={`${styles.headerCell} ${styles.premiumHeader}`}>
              <span className={styles.planEn}>PERFECT</span>
              <span className={styles.planJa}>パーフェクトプラン</span>
            </div>
            {/* --- ROW: 目的 --- */}
            <div className={styles.labelCell}>目的</div>
            <div className={styles.cell}>
              最短で“勝ち訴求”を見つけて、
              <br />
              問い合わせ／予約を発生させる。
            </div>
            <div className={styles.cell}>
              週次改善でCV／CPAを安定させ、
              <br />
              売上の再現性を作る。
            </div>
            <div className={styles.cell}>
              広告テスト量と改善速度を最大化して、
              <br />
              売上インパクトを取りにいく。
            </div>
            {/* --- ROW: 投稿用制作 --- */}
            <div className={styles.labelCell}>投稿用制作</div>
            <div className={styles.cell}>
              <strong className={styles.strong}>4本／月</strong>
            </div>
            <div className={styles.cell}>
              <strong className={styles.strong}>8本／月</strong>
            </div>
            <div className={styles.cell}>
              <strong className={styles.strong}>12本／月</strong>
            </div>
            {/* --- ROW: 広告用動画 --- */}
            <div className={styles.labelCell}>広告用動画</div>
            <div className={styles.cell}>
              <strong className={styles.strong}>4本／月</strong>
            </div>
            <div className={styles.cell}>
              <strong className={styles.strong}>8本／月</strong>
              <div className={styles.note}>
                （訴求2軸×各4本などで検証量を確保）
              </div>
            </div>
            <div className={styles.cell}>
              <strong className={styles.strong}>16本／月</strong>
              <div className={styles.note}>
                （AB前提：フック／訴求／オファー差分を回す）
              </div>
            </div>
            {/* --- ROW: 広告運用 --- */}
            <div className={styles.labelCell}>広告運用</div>
            <div className={styles.cell}>1媒体</div>
            <div className={styles.cell}>2媒体まで</div>
            <div className={styles.cell}>最大3媒体</div>
            {/* --- ROW: 撮影(大阪) --- */}
            <div className={styles.labelCell}>撮影(大阪)</div>
            <div className={styles.cell}>月1回込み</div>
            <div className={styles.cell}>月2回込み</div>
            <div className={styles.cell}>
              月4回込み
              <div className={styles.note}>（週1目安）</div>
            </div>
            {/* --- ROW: 定例 --- */}
            <div className={styles.labelCell}>定例</div>
            <div className={styles.cell}>月1＋月次レポート</div>
            <div className={styles.cell}>
              隔週(月2)＋
              <br />
              改善サマリー＋月次レポート
            </div>
            <div className={styles.cell}>
              週1＋
              <br />
              週次改善サマリー＋月次レポート
            </div>
            {/* --- ROW: 特徴・導線設計 --- */}
            <div className={styles.labelCell}>特徴・導線設計</div>
            <div className={`${styles.cell} ${styles.centerLeft}`}>
              <span className={styles.flowTitle}>
                初期構築
                <span className={styles.flowSub}>（初月で導線を決め切る）</span>
              </span>
              <ul className={styles.flowList}>
                <li>広告 → 公式LINE（主）</li>
                <li>LP → 予約／電話（副）</li>
                <li>LINE：自動返信＋簡易ヒアリング＋誘導</li>
              </ul>
            </div>
            <div className={`${styles.cell} ${styles.centerLeft}`}>
              <span className={styles.flowTitle}>
                導線
                <span className={styles.flowSub}>
                  （BtoC/BtoBともに最適化）
                </span>
              </span>
              <ul className={styles.flowList}>
                <li>
                  <small>BtoC</small>: 直LINE主を前提に、予約／電話のCVもテスト
                </li>
                <li>
                  <small>BtoB</small>: LP→フォーム主、LINEタグ設計＋ステップ配信
                </li>
              </ul>
            </div>
            <div className={`${styles.cell} ${styles.centerLeft}`}>
              <span className={styles.flowTitle}>
                追加対応・導線
                <span className={styles.flowSub}>（本格運用）</span>
              </span>
              <ul className={styles.flowList}>
                <li>LPO軽微改善（FV/CTA等）</li>
                <li>
                  <small>BtoC</small>: LINE主導線のCV率向上・取りこぼし回収
                </li>
                <li>
                  <small>BtoB</small>: LP→フォームCV最大化、LINE即レス商談
                </li>
              </ul>
            </div>
            {/* --- ROW: FOOTER (月額料金) --- */}
            <div className={styles.labelCell}>月額料金</div>
            <div
              className={`${styles.headerCell} ${styles.miniHeader} ${styles.priceCell}`}
            >
              <div>
                <span className={styles.priceVal}>15</span>
                <span className={styles.priceUnit}>万円／月</span>
              </div>
            </div>
            <div
              className={`${styles.headerCell} ${styles.standardHeader} ${styles.priceCell}`}
            >
              <div>
                <span className={styles.priceVal}>30</span>
                <span className={styles.priceUnit}>万円／月</span>
              </div>
            </div>
            <div
              className={`${styles.headerCell} ${styles.premiumHeader} ${styles.priceCell}`}
            >
              <div>
                <span className={styles.priceVal}>60</span>
                <span className={styles.priceUnit}>万円〜／月</span>
              </div>
            </div>
            {/* --- ROW: BUTTONS --- */}
            <div className={styles.labelCellTransparent}></div>
            <div
              className={`${styles.cell} ${styles.buttonCell} ${styles.mini}`}
            >
              <Link href="/?plan=start#contact" className={styles.ctaButton}>
                相談する
              </Link>
            </div>
            <div
              className={`${styles.cell} ${styles.buttonCell} ${styles.standard}`}
            >
              <Link href="/?plan=standard#contact" className={styles.ctaButton}>
                相談する
              </Link>
            </div>
            <div
              className={`${styles.cell} ${styles.buttonCell} ${styles.premium}`}
            >
              <Link href="/?plan=growth#contact" className={styles.ctaButton}>
                相談する
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
