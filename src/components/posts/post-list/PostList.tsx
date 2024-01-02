import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PostList.module.css';
import PostItem from '../post-item/PostItem';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postList}>
      <h2>Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} >
              <PostItem post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
