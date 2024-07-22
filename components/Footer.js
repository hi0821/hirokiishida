import styles from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <p className={styles.footer_copy}>© HIROKI ISHIDA</p>
      </div>
    </footer>
  );
}