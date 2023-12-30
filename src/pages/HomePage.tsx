import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero-section/HeroSection'
import PostList from '../components/posts/post-list/PostList'

interface Post {
  id: number
  title: string
  body: string
}

const posts: Post[] = [
  { id: 1, title: 'Post 1', body: 'This is the content of post 1.' },
  { id: 2, title: 'Post 2', body: 'This is the content of post 2.' },
  { id: 3, title: 'Post 3', body: 'This is the content of post 3.' }
]

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PostList posts={posts} />
    </div>
  )
}

export default HomePage
