import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../../constants/constants'
import styles from './SinglePostPage.module.css'
import NotFoundPage from '../404/NotFoundPage'

const SinglePostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id.toString() === id)

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <div className={styles.container}>
      <div className={styles.postItem}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        {post.image && (
          <img src={post.image} alt='Post Image' width={300} height={300} />
        )}
      </div>
      <Link to='/' className={styles.link}>
        <button className={styles.button}>Go to Posts</button>
      </Link>
    </div>
  )
}

export default SinglePostPage
