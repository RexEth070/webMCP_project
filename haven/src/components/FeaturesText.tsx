import React from 'react';
import styles from './FeaturesText.module.css';

export function FeaturesText() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Step 1 */}
        <div className={styles.stepRow}>
          <div className={styles.stepContent}>
            <h2 className={styles.headline}>
              Navigate your finances with <span className={styles.highlight}>confidence.</span>
            </h2>
          </div>
          <div className={styles.stepImageWrapper}>
            <img src="/feature_1.jpg" alt="Navigate finances" className={styles.stepImage} />
          </div>
        </div>

        {/* Step 2 */}
        <div className={`${styles.stepRow} ${styles.stepTwo}`}>
          <div className={`${styles.stepImageWrapper} ${styles.mobileOrderLast}`}>
            <img src="/feature_2.jpg" alt="Track spending" className={styles.stepImage} />
          </div>
          <div className={styles.stepContent}>
            <p className={styles.description}>
              Track spending, budgets, investments, net worth, and get personalized recommendations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
