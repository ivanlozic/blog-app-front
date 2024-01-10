import { Post } from '../components/interfaces/interfaces'

export const posts: Post[] = [
  {
    id: 1,
    author: 'Ivan Lozic',
    title: 'Post 1',
    body: 'This is the content of post 1.',
    image: 'https://source.unsplash.com/800x600/?nature',
    hashtags: ['React', 'JavaScript']
  },
  {
    id: 2,
    author: 'Ivan Lozic',
    title: 'Post 2',
    body: 'This is the content of post 2.',
    image: 'https://source.unsplash.com/800x600/?technology',
    hashtags: ['JavaScript', 'Node.js']
  },
  {
    id: 3,
    author: 'Ivan Lozic',
    title: 'Post 3',
    body: 'This is the content of post 3.',
    image: 'https://source.unsplash.com/800x600/?coding',
    hashtags: ['React', 'HTML']
  },
  {
    id: 4,
    author: 'Ivan Lozic',
    title: 'Post 4',
    body: 'This is the content of post 4.',
    image: 'https://source.unsplash.com/800x600/?programming',
    hashtags: ['Python', 'CSS']
  }
]

export const topics = [
  'React',
  'JavaScript',
  'Python',
  'Node.js',
  'CSS',
  'HTML'
]
