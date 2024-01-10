import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PostList.module.css'
import PostItem from '../post-item/PostItem'
import { Post } from '../../interfaces/interfaces'
import { Routes } from '../../../routes/routesList'

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${Routes.SINGLE_POST.replace(':id', String(post.id))}`}>
              <PostItem {...post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
