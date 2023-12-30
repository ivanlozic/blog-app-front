import React from 'react'
import styles from './PostList.module.css'
import PostItem from '../post-item/PostItem'

interface Post {
  id: number
  title: string
  body: string
}

interface PostListProps {
  posts: Post[]
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  )
}

export default PostList
