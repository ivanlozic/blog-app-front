import React, { useState } from 'react'
import styles from './ContributePage.module.css'
import { Post, posts } from '../../constants/constants'

const ContributePage = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [text, setText] = useState('')
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([])

  const topics = ['React', 'JavaScript', 'Python', 'Node.js', 'CSS', 'HTML']

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      setImage(file)
    }
  }

  const toggleHashtag = (hashtag: string) => {
    const isSelected = selectedHashtags.includes(hashtag)
    setSelectedHashtags((prevSelected) => {
      if (isSelected) {
        return prevSelected.filter((selected) => selected !== hashtag)
      } else {
        return [...prevSelected, hashtag]
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const newPost: Post = {
          id: posts.length + 1,
          author: 'Your Name',
          title,
          body: text,
          image: reader.result as string,
          hashtags: selectedHashtags
        }

        posts.push(newPost)

        console.log('Updated Posts:', posts)
      }

      reader.readAsDataURL(image)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contribute Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='image'>Upload Image:</label>
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={handleFileChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='text'>Text:</label>
          <textarea
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='hashtags'>Select Hashtags:</label>
          <div className={styles.hashtagsContainer}>
            {topics.map((topic) => (
              <button
                key={topic}
                type='button'
                className={
                  selectedHashtags.includes(topic)
                    ? styles.selectedHashtag
                    : styles.hashtag
                }
                onClick={() => toggleHashtag(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <button className={styles.submitButton} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContributePage
