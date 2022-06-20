import { Link } from "react-router-dom";
import logo from '../assets/valorant-logo.png';
import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <ul className={styles.principalContainer}>
      <li className={styles.liContainer}><Link to="/"><img src={logo} alt="" className={styles.logo} /></Link></li>
      <li className={styles.liContainer}><Link className={styles.linkContainer} to= "/">MAPAS</Link></li>
      <li className={styles.liContainer}><Link className={styles.linkContainer} to= "/">ARMAS</Link></li>
    </ul>
  )
}