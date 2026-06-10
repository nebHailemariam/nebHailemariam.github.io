import BlogSection from "./BlogSection";
import type { BlogCategory } from "@/lib/writing";
import styles from "./BlogList.module.scss";

type BlogListProps = {
  categories: BlogCategory[];
};

export default function BlogList({ categories }: BlogListProps) {
  if (categories.length === 0) {
    return <p className={styles.status}>No posts yet.</p>;
  }

  return (
    <>
      {categories.map((section) => (
        <BlogSection key={section.name} section={section} />
      ))}
    </>
  );
}
