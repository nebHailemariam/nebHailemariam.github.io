import BlogItem from "./BlogItem";
import type { BlogCategory } from "@/lib/writing";
import styles from "./BlogSection.module.scss";

type BlogSectionProps = {
  section: BlogCategory;
};

export default function BlogSection({ section }: BlogSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{section.name}</h2>
      <ul className={styles.list}>
        {section.posts.map((post) => (
          <BlogItem key={post.slug} post={post} />
        ))}
      </ul>
    </section>
  );
}
