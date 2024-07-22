import styles from '@/styles/heading.module.scss'

export default function heading(props){
  return (
    <h2 className={styles.heading}>{props.text}</h2>
  );
}