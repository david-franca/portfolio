"use client";

import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  ThemeTypings,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { ContactDocumentData } from "../../prismicio-types";
import { prismicH } from "@/prismicio";

interface ContactProps {
  color: ThemeTypings["colorSchemes"];
  data: ContactDocumentData;
}

export function Contact({ color, data }: ContactProps) {
  const linkedin = () => {
    const linkedin = prismicH.asLink(data.linkedin);
    window.open(`${linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    const github = prismicH.asLink(data.github);
    window.open(`${github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    const email = data.email;
    window.open(`mailto:${email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <Container maxW={"3xl"} id="contact">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" p={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              04
            </Text>
            <Text fontWeight={800}>{data.seo_title}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>{data.touch}</Heading>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            {data.contact}
          </Text>
          <Text
            color={`${color}.500`}
            fontWeight={600}
            fontSize={"lg"}
            alignSelf="center"
            px={4}
          >
            {data.email}
          </Text>
          <Center>
            <HStack pt={4} spacing={2}>
              <IconButton
                variant="ghost"
                aria-label={"linkedin"}
                fontSize={28}
                icon={<FaLinkedin />}
                onClick={linkedin}
              />
              <IconButton
                variant="ghost"
                aria-label={"github"}
                fontSize={28}
                icon={<FaGithub />}
                onClick={github}
              />
              <IconButton
                variant="ghost"
                aria-label={"email"}
                fontSize={28}
                icon={<FaEnvelope />}
                onClick={email}
              />
            </HStack>
          </Center>
        </Stack>
      </Stack>
    </Container>
  );
}
