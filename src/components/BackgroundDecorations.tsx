"use client";
import styles from "./BackgroundDecorations.module.css";

export default function BackgroundDecorations() {
    return (
        <div className={styles.container}>
            {/* Color Group 1 */}
            <div className={`${styles.symbol} ${styles.blue} ${styles.pos1}`}>%</div>
            <div className={`${styles.symbol} ${styles.green} ${styles.pos4}`}>%</div>

            {/* Color Group 2 */}
            <div className={`${styles.symbol} ${styles.red} ${styles.pos2}`}>%</div>
            <div className={`${styles.symbol} ${styles.yellow} ${styles.pos5}`}>%</div>

            {/* Color Group 3 */}
            <div className={`${styles.symbol} ${styles.blue} ${styles.pos3}`}>%</div>
            <div className={`${styles.symbol} ${styles.green} ${styles.pos6}`}>%</div>
            <div className={`${styles.symbol} ${styles.red} ${styles.pos7}`}>%</div>
        </div>
    );
}
