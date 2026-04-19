"use client";
import { useState, useTransition } from "react";
import WorkTemplate from "./WorkTemplate";
import Glow from "../ui/Glow";

export default function WorkGrid({ initialTemplates }) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [page, setPage] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleViewMore = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/templates/unsplash?page=${page}&perPage=8`);
      if (!response.ok) throw new Error("Failed to fetch templates");
      const newTemplates = await response.json();
      setTemplates((prev) => [...prev, ...newTemplates]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching more templates:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center px-6 md:px-16">
      <Glow pos="left-1/2 -translate-x-[50%]" />
      <Glow pos="left-1/2 -translate-x-[50%] bottom-8" />

      <div className="w-full flex flex-wrap gap-8 justify-center">
        {templates.map((t) => (
          <WorkTemplate
            key={t.id}
            id={t.title}
            src={t.image_url}
            link={t.demo_url}
          />
        ))}
      </div>

      <button
        onClick={handleViewMore}
        disabled={isLoading}
        className="mt-12 px-8 py-3 bg-color-1 text-white rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Loading..." : "View More"}
      </button>
    </div>
  );
}
