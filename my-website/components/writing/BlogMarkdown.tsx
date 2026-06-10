import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./BlogMarkdown.module.scss";

type BlogMarkdownProps = {
  content: string;
};

export default function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
