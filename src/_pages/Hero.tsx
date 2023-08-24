import React from "react";
import { createClient } from "@/prismicio";
import { Hero } from "@/_components";
import { ContactDocument, HeroDocument } from "../../prismicio-types";

export async function HeroSection({ locale }: { locale: string }) {
  const client = createClient();
  const hero = await client.getSingle<
    HeroDocument & {
      data: {
        contact: {
          data: Pick<ContactDocument["data"], "linkedin">;
        };
      };
    }
  >("hero", {
    lang: locale,
    fetchLinks: "contact.linkedin",
  });
  return <Hero color="teal" data={hero.data} />;
}
