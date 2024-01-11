import React, { useState } from 'react'
import styles from './RegisterPage.module.css'

interface RegisterCredentials {
  email: string
  password: string
  confirmPassword: string
}

const RegisterPage = () => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: event.target.value })
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, password: event.target.value })
  }

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCredentials({ ...credentials, confirmPassword: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !credentials.email ||
      !credentials.password ||
      credentials.password !== credentials.confirmPassword
    ) {
      setErrorMessage(
        'Please enter valid email, password, and confirm password.'
      )
      return
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()

      if (response.ok) {
        alert('Registration successful!')
      } else {
        setErrorMessage(data.error)
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('An unexpected error occurred. Please try again later.')
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.container}>
        <h2>Register</h2>
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
              value={credentials.password}
              onChange={handlePasswordChange}
              required
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              id='confirmPassword'
              value={credentials.confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
              className={styles.input}
            />
          </div>
          <button type='submit' className={styles.registerButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
