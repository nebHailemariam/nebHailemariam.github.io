"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProjectPreview.module.scss";

type ProjectPreviewWithFallbackProps = {
  href: string;
  src: string;
  alt: string;
  fallbackSrc: string;
};

export default function ProjectPreviewWithFallback({
  href,
  src,
  alt,
  fallbackSrc,
}: ProjectPreviewWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={styles.previewLink}
    >
      <Image
        src={currentSrc}
        alt={alt}
        width={1200}
        height={630}
        sizes="(min-width: 768px) 280px, 100vw"
        className={styles.previewImage}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
    </a>
  );
}
