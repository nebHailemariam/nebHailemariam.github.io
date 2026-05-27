import ReadingItem from "./ReadingItem";
import type { ReadingSection as ReadingSectionData } from "./reading-data";
import styles from "./ReadingSection.module.scss";

type ReadingSectionProps = {
  section: ReadingSectionData;
};

export default function ReadingSection({ section }: ReadingSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{section.title}</h2>
      <div className={styles.list}>
        {section.items.map((item) => (
          <ReadingItem key={item.href} item={item} />
        ))}
      </div>
    </section>
  );
}
