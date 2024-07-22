import styles from '@/styles/section.module.scss'

export default function Section ({ children, musthead }) {
  const sectionClassName = musthead ? `${styles.section} musthead` : styles.section;

  return (
    <section className={sectionClassName}>
      {children}
    </section>
  );
}