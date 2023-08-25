"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FooterDocumentData } from "../../prismicio-types";

interface FooterProps {
  data: FooterDocumentData;
}

export function Footer({ data }: FooterProps) {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} textAlign="center">
        <Text alignSelf="center">
          © {new Date().getFullYear()} David França. {data.copyright}
        </Text>
      </Container>
    </Box>
  );
}
