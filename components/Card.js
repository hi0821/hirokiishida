import styles from '@/styles/card.module.scss'
import Link from 'next/link'
// import Image from 'next/image'

export default function Card(props) {
  return (
    <div className={styles.card}>
      <Link href={props.link}>
        <figure className={styles.card_image}>
          <img
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
          />
        </figure>
        <span className={styles.card_category}>{props.category}</span>
        <p className={styles.card_title}>{props.title}</p>
      </Link>
    </div>
  );
}