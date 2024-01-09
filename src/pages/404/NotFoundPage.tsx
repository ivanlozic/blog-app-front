import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, countdown * 1000)

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [navigate, countdown])

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404 - Page Not Found</h1>
      <p className={styles.message}>
        The page you are looking for might be under construction or does not
        exist.
      </p>
      <p className={styles.redirectMessage}>
        Redirecting to the home page in {countdown} seconds...
      </p>
    </div>
  )
}

export default NotFoundPage
