import nextConfig from "../../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '@/styles/layout.module.scss'
import Section from '@/components/Section'
import Heading from '@/components/Heading'
import Cardlist from '@/components/Cardlist'
import Card from '@/components/Card'

export default async function Works() {
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
      <Section>
        <Heading text="WORKS" />
        <Cardlist>
          {posts.map((post) => (
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
      </Section>
    </>
  );
}