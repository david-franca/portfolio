'use client';

import {Box, Container, Divider, HStack, Stack, Text, ThemeTypings,} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";
import {useTranslations} from "next-intl";

interface AboutProps {
    color: ThemeTypings['colorSchemes'];
}

export function About({color}: AboutProps) {
    const profile = ProfileArray();
    const t = useTranslations("Nav");
    return (

        <Container maxW={"3xl"} id="about">
            <Stack
                as={Box}
                textAlign={"center"}
                spacing={{base: 8, md: 14}}
                pb={{base: 20, md: 36}}
            >
                <Stack align="center" direction="row" px={4}>
                    <HStack mx={4}>
                        <Text color={`${color}.400`} fontWeight={800}>
                            01
                        </Text>
                        <Text fontWeight={800}>
                            {t("about")}
                        </Text>
                    </HStack>
                    <Divider orientation="horizontal"/>
                </Stack>
                {profile.about.split('<br />').map((item, i) => (
                    <Text key={i} color={"gray.500"} fontSize={"xl"} px={4}>
                        {item}
                    </Text>
                ))}
            </Stack>
        </Container>

    );
}