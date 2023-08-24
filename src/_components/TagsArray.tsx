"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

const parseTags = (mdContent: string) => {
  const tags: { value: string }[] = [];
  const lines = mdContent.split("- ");
  for (let i = 0; i < lines.length; i++) {
    const value = lines[i].trim();
    if (value.length) {
      tags.push({
        value,
      });
    }
  }
  return tags;
};

export const TagsArray = (file: string) => {
  const [Tags, setTags] = useState<{ value: string }[]>([]);
  const locale = useLocale();
  useEffect(() => {
    fetch(`/content/${locale}/${file}.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setTags(parseTags(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, [file, locale]);

  return Tags;
};
