import Link from "next/link";
import styles from '@/styles/logo.module.scss'

export default function Logo() {
  return (
    <h1>
      <Link className={styles.logo} href="/">HIROKI ISHIDA</Link>
    </h1>
  );
}