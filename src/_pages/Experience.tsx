import { createClient } from "@/prismicio";
import { Experience } from "@/_components";

export async function ExperienceSection({ locale }: { locale: string }) {
  const client = createClient();
  const experience = await client.getAllByType("experience", { lang: locale });
  const nav = await client.getSingle("nav", { lang: locale });
  return (
    <Experience color="teal" data={experience} title={nav.data.experience} />
  );
}
