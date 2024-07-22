import Logo from '@/components/Logo'
import Navigation from '@/components/Navigation'
import styles from '@/styles/header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}