import Image from "next/image";
import styles from "./page.module.scss";

const techStacks = [
  {
    label: "AI/ML development stack",
    items:
      "PyTorch • PyGeometric • Sentence Transformers • Pandas • NumPy • LangChain • Hugging Face",
  },
  {
    label: "backend frameworks",
    items: "FastAPI • Ruby on Rails • ASP.NET Core • Express",
    aside: "Python • Ruby • C# • Node.js",
  },
  {
    label: "front-end frameworks",
    items: "React • JavaScript • SCSS",
    aside: "user interfaces",
  },
  {
    label: "cloud platforms and MLOps",
    items: "GCP Vertex AI • AWS • Weights & Biases • Docker",
  },
  {
    label: "AI frameworks and databases",
    items: "Weaviate • PostgreSQL • MongoDB",
    aside: "RAG systems",
  },
  {
    label: "testing and development tools",
    items: "pytest • XUnit • WebApplicationFactory",
    aside: "unit & integrationt tests",
  },
] as const;

export default function Home() {
  return (
    <main>
      <p className={styles.hero}>
        <span className={styles.grayText}>is a</span> software engineer
        <span className={styles.grayText}>,</span>
        <br />
        machine learning engineer<span className={styles.grayText}>, and</span>
        <br />
        researcher<span className={styles.grayText}>.</span>
      </p>

      <div className={styles.content}>
        <div className={styles.copyBlock}>
          <p>
            I&apos;m currently working as an{" "}
            <strong>AI Software Engineer</strong> at{" "}
            <a className="link" href="https://motivehq.com/">
              Motive
            </a>
            , a car dealership platform serving{" "}
            <strong>millions of users</strong>, where I build{" "}
            <em className={styles.italicText}>recommendation systems</em> and{" "}
            <em className={styles.italicText}>conversational AI systems</em>.
          </p>
          <p>
            I enjoy working on{" "}
            <em className={styles.italicText}>machine learning problems</em>{" "}
            that have <strong>real business impact</strong>, from recommendation
            systems to natural language processing.
          </p>
          <p>
            I&apos;m particularly interested in building{" "}
            <em className={styles.italicText}>scalable software systems</em>{" "}
            that use AI, with a focus on{" "}
            <strong>custom recommendation systems</strong> and{" "}
            <strong>graph machine learning</strong>. I also enjoy working on{" "}
            <em className={styles.italicText}>
              deploying models to production
            </em>
            , <em className={styles.italicText}>monitoring</em>, and{" "}
            <em className={styles.italicText}>testing software systems</em>{" "}
            using the <strong>Arrange–Act–Assert pattern</strong>.
          </p>
          <p>
            I&apos;m a{" "}
            <strong>
              <a className="link" href="https://www.toptal.com/">
                Toptal-accepted engineer
              </a>
            </strong>
            , having passed their rigorous screening process — only{" "}
            <strong>3%</strong> of applicants pass their screening.
          </p>
          <p className={styles.leetcodeText}>
            I also solve <strong>algorithm</strong> and{" "}
            <strong>data structure</strong> problems on{" "}
            <a
              className="link"
              href="https://leetcode.com/u/nebhailemariam/"
              target="_blank"
              rel="noreferrer"
            >
              <em className={styles.italicText}>LeetCode</em>
            </a>{" "}
            when I get the chance.
          </p>
          <p className={styles.leetcodeImage}>
            <a
              href="https://leetcode.com/u/nebhailemariam/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://github-readme-leetcode-card.romitsagu.com/nebhailemariam?theme=nord&hide_border=true&width=400"
                alt="LeetCode profile stats"
                width={400}
                height={155}
                loading="lazy"
              />
            </a>
          </p>
        </div>

        <div className={styles.techSection}>
          <p className={styles.techHeading}>Technologies I work with:</p>
          {techStacks.map((stack) => (
            <div key={stack.label} className={styles.projectPair}>
              <div className={styles.categoryLabel}>{stack.label}</div>
              <div>
                <p>{stack.items}</p>
                {"aside" in stack && stack.aside ? (
                  <aside className={styles.grayText}>{stack.aside}</aside>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.copyBlock}>
          <p>Other interests: reading, playing the guitar, and exercising.</p>
        </div>

        <div className={styles.profileBlock}>
          <Image
            src="/profile.jpeg"
            alt="Self-portrait photograph of Nebiyou Hailemariam at his desk"
            width={768}
            height={512}
            className={styles.profileImage}
            priority
          />
        </div>
      </div>
    </main>
  );
}
