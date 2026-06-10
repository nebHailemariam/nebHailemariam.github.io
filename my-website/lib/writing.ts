import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateIso: string;
  excerpt: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type BlogCategory = {
  name: string;
  posts: BlogPostMeta[];
};

type PostFrontmatter = {
  title: string;
  date: string;
  category?: string;
  excerpt: string;
};

const postsDirectory = path.join(process.cwd(), "content/writing");
const postFileName = "index.md";
const defaultCategory = "Essays";

function formatPostDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getPostFilePath(slug: string): string {
  return path.join(postsDirectory, slug, postFileName);
}

/** Rewrite relative image paths to /writing/{slug}/... for static serving. */
function resolveAssetPaths(content: string, slug: string): string {
  return content.replace(
    /(!\[[^\]]*\]\()([^)]+)(\))/g,
    (_match, prefix: string, url: string, suffix: string) => {
      if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("/")
      ) {
        return `${prefix}${url}${suffix}`;
      }

      const assetPath = url.replace(/^\.\//, "");
      return `${prefix}/writing/${slug}/${assetPath}${suffix}`;
    }
  );
}

function parsePostMeta(
  slug: string,
  frontmatter: PostFrontmatter
): BlogPostMeta {
  return {
    slug,
    title: frontmatter.title,
    category: frontmatter.category?.trim() || defaultCategory,
    date: formatPostDate(frontmatter.date),
    dateIso: frontmatter.date,
    excerpt: frontmatter.excerpt,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(getPostFilePath(slug)));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = getPostFilePath(slug);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;

  return {
    ...parsePostMeta(slug, frontmatter),
    content: resolveAssetPaths(content.trim(), slug),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const filePath = getPostFilePath(slug);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data } = matter(raw);
      const frontmatter = data as PostFrontmatter;

      return {
        ...parsePostMeta(slug, frontmatter),
        sortDate: frontmatter.date,
      };
    })
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .map(({ sortDate: _sortDate, ...post }) => post);
}

export function getPostsByCategory(): BlogCategory[] {
  const grouped = new Map<string, BlogPostMeta[]>();

  for (const post of getAllPosts()) {
    const posts = grouped.get(post.category) ?? [];
    posts.push(post);
    grouped.set(post.category, posts);
  }

  return Array.from(grouped.entries())
    .map(([name, posts]) => ({ name, posts }))
    .sort((a, b) => b.posts[0].dateIso.localeCompare(a.posts[0].dateIso));
}
