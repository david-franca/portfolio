"use client";

import {
  Box,
  Container,
  Divider,
  HStack,
  Stack,
  Text,
  ThemeTypings,
} from "@chakra-ui/react";
import { AboutDocumentData } from "../../prismicio-types";
import { prismicH } from "@/prismicio";

interface AboutProps {
  color: ThemeTypings["colorSchemes"];
  data: AboutDocumentData;
}

export function About({ color, data }: AboutProps) {
  const { about, seo_title } = data;
  return (
    <Container maxW={"3xl"} id="about">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              01
            </Text>
            <Text fontWeight={800}>{seo_title}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        {prismicH
          .asText(about, "###")
          .split("###")
          .map((item, i) => (
            <Text key={i} color={"gray.500"} fontSize={"xl"} px={4}>
              {item}
            </Text>
          ))}
      </Stack>
    </Container>
  );
}
