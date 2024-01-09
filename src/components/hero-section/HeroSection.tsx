import styles from './HeroSection.module.css'
import HeroImage from '../../assets/images/heroImage.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useImageLoad from '../../hooks/useImageLoad'

const HeroSection = () => {
  const { imageLoaded, handleImageLoad } = useImageLoad()

  return (
    <div className={styles.heroSection}>
      <LazyLoadImage
        alt='Post Image'
        src={HeroImage}
        effect='blur'
        className={`${styles.heroImage} ${
          imageLoaded ? styles.imageLoaded : ''
        }`}
        onLoad={handleImageLoad}
      />

      <div className={styles.heroDescription}>
        <h1>Your Hero Section Title</h1>
        <p>Your Hero Section Description</p>
      </div>
    </div>
  )
}

export default HeroSection
