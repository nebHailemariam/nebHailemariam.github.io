import ProjectPreview from "./ProjectPreview";
import type {
  Project,
  ProjectLink,
  ProjectPreview as ProjectPreviewType,
} from "./projects-data";
import styles from "./ProjectCard.module.scss";

type ProjectCardProps = {
  project: Project;
};

function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <p className={styles.linkRow}>
      {links.map((link, index) => (
        <span key={link.href}>
          {index > 0 ? " · " : null}
          <a className="link" href={link.href} rel="noopener noreferrer">
            {link.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function ProjectPreviewPanel({ preview }: { preview: ProjectPreviewType }) {
  if (preview.type === "paper") {
    return (
      <a href={preview.href} rel="noopener noreferrer" target="_blank">
        <div className={styles.paperPlaceholder}>
          <div className={styles.paperPlaceholderInner}>
            <svg
              className={styles.paperIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className={styles.paperLabel}>{preview.label}</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <ProjectPreview
      href={preview.href}
      src={preview.src}
      alt={preview.alt}
    />
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <section id={project.id} className={styles.projectSection}>
      <div className={styles.inner}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className={styles.markdownContent}>
              <p>{project.description}</p>
              <ProjectLinks links={project.links} />
            </div>
          </div>
          <div className={styles.imageCol}>
            <ProjectPreviewPanel preview={project.preview} />
          </div>
        </div>
      </div>
    </section>
  );
}
