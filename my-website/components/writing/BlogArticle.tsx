import Link from "next/link";
import BlogMarkdown from "./BlogMarkdown";
import type { BlogPost } from "@/lib/writing";
import styles from "./BlogPost.module.scss";

type BlogArticleProps = {
  post: BlogPost;
};

export default function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className={styles.section}>
      <Link href="/writing" className={`link ${styles.backLink}`}>
        ← Writing
      </Link>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.byline}>
          <span className={styles.category}>{post.category}</span>
          <span className={styles.bylineSep}>·</span>
          <time dateTime={post.dateIso}>{post.date}</time>
        </p>
      </header>
      <BlogMarkdown content={post.content} />
    </article>
  );
}
