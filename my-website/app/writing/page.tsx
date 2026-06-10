import type { Metadata } from "next";
import BlogList from "@/components/writing/BlogList";
import { getPostsByCategory } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Nebiyou Hailemariam – Writing",
  description: "Essays and notes on machine learning, software, and research.",
};

export default function WritingPage() {
  const categories = getPostsByCategory();

  return (
    <main>
      <BlogList categories={categories} />
    </main>
  );
}
