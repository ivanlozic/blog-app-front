import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/hero-section/HeroSection'
import PostList from '../../components/posts/post-list/PostList'
import { posts } from '../../constants/constants'
import styles from './HomePage.module.css'
import TopicSelector from '../../components/topic-selector/TopicSelector'

const HomePage: React.FC = () => {
  const handleTopicSelect = (topic: string) => {
    console.log(`Selected topic: ${topic}`)
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <HeroSection />
      <div className={styles.postListContainer}>
        <PostList posts={posts} />
        <p>Ovo je novi feature</p>
      </div>
      <div className={styles.topicSelectorContainer}>
        <TopicSelector onSelectTopic={handleTopicSelect} />
      </div>{' '}
    </div>
  )
}

export default HomePage
