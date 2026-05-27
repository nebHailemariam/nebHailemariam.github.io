import styles from "./ProjectsIntro.module.scss";

export default function ProjectsIntro() {
  return (
    <section className={styles.intro}>
      <h2 className={styles.heading}>Open Source</h2>
      <div className={styles.introText}>
        <p>
          I work on machine learning projects, natural language processing, and{" "}
          <em className={styles.emphasis}>open-source contributions</em>. I
          enjoy building tools and exploring different areas of AI,
          particularly, graph machine learning and deep learning.
        </p>
        <p>
          The projects here include building autograd engines, contributing to
          recommender systems, and working on NLP research for low-resource
          languages.
        </p>
        <p>
          If you find something interesting or want to collaborate,{" "}
          <a
            className="link"
            href="mailto:nebhailema@gmail.com?subject=Software%20Projects"
          >
            let me know
          </a>
          !
        </p>
      </div>
    </section>
  );
}
