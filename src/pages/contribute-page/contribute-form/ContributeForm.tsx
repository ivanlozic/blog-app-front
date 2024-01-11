import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../ContributePage.module.css'

interface ContributeFormProps {
  onSubmit: SubmitHandler<FormValues>
}

export interface FormValues {
  title: string
  image: FileList
  text: string
  hashtags: string[]
}

const ContributeForm: React.FC<ContributeFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<FormValues>()

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          {...register('title', { required: true })}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='image'>Upload Image:</label>
        <input
          type='file'
          id='image'
          accept='image/*'
          onChange={(e) => {
            if (e.target.files) {
              setValue('image', e.target.files)
            }
          }}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='text'>Text:</label>
        <textarea
          id='text'
          {...register('text', { required: true })}
        ></textarea>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='hashtags'>Select Hashtags:</label>
        <div className={styles.hashtagsContainer}>
          {['React', 'JavaScript', 'Python', 'Node.js', 'CSS', 'HTML'].map(
            (topic) => (
              <button
                key={topic}
                type='button'
                className={
                  errors.hashtags
                    ? styles.hashtag
                    : getValues('hashtags')?.includes(topic)
                    ? styles.selectedHashtag
                    : styles.hashtag
                }
                onClick={() => {
                  setValue(
                    'hashtags',
                    getValues('hashtags')
                      ? toggleHashtag(getValues('hashtags'), topic)
                      : [topic]
                  )
                }}
              >
                {topic}
              </button>
            )
          )}
        </div>
      </div>

      <button className={styles.submitButton} type='submit'>
        Submit
      </button>
    </form>
  )
}

export default ContributeForm

function toggleHashtag(hashtags: string[], hashtag: string): string[] {
  const isSelected = hashtags.includes(hashtag)
  return isSelected
    ? hashtags.filter((selected) => selected !== hashtag)
    : [...hashtags, hashtag]
}
