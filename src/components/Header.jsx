import styles from './Header.module.css';
import logoSl from '../assets/logo-sf.png';
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSl} alt='Logo do social feed'/>
      <strong>SocialFeed</strong>    
    </header>
  )
}