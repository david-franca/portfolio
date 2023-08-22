'use client';

import {useEffect, useState} from "react";
import {useLocale} from "next-intl";

interface Experience {
    image: string | undefined;
    company: string;
    position: string;
    duration: string;
    badges: { name: string; colorScheme: string; }[];
    listItems: string[];
    tags: string;
}
const parseExperience = (mdContent: string) => {
    const experience = [];
    const lines = mdContent.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("## ")) {
            const company = line.substring(3).trim();
            const positionLine = lines[++i]
                .substring(2)
                .split("|")
                .map((s) => s.trim());
            const position = positionLine[0].slice(1, -1);
            const duration = positionLine[1].trim();
            const imageLine = lines[++i];
            const image = imageLine.match(/!\[(.*)]\((.*)\)/)?.[2];
            const tags = lines[++i].split(":")[1].trim();
            const badges = [];
            const listItems = [];

            while (lines[++i] && !lines[i].startsWith("- Badges:")) {
            }
            while (lines[++i] && lines[i].startsWith("  - ")) {
                const badgeLine = lines[i].substring(4).split("[");
                const badgeName = badgeLine[0].trim();
                const badgeColor = badgeLine[1].split("]")[0].trim();
                badges.push({name: badgeName, colorScheme: badgeColor});
            }

            while (lines[++i] && lines[i].startsWith("  - ")) {
                listItems.push(lines[i].substring(4));
            }

            experience.push({
                image,
                company,
                position,
                duration,
                badges,
                listItems,
                tags,
            });
        }
    }

    return experience;
};

const ExperienceArray = () => {
    const [experience, setExperience] = useState<Experience[]>([]);

    const locale = useLocale();

    useEffect(() => {
        fetch(`/content/${locale}/Experience.md`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch markdown content");
                }
                return response.text();
            })
            .then((mdContent) => {
                setExperience(parseExperience(mdContent));
            })
            .catch((error) => {
                console.error("Error fetching markdown content:", error);
            });
    }, [locale]);

    return experience;
};

export default ExperienceArray;