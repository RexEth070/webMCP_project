import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MarketingNav.module.css';

export function MarketingNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.brand}>
            <img src="/logo.png" alt="Haven Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Haven</span>
          </Link>
          <div className={styles.actions}>
            <Link to="/signup" className={styles.loginLink}>
              Log In
            </Link>
            <Link to="/signup" className={styles.ctaButton}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
