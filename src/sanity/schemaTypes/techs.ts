import { defineField, defineType } from "sanity";

export default defineType({
  name: "techs",
  title: "Techs",
  type: "document",
  fields: [
    defineField({
      name: "tech",
      title: "Tech",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "tech",
        maxLength: 96,
      },
    }),
  ],
});
