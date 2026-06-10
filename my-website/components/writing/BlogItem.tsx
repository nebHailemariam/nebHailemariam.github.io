import Link from "next/link";
import type { BlogPostMeta } from "@/lib/writing";
import styles from "./BlogItem.module.scss";

type BlogItemProps = {
  post: BlogPostMeta;
};

export default function BlogItem({ post }: BlogItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.itemHeader}>
        <Link href={`/writing/${post.slug}`} className={styles.itemTitle}>
          {post.title}
        </Link>
        <time className={styles.itemDate} dateTime={post.dateIso}>
          {post.date}
        </time>
      </div>
      <p className={styles.itemExcerpt}>{post.excerpt}</p>
    </li>
  );
}
