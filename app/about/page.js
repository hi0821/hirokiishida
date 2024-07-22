import styles from '@/styles/layout.module.scss'
import Section from '@/components/Section'
import Heading from '@/components/Heading';

export default function About() {
  return (
    <>
      <Section>
        <Heading text="ABOUT" />
        <p className={styles.text}>          
          東京でフロントエンド、マークアップエンジニアをしています。<br />
          1989年秋田県生まれ<br />
          自動車ガラスのサービス業(エンジニア)、バイクメディアサイトの広告営業をへてWEB業界へ転職。<br />
          タスクランナー、ワードプレスを使用したWEBサイト制作と某新聞メディアのLP制作、運用を主に行なっています。
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