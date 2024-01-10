import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Routes } from '../../routes/routesList'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <div className={styles.navbarLinks}>
        <Link to={Routes.HOME}>Home</Link>
        <Link to={Routes.CONTRIBUTE}>Contribute</Link>
        <button>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
