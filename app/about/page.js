import styles from '@/styles/layout.module.scss'
import Section from '@/components/Section'
import Heading from '@/components/Heading';

export default function About() {
  return (
    <>
      <Section>
        <Heading text="ABOUT" />
        <p className={styles.text}>          
          Hiroki Ishida / 石田 寛基<br />
          I'm a Web engineer based in Tokyo.<br />
          <br />
          1989 Born in Akita Japan<br />
          2008 Graduate School of Akita Commercial High School(秋田商業高等学校)<br />
          2020 Starting work as Web engineer at Asakusa<br />
          2021 Starting work at current company at Higashi Nihonbashi.
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