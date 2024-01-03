export interface Post {
  id: number
  author: string
  title: string
  body: string
}

export const posts: Post[] = [
  {
    id: 1,
    author: 'Ivan Lozic',
    title: 'Post 1',
    body: 'This is the content of post 1.'
  },
  {
    id: 2,
    author: 'Ivan Lozic',
    title: 'Post 2',
    body: 'This is the content of post 2.'
  },
  {
    id: 3,
    author: 'Ivan Lozic',
    title: 'Post 3',
    body: 'This is the content of post 3.'
  },
  {
    id: 4,
    author: 'Ivan Lozic',
    title: 'Post 4',
    body: 'This is the content of post 4.'
  }
]
