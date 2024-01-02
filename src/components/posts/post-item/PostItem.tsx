import React from 'react'
import styles from './PostItem.module.css'

interface Post {
  id: number
  title: string
  body: string
}

interface PostItemProps {
  post: Post
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className={styles.postItem}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem
