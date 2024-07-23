import styles from '@/styles/layout.module.scss'
import Section from '@/components/Section'
import Heading from '@/components/Heading';

export default function About() {
  return (
    <>
      <Section>
        <Heading text="ABOUT" />
        <p className={styles.text}>          
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
          </br>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
          </br>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </Section>

      <Section>
        <Heading text="SKILLS" />
        <p className={styles.text}>
          •HTML<br />
          •CSS(SCSS)<br />
          •JavaScript(jQuery)<br />
          •Pug<br />
          •WordPress<br />
          •Adobe Illustrator<br />
          •Adobe Photoshop<br />
          •Adobe XD<br />
        </p>
      </Section>
    </>
  );
}