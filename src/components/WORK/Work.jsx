import WorkTemplate from "./WorkTemplate";
import WorkTitle from "./WorkTitle";
import Glow from "../ui/Glow";
import supabase from "@/lib/supabase";
import { getUnsplashTemplates } from "@/lib/unsplash";

async function getTemplates() {
  const { data } = await supabase
    .from("templates")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function Work() {
  const dbTemplates = await getTemplates();
  const unsplashTemplates = await getUnsplashTemplates();

  const allTemplates = [...dbTemplates, ...unsplashTemplates];

  return (
    <div className="my-20 flex flex-col w-full" id="work">
      <WorkTitle />

      <div className="w-full relative flex flex-wrap gap-8 justify-center px-6 md:px-16">
        <Glow pos="left-1/2 -translate-x-[50%]" />
        <Glow pos="left-1/2 -translate-x-[50%] bottom-8" />

        {allTemplates.map((t) => (
          <WorkTemplate
            key={t.id}
            id={t.title}
            src={t.image_url}
            link={t.demo_url}
          />
        ))}
      </div>
    </div>
  );
}