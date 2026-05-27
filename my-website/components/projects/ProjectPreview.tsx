import Image from "next/image";
import styles from "./ProjectPreview.module.scss";

type ProjectPreviewProps = {
  href: string;
  src: string;
  alt: string;
};

export default function ProjectPreview({ href, src, alt }: ProjectPreviewProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.previewLink}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={630}
        sizes="(min-width: 768px) 280px, 100vw"
        className={styles.previewImage}
      />
    </a>
  );
}
