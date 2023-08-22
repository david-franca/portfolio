import { useState, useEffect } from "react";
import {useLocale} from "next-intl";

interface Profile {
    siteName: string;
    headerName: string;
    headerRole: string;
    headerDesc: string;
    about: string;
    contact: string;
    linkedin: string;
    github: string;
    email: string;
    logo: string;

}

const parseProfile = (mdContent: string) => {
    const profile: Profile = {
        siteName: "",
        headerName: "",
        headerRole: "",
        headerDesc: "",
        about: "",
        contact: "",
        linkedin: "",
        github: "",
        email: "",
        logo: "",
    };

    const lines = mdContent.split("\n");

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.startsWith("## ")) {
            const section = line.substring(3).trim();

            switch (section) {
                case "Site Name":
                    profile.siteName = lines[++i].substring(2).trim();
                    break;
                case "Header":
                    profile.headerName = lines[++i].substring(2).trim();
                    profile.headerRole = lines[++i].substring(2).trim();
                    profile.headerDesc = lines[++i].substring(2).trim();
                    break;
                case "About":
                    profile.about = lines[++i].trim();
                    break;
                case "Contact":
                    profile.contact = lines[++i].trim();
                    const contactLinks = ["LinkedIn", "GitHub", "Email"];
                    for (const link of contactLinks) {
                        const linkLine = lines[++i].substring(2).trim();
                        if (linkLine.startsWith(link)) {
                            profile[link.toLowerCase() as keyof Profile] = linkLine.split(": ")[1].trim();
                        }
                    }
                    break;
                case "Logo":
                    profile.logo = lines[++i].substring(2).trim();
                    break;
                default:
                    // do nothing
                    break;
            }
        }
    }

    return profile;
};

const ProfileArray = () => {
    const [profile, setProfile] = useState<Profile>({
        siteName: "",
        headerName: "",
        headerRole: "",
        headerDesc: "",
        about: "",
        contact: "",
        linkedin: "",
        github: "",
        email: "",
        logo: "",
    });
    const locale = useLocale();

    useEffect(() => {
        fetch(`/content/${locale}/Profile.md`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch markdown content");
                }
                return response.text();
            })
            .then((mdContent) => {
                setProfile(parseProfile(mdContent));
            })
            .catch((error) => {
                console.error("Error fetching markdown content:", error);
            });
    }, [locale]);

    return profile;
};

export default ProfileArray;