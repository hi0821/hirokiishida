import styles from '@/styles/cardlist.module.scss'

export default function Cardlist({children}) {
  return (
    <div className={styles.cardlist}>
      {children}
    </div>
  );
}