import { notFound } from "next/navigation";
import BlogArticle from "@/components/writing/BlogArticle";
import { getPostBySlug, getPostSlugs } from "@/lib/writing";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main>
      <BlogArticle post={post} />
    </main>
  );
}
