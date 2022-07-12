import { Link } from "react-router-dom";
import logo from '../assets/valorant-logo.png';
import styles from '../styles/Header.module.css';

export function Header() {
  return (
    <ul className={styles.principalContainer}>
      <div className={styles.divLogoContainer}>
        <li className={styles.liLogoContainer}><Link to="/"><img src={logo} alt="" className={styles.logo} /></Link></li>
      </div>
      <div className={styles.divLiContainer}>
        <li className={styles.liContainer}><Link className={styles.linkContainer} to= "/">INICIO</Link></li>
        <li className={styles.liContainer}><Link className={styles.linkContainer} to= "/">AGENTES</Link></li>
        <li className={styles.liContainer}><Link className={styles.linkContainer} to= "/">ARMAS</Link></li>
      </div>
    </ul>
  )
}