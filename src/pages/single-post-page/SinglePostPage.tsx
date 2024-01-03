import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { posts } from '../../constants/constants'
import styles from './SinglePostPage.module.css'
import { Routes } from '../../routes/routesList'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'

const SinglePostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id.toString() === id)
  const images = [img1, img2, img3, img4]
  const imageIndex = post!.id - 1

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
      <div className={styles.postItem}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <img src={images[imageIndex]} width={300} height={300} />
      </div>
      <Link to={Routes.ROOT} className={styles.link}>
        <button className={styles.button}>Go to Posts</button>
      </Link>
    </div>
  )
}

export default SinglePostPage
