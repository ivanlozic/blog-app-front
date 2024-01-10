import React from 'react'
import { posts } from '../../constants/constants'
import styles from './ContributePage.module.css'
import ContributeForm, { FormValues } from './contribute-form/ContributeForm'
import { Post } from '../../components/interfaces/interfaces'

const ContributePage: React.FC = () => {
  const onSubmit = (data: FormValues) => {
    if (data.image && data.image[0]) {
      const reader = new FileReader()

      reader.onloadend = () => {
        const newPost: Post = {
          id: posts.length + 1,
          author: 'Your Name',
          title: data.title,
          body: data.text,
          image: reader.result as string,
          hashtags: data.hashtags
        }

        posts.push(newPost)

        console.log('Updated Posts:', posts)
      }

      reader.readAsDataURL(data.image[0])
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contribute Page</h1>
      <ContributeForm onSubmit={onSubmit} />
    </div>
  )
}

export default ContributePage
