import WorkTitle from "./WorkTitle";
import Glow from "../ui/Glow";
import supabase from "@/lib/supabase";
import { getUnsplashTemplates } from "@/lib/unsplash";
import WorkGrid from "./WorkGrid";

async function getTemplates() {
  const { data } = await supabase
    .from("templates")
    .select("*")
    .order("created_at", { ascending: false });

  return data || [];
}

export default async function Work() {
  const dbTemplates = await getTemplates();
  const initialUnsplashTemplates = await getUnsplashTemplates(1, 8);

  const initialTemplates = [...dbTemplates, ...initialUnsplashTemplates];

  return (
    <div className="my-20 flex flex-col w-full" id="work">
      <WorkTitle />
      <WorkGrid initialTemplates={initialTemplates} />
    </div>
  );
}