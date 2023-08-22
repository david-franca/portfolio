'use client';

import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    HStack,
    IconButton,
    Link,
    Select,
    Stack,
    ThemeTypings,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import {HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import {ChangeEvent, useState} from "react";
import ProfileArray from "./ProfileArray";

import * as TbIcons from "react-icons/tb";
import Header from "@/_components/Hero";
import {About} from "@/_components/About";
import Experience from "@/_components/Experience";
import Contact from "@/_components/Contact";
import Projects from "@/_components/Projects";
import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from "next-intl/client";

interface NavProps {
    color: ThemeTypings['colorSchemes'];
}

export function Nav({color}: NavProps) {
    const t = useTranslations('Nav');
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();

    const profile = ProfileArray();
    const colors = {
        "blue": "#3182CE",
        "cyan": "#00B5D8",
        "gray": "#718096",
        "green": "#38A169",
        "orange": "#DD6B20",
        "pink": "#D53F8C",
        "purple": "#805AD5",
        "red": "#E53E3E",
        "teal": "#319795",
        "yellow": "#D69E2E"
    };
    const [scroll, setScroll] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const scrollToHero = () => {
        const heroSection = document.querySelector("#hero");
        heroSection?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#about");
        aboutSection?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToExperience = () => {
        const experienceSection = document.querySelector("#experience");
        experienceSection?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToProjects = () => {
        const projectsSection = document.querySelector("#projects");
        projectsSection?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact");
        contactSection?.scrollIntoView({behavior: "smooth"});
    };
    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window?.addEventListener("scroll", changeScroll);

    const TbLetterComponents = [];

    for (let i = 0; i < profile.logo.length; i++) {
        const letter = profile.logo[i];
        const Icons = Object.keys(TbIcons);
        const IconsValues = Object.values(TbIcons);
        const index = Icons.indexOf(`TbLetter${letter}`);
        const component = IconsValues[index];
        TbLetterComponents.push(component);
    }

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        router.push(pathname, {locale: e.target.value});
    }

    return (
        <Box>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                h={16}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >
                <Flex flexDir="row">
                    <Center>
                        <Link onClick={scrollToHero}>
                            <HStack>
                                {TbLetterComponents.map((Component, index) => (
                                    <Component key={index} color={colors.teal}/>
                                ))}
                            </HStack>
                        </Link>
                    </Center>
                    <Select width="150px" variant="filled" borderRadius={15} size="sm" ml={4}
                            onChange={handleLanguageChange}
                            defaultValue={locale}>
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </Select>
                </Flex>
                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        {isLargerThanMD ? (
                            <>
                                <Button variant="ghost" onClick={scrollToAbout}>
                                    {t('about')}
                                </Button>
                                <Button variant="ghost" onClick={scrollToExperience}>
                                    {t('experience')}
                                </Button>
                                <Button variant="ghost" onClick={scrollToProjects}>
                                    {t('projects')}
                                </Button>
                                <Button variant="ghost" onClick={scrollToContact}>
                                    {t('contact')}
                                </Button>
                            </>
                        ) : null}
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                        </Button>

                        {isLargerThanMD ? (
                            <></>
                        ) : (
                            <>
                                <Button
                                    as={IconButton}
                                    icon={<HamburgerIcon/>}
                                    onClick={onOpen}
                                ></Button>
                                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                    <DrawerOverlay/>
                                    <DrawerContent>
                                        <DrawerBody>
                                            <Button variant="ghost" onClick={scrollToAbout}>
                                                {t('about')}
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToExperience}>
                                                {t('experience')}
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToProjects}>
                                                {t('projects')}
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToContact}>
                                                {t('contact')}
                                            </Button>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </>
                        )}
                    </Stack>
                </Flex>
            </Flex>
            <Header color={color}/>
            <About color={color}/>
            <Experience color={color}/>
            <Projects color={color}/>
            <Contact color={color}/>
        </Box>
    );
}
