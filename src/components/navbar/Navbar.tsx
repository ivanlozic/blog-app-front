import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Routes } from '../../routes/routesList'
import LogInModal from './log-in-modal/LogInModal'
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  const handleSignInClick = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <div className={styles.navbarLinks}>
        <Link to={Routes.HOME}>Home</Link>
        <Link to={Routes.CONTRIBUTE}>Contribute</Link>
        <button onClick={handleSignInClick}>Log in</button>
      </div>
      {showModal && (
        <LogInModal isModalOpen={true} onClose={handleModalClose} />
      )}
    </nav>
  )
}

export default Navbar
