"use client";

import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  ThemeTypings,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { ExperienceDocument } from "../../prismicio-types";
import { DateField, KeyTextField } from "@prismicio/types";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { prismicH } from "@/prismicio";

interface ExperienceProps {
  color: ThemeTypings["colorSchemes"];
  data: ExperienceDocument[];
  title: KeyTextField;
}

export function Experience({ color, data, title }: ExperienceProps) {
  const experience = data.map((doc) => doc.data);

  const options = [{ value: "Frontend" }, { value: "Backend" }];
  const [selected, setSelected] = useState<string>("Frontend");

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  const formatDate = (date: DateField) => {
    if (date) {
      const [year, month] = date.split("-");
      return `${month}/${year}`;
    }
  };

  return (
    <Container maxW={"3xl"} id="experience">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>{title}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Center px={4}>
          <ButtonGroup variant="outline">
            {options.map((option, i) => (
              <Button
                key={i}
                colorScheme={selected === option?.value ? `${color}` : "gray"}
                onClick={() => handleSelected(option.value)}
              >
                {option.value}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
        <Stack px={4} spacing={4}>
          {experience
            .filter((exp) => {
              const tags = exp.tags.map((e) => e.label) as string[];
              return tags.includes(selected);
            })
            .map((exp) => (
              <Fade key={exp.company}>
                <Card size="sm">
                  <CardHeader>
                    <Stack
                      display="flex"
                      justifyContent="space-between"
                      direction={{ base: "column", sm: "row" }}
                    >
                      <Stack direction={{ base: "column", sm: "row" }}>
                        <Image
                          src={exp.logo.url || ""}
                          h={["full", 50]}
                          alt={exp.logo.alt || ""}
                        />
                        <Box px={2} textAlign="left">
                          <Text fontWeight={600}>{exp.company}</Text>
                          <Text>{exp.position}</Text>
                        </Box>
                      </Stack>
                      <Text
                        px={2}
                        fontWeight={300}
                        textAlign={["left", "center"]}
                      >
                        {formatDate(exp.started_in)}{" "}
                        {exp.finished_in
                          ? `- ${formatDate(exp.finished_in)}`
                          : null}
                      </Text>
                    </Stack>
                  </CardHeader>
                  <CardBody>
                    <Flex>
                      <List spacing={3} textAlign="left" w="full">
                        {prismicH
                          .asText(exp.responsibilities, "###")
                          .split("###")
                          .map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                              />
                              {item}
                            </ListItem>
                          ))}
                      </List>
                    </Flex>
                  </CardBody>
                  <CardFooter>
                    <HStack spacing={2}>
                      <Wrap>
                        {exp.badges.map((badge) => (
                          <WrapItem key={badge.name}>
                            <Badge colorScheme={badge.color as string}>
                              {badge.name}
                            </Badge>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </HStack>
                  </CardFooter>
                </Card>
              </Fade>
            ))}
        </Stack>
      </Stack>
    </Container>
  );
}
