interface Post {
  id: number
  title: string
  body: string
}

export const posts: Post[] = [
  { id: 1, title: 'Post 1', body: 'This is the content of post 1.' },
  { id: 2, title: 'Post 2', body: 'This is the content of post 2.' },
  { id: 3, title: 'Post 3', body: 'This is the content of post 3.' }
]
