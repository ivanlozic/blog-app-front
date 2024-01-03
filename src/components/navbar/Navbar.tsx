import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <div className={styles.navbarLinks}>
        <a href='#home'>Home</a>
        <a href='#about'>About us</a>
        <a href='#about'>Contribute</a>
        <a href='#contact'>Contact</a>
        <button>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
