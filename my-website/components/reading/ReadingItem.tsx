import type { ReadingItem } from "./reading-data";
import styles from "./ReadingItem.module.scss";

type ReadingItemProps = {
  item: ReadingItem;
};

export default function ReadingItem({ item }: ReadingItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.itemHeader}>
        <a
          href={item.href}
          className={styles.itemTitle}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
          <span className={styles.externalIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
        {item.meta ? <div className={styles.itemMeta}>{item.meta}</div> : null}
      </div>
      <p className={styles.itemDescription}>{item.description}</p>
    </li>
  );
}
