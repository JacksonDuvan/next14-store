import styles from './Footer.module.sass';

export const Footer = () => {

  return (
    <footer className={styles.Footer}>
      <p>Future world © {new Date().getFullYear()}</p>
    </footer>
  )
}