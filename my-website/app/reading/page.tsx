import type { Metadata } from "next";
import ReadingSection from "@/components/reading/ReadingSection";
import { readingSections } from "@/components/reading/reading-data";

export const metadata: Metadata = {
  title: "Nebiyou Hailemariam – Reading",
  description:
    "Reading list: articles, books, research papers, and courses.",
};

export default function ReadingPage() {
  return (
    <main>
      {readingSections.map((section) => (
        <ReadingSection key={section.title} section={section} />
      ))}
    </main>
  );
}
