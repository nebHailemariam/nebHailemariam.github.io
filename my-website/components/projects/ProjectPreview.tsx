import styles from "./ProjectPreview.module.scss";

type ProjectPreviewProps = {
  href: string;
  src: string;
  alt: string;
};

export default function ProjectPreview({
  href,
  src,
  alt,
}: ProjectPreviewProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.previewLink}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={styles.previewImage}
      />
    </a>
  );
}
