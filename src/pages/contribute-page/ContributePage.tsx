import React, { useState } from 'react'
import styles from './ContributePage.module.css'

const ContributePage = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [image, setImage] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Form submitted:', { title, subtitle, image, text })
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
          <label htmlFor='subtitle'>Subtitle:</label>
          <input
            type='text'
            id='subtitle'
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='image'>Upload Image:</label>
          <input
            type='file'
            id='image'
            accept='image/*'
            onChange={(e) => setImage(e.target.value)}
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

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ContributePage
