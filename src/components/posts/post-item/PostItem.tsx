import React from 'react'
import styles from './PostItem.module.css'
import { Post } from '../../../constants/constants'
import img1 from '../../../assets/images/1.jpg'
import img2 from '../../../assets/images/2.jpg'
import img3 from '../../../assets/images/3.jpg'
import img4 from '../../../assets/images/4.jpg'

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const images = [img1, img2, img3, img4]
  const imageIndex = post.id - 1

  return (
    <div className={styles.postItem}>
      <div>
        <h5>{post.author}</h5>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>

      <img src={images[imageIndex]} />
    </div>
  )
}

export default PostItem
