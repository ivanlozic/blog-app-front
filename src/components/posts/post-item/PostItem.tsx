import React from 'react'
import styles from './PostItem.module.css'
import { Post } from '../../../constants/constants'

const PostItem: React.FC<Post> = ({ author, title, body, image }) => {
  return (
    <div className={styles.postItem}>
      <div>
        <h5>{author}</h5>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>

      <img src={image} alt={`Image for ${title}`} />
    </div>
  )
}

export default PostItem
