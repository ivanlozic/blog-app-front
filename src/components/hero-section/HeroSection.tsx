import styles from './HeroSection.module.css'
import HeroImage from '../../assets/images/heroImage.jpg'

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <img className={styles.heroImage} src={HeroImage} alt='Hero Section' />
      <div className={styles.heroDescription}>
        <h1>Your Hero Section Title</h1>
        <p>Your Hero Section Description</p>
      </div>
    </div>
  )
}

export default HeroSection
