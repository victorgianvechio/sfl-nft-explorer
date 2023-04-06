import styles from './Header.module.css';

import igniteLogo from '../assets/sunflower-logo.png'

export function Header() {
  return (
    <header className={styles.header}> 
      <div className={styles.headerContainer}>
        <img src={igniteLogo} alt="logotipo do ignite" />
        <span className={styles.headerTitle}>Sunflower Land - NFT Collection Explorer</span>
      </div>
    </header>
  )
}