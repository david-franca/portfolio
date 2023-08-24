import { createClient } from "@/prismicio";
import { Projects } from "@/_components";

export async function ProjectSection({ locale }: { locale: string }) {
  const client = createClient();
  const project = await client.getAllByType("project", { lang: locale });
  const nav = await client.getSingle("nav", { lang: locale });
  return <Projects color="teal" data={project} title={nav.data.projects} />;
}
