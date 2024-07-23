import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import styles from '@/styles/layout.module.scss'
import Musthead from '@/components/Musthead'
import Section from '@/components/Section'
import Heading from '@/components/Heading'
import Cardlist from '@/components/Cardlist'
import Card from '@/components/Card'

export default async function Posts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace('.md', ''),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  );

  return (
    <>
      <Section musthead>
        <Musthead />
      </Section>

      <Section>
        <Heading text="ABOUT" />
        <p className={styles.text}>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
          </br>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br>
          </br>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <div className={`${styles.flex} ${styles.flex_end} ${styles.button_next}`}>
          <Link href="/about/">READ MORE</Link>
        </div>
      </Section>

      <Section>
        <Heading text="WORKS" />
        <Cardlist>
          {posts.slice(0, 3).map((post) => (
            <Card
              key={post.slug}
              link={`/works/${post.slug}`}
              src={`${BASE_PATH}/${post.frontmatter.thumbnail}`}
              width={1000}
              height={400}
              alt={post.frontmatter.title}
              category={post.frontmatter.cat}
              title={post.frontmatter.title}
            />
          ))}
        </Cardlist>
        <div className={`${styles.flex} ${styles.flex_end} ${styles.button_next}`}>
          <Link href="/works/">READ MORE</Link>
        </div>
      </Section>
    </>
  );
}