import React, { useState } from 'react'
import styles from './LogInModal.module.css'

interface LoginCredentials {
  email: string
  password: string
}

interface LogInModalProps {
  isModalOpen?: boolean
  onClose: () => void
}

const LogInModal = ({ isModalOpen, onClose }: LogInModalProps) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isModalVisible] = useState(isModalOpen ?? false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: event.target.value })
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!credentials.email || !credentials.password) {
      setErrorMessage('Please enter both email and password.')
      return
    }

    try {
      const response = await fetch('/api/zlogin', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok) {
        onClose()
      } else {
        setErrorMessage(data.error)
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('An unexpected error occurred. Please try again later.')
    }
  }

  return (
    <div className={`${styles.modal} ${isModalVisible ? styles.visible : ''}`}>
      <div className={styles.modalContent}>
        <h2>Log In</h2>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={credentials.email}
              onChange={handleEmailChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={credentials.email}
              onChange={handlePasswordChange}
              required
              className={styles.input}
            />
          </div>
          <button type='submit' className={styles.loginButton}>
            Log In
          </button>
        </form>
        <p>
          Don't have an account? <a href='/register'>Register here</a>
        </p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  )
}

export default LogInModal
