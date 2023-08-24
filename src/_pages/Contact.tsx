import { createClient } from "@/prismicio";
import { Contact } from "@/_components";

export async function ContactSection({ locale }: { locale: string }) {
  const client = createClient();
  const contact = await client.getSingle("contact", { lang: locale });
  return <Contact color="teal" data={contact.data} />;
}
