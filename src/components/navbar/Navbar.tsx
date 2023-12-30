import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <div className={styles.navbarLinks}>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#services'>Services</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
