import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Link from 'next/link'
import Section from '@/components/Section'
import styles from '@/styles/posts.module.scss'

const postsDirectory = path.join(process.cwd(), 'posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map(filename => filename.replace(/\.md$/, ''));
  const params = slugs.map(slug => ({ slug }));
  
  console.log('Generated params:', params); // デバッグ用のログ出力
  return params;
}

// ブログ記事ページ
export default async function BlogPost({ params }) {
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title;
  const cat = data.cat;
  const date = data.date;
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString();

  return (
    <Section>
      <div className={styles.post}>
        <h1 className={styles.post_heading}>{title}</h1>
        <span className={styles.post_category}>{cat}</span>
        <span className={styles.post_date}>{date}</span>
        <div className={styles.post_block} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        <div className={styles.post_backButton}>
          <Link href="/works/">BACK</Link>
        </div>
      </div>
    </Section>
  );
}
