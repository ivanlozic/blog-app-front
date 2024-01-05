import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Logo</div>
      <div className={styles.navbarLinks}>
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contribute">Contribute</Link>
        <Link to="/contact">Contact</Link>
        <button>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
