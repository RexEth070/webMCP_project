import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';
import { HeroShowcase } from './HeroShowcase';

export function HeroSection() {
  return (
    <div className={styles.heroWrapper}>
      
      {/* Top Section */}
      <div className={styles.topSection}>
        <video 
          className={styles.videoBackground} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/new_video.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>

        <div className={styles.container}>
          
          <div className={styles.badge}>
            Meet the new standard for wealth tracking
          </div>

          <h1 className={styles.headline}>
            Your Wealth. <span className={styles.gradientText}>Visualized.</span>
          </h1>
          
          <p className={styles.subheading}>
            The most elegant way to track your net worth, categorize transactions, and optimize your entire financial portfolio.
          </p>

          <div className={styles.ctaGroup}>
            <Link to="/signup" className={styles.primaryCta}>
              Get Started
              <ArrowRight size={18} className={styles.arrowIcon} />
            </Link>
            <a href="#demo" className={styles.secondaryCta}>
              View Demo
            </a>
          </div>
        </div>
        
        {/* Background decoration - removed to favor video */}
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.container}>
          {/* Hero Showcase Carousel */}
          <div className={styles.mockupContainer}>
            <HeroShowcase />
          </div>
        </div>
      </div>

    </div>
  );
}
