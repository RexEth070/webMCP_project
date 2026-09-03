import styles from './HeroShowcase.module.css';

const features = [
  {
    id: 1,
    text: "Experience the new standard of wealth tracking. All your assets, visualized in one place.",
    image: "/dashboard_mockup_2.jpg",
    alt: "Premium Financial Dashboard Mockup"
  },
  {
    id: 2,
    text: "Automated insights that uncover hidden growth opportunities across your portfolio.",
    image: "/benefit_1.jpg",
    alt: "Automated Insights Illustration"
  },
  {
    id: 3,
    text: "Bank-level security and encryption, ensuring your financial data remains private and protected.",
    image: "/benefit_2.jpg",
    alt: "Financial Security Vault Illustration"
  }
];

export function HeroShowcase() {
  return (
    <div className={styles.gridContainer}>
      {features.map((feature) => (
        <div key={feature.id} className={styles.gridCard}>
          <div className={styles.imageContainer}>
            <img 
              src={feature.image} 
              alt={feature.alt} 
              className={styles.cardImage}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.cardText}>{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
