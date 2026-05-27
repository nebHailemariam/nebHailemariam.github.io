import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Nebiyou Hailemariam – Resume",
  description:
    "Resume: education, certifications, and experience in AI, machine learning, and software engineering.",
};

export default function Resume() {
  return (
    <main>
      <section className={styles.section}>
        <h2 className={styles.heading}>Education</h2>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>Carnegie Mellon University</h3>
            <div className={styles.entryDate}>Aug 2022 — May 2024</div>
          </div>
          <p className={styles.byline}>
            Master&apos;s in IT, Applied Machine Learning • GPA: 3.93
          </p>
          <p>Focus on deep learning, NLP, and AI systems development.</p>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>Addis Ababa University</h3>
            <div className={styles.entryDate}>Sep 2016 — May 2020</div>
          </div>
          <p className={styles.byline}>
            Bachelor of Science, Computer Science • GPA: 3.8
          </p>
          <p>
            Strong foundation in software engineering, algorithms, and system
            design.
          </p>
        </div>

        <span className={styles.spacer} aria-hidden="true" />

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              <a className="link" href="https://www.toptal.com/">
                Toptal
              </a>
            </h3>
          </div>
          <p className={styles.byline}>Top 3% of Freelance Developers</p>
          <p>
            Recognized as one of the top 3% of freelance developers on
            Toptal&apos;s exclusive talent network.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Certifications</h2>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              <a
                className="link"
                href="/Deep-RL-Course-Certificate.jpg"
                target="_blank"
                rel="noreferrer"
              >
                Hugging Face
              </a>
            </h3>
            <div className={styles.entryDate}>March 2026</div>
          </div>
          <p className={styles.byline}>
            <a
              className="link"
              href="https://huggingface.co/learn/deep-rl-course/unit0/introduction"
              target="_blank"
              rel="noreferrer"
            >
              Deep Reinforcement Learning Course
            </a>
          </p>
          <p>
            Certificate of Excellence for successfully completing the Hugging
            Face Deep Reinforcement Learning Course.
          </p>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              <a
                className="link"
                href="https://academy.langchain.com/certificates/pfsyhfhaui"
              >
                LangChain Academy
              </a>
            </h3>
            <div className={styles.entryDate}>January 2026</div>
          </div>
          <p className={styles.byline}>Project: Deep Agents</p>
          <p>Certificate in building deep agents with LangChain.</p>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              <a
                className="link"
                href="https://academy.langchain.com/certificates/lmvut0v3jc"
              >
                LangChain Academy
              </a>
            </h3>
            <div className={styles.entryDate}>January 2026</div>
          </div>
          <p className={styles.byline}>
            Foundation: Introduction to LangChain - Python
          </p>
          <p>
            Certificate in LangChain foundations for building applications with
            LLMs using Python.
          </p>
        </div>

        <div className={styles.entry}>
          <div className={styles.entryHeader}>
            <h3 className={styles.entryTitle}>
              <a
                className="link"
                href="https://academy.langchain.com/certificates/arzejdkbkn"
              >
                LangChain Academy
              </a>
            </h3>
            <div className={styles.entryDate}>October 2025</div>
          </div>
          <p className={styles.byline}>Foundation: Introduction to LangGraph</p>
          <p>
            Certificate in LangGraph foundations for building stateful,
            multi-actor applications with LLMs.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>
            Software Engineer II, AI at{" "}
            <a className="link" href="https://motivehq.com/">
              Motive
            </a>
          </h3>
          <p className={styles.jobDates}>Aug 2024 – Present</p>
          <ul className={styles.jobList}>
            <li>
              Building and maintaining a multi-tenant car dealership platform
              used by 300+ dealerships across the U.S. and Canada, serving
              millions of users, leveraging Python (FastAPI), Ruby on Rails, and
              React.
            </li>
            <li>
              Developed an agentic conversational system using LangChain,
              LangSmith, FastAPI, and Pydantic, capable of creating and updating
              webpages, performing content analytics, and generating
              SEO-optimized blog posts, enabling dealership admins to scale
              content automation.
            </li>
            <li>
              Fine-tuned lightweight reranker models using PyTorch, Sentence
              Transformers, Hugging Face, and Vertex Workbench to improve search
              result relevance and boost conversion rates.
            </li>
            <li>
              Set up training and deployment pipelines on GCP Vertex AI (Cloud
              Storage, Artifact Registry, Vertex Training, Vertex Model, Vertex
              Endpoint) and used Weights & Biases for experiment tracking and
              monitoring.
            </li>
            <li>
              Utilized the pytest framework to test AI microservice
              functionality, structuring tests with the Arrange–Act–Assert
              pattern for clarity and maintainability.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>
            Software Engineer, AI at{" "}
            <a className="link" href="https://eezly.com/">
              eezly
            </a>
          </h3>
          <p className={styles.jobDates}>Aug 2024 – March 2025</p>
          <ul className={styles.jobList}>
            <li>
              Worked on eezly, a grocery price comparison application used by
              over 30,000+ users, leveraging ASP.NET Core Web API, Python
              (FastAPI), PyTorch, and cloud-based microservices to build
              scalable, AI-driven app.
            </li>
            <li>
              Built a Recipe Recommendation System using LangChain, OpenAI, and
              the Recipe1M+ dataset, creating a Retrieval-Augmented Generation
              (RAG) system to suggest recipes based on the products users
              purchase. Incorporated the Weaviate vector database to enhance
              search and recommendation.
            </li>
            <li>
              Employed PyTorch and Hugging Face to train hierarchical
              machine-learning models for classifying retail products from
              various stores (e.g., Walmart) into aisles, categories, and
              subcategories.
            </li>
            <li>
              Integrated Gorse, a recommender system, and contributed to
              open-source recommender systems.
            </li>
            <li>
              Designed and implemented RESTful APIs for inventory management
              using n-tier architecture and developed a single-page application
              with React.js.
            </li>
            <li>
              Implemented OAuth 2.0 client-credential flow using OpenIddict for
              secure machine-to-machine communication, Single Sign-On (Firebase,
              Cognito), and ASP.NET Core Identity for user management.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>LeetCode</h2>
        <p className={styles.leetcodeIntro}>
          <a
            className="link"
            href="https://leetcode.com/u/nebhailemariam/"
            target="_blank"
            rel="noreferrer"
          >
            <em className={styles.italicText}>LeetCode</em>
          </a>{" "}
          progress — algorithms and data structures:
        </p>
        <a
          href="https://leetcode.com/u/nebhailemariam/"
          target="_blank"
          rel="noreferrer"
          className={styles.leetcodeLink}
        >
          <img
            src="https://github-readme-leetcode-card.romitsagu.com/nebhailemariam?theme=nord&hide_border=true&width=400"
            alt="LeetCode profile stats"
            width={400}
            height={155}
            loading="lazy"
            className={styles.leetcodeImage}
          />
        </a>
      </section>
    </main>
  );
}
