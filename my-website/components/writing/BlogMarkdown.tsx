import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import styles from "./BlogMarkdown.module.scss";

type BlogMarkdownProps = {
  content: string;
};

function parseImageWidth(title?: string): number | undefined {
  if (!title) return undefined;

  const match = title.trim().match(/^(\d+)\s*(px)?$/i);
  if (!match) return undefined;

  return Number(match[1]);
}

export default function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          img: ({ src, alt, title }) => {
            const width = parseImageWidth(title);

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ""}
                style={
                  width
                    ? { width, maxWidth: "100%", height: "auto" }
                    : undefined
                }
              />
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
