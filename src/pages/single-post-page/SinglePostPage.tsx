import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PostItem from '../../components/posts/post-item/PostItem'
import { posts } from '../../constants/constants'
import styles from './SinglePostPage.module.css'
import { Routes } from '../../routes/routesList'

const SinglePostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id.toString() === id)

  if (!post) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>Post not found!</p>
        <Link to={Routes.ROOT} className={styles.link}>
          <button className={styles.button}>Go to Posts</button>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <PostItem post={post} />
      <Link to={Routes.ROOT} className={styles.link}>
        <button className={styles.button}>Go to Posts</button>
      </Link>
    </div>
  )
}

export default SinglePostPage
