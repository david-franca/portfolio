import React from "react";
import { NavBar } from "@/_components/NavBar";
import { createClient } from "@/prismicio";

export { NavSection };

async function NavSection({ locale }: { locale: string }) {
  const client = createClient();
  const nav = await client.getSingle("nav", { lang: locale });

  return <NavBar data={nav.data} />;
}
