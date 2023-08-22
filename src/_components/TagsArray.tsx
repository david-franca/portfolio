'use client';

import { useState, useEffect } from "react";
import {useLocale} from "next-intl";

const parseTags = (mdContent: string) => {
    const tags: {value: string}[] = [];
    const lines = mdContent.split("\r\n");

    for (let i = 0; i < lines.length; i++) {
        const value = lines[i];

        tags.push({
            value
        });
    }
    return tags;
};

const TagsArray = (file: string) => {
    const [Tags, setTags] = useState<{value: string}[]>([]);
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

export default TagsArray;