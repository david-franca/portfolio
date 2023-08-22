'use client';

import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import {useTranslations} from "next-intl";

export function Footer() {
    const t = useTranslations("Footer");
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                align="center"
            >
                <Text>© {(new Date()).getFullYear()} David França. {t('made')}</Text>
            </Container>
        </Box>
    );
}