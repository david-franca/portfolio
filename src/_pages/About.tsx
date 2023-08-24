import { createClient } from "@/prismicio";
import { About } from "@/_components";

export async function AboutSection({ locale }: { locale: string }) {
  const client = createClient();
  const about = await client.getSingle("about", { lang: locale });
  return <About color="teal" data={about.data} />;
}
