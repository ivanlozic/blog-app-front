import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/hero-section/HeroSection'
import PostList from '../../components/posts/post-list/PostList'
import { posts } from '../../constants/constants'
import styles from './HomePage.module.css'; 

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <div className={styles.postListContainer}>
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default HomePage;