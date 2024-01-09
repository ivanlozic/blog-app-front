import React from 'react'
import styles from './PostItem.module.css'
import { Post } from '../../../constants/constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useImageLoad from '../../../hooks/useImageLoad'

const PostItem: React.FC<Post> = ({ author, title, body, image }) => {
  const { imageLoaded, handleImageLoad } = useImageLoad()

  return (
    <div className={styles.postItem}>
      <div>
        <h5>{author}</h5>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>

      <LazyLoadImage
        alt='Post Image'
        src={image}
        effect='blur'
        width={300}
        height={300}
        className={`${styles.image} ${imageLoaded ? styles.imageLoaded : ''}`}
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default PostItem
