import { createClient } from "@/prismicio";
import { Footer } from "@/_components";

export async function FooterSection({ locale }: { locale: string }) {
  const client = createClient();
  const footer = await client.getSingle("footer", { lang: locale });
  return <Footer data={footer.data} />;
}
