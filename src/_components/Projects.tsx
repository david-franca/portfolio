"use client";

import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  ThemeTypings,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useMemo, useState } from "react";
import { TagsArray } from "./TagsArray";
import { useTranslations } from "next-intl";
import { KeyTextField } from "@prismicio/types";
import { ProjectDocument } from "../../prismicio-types";
import { prismicH } from "@/prismicio";

interface ProjectsProps {
  color: ThemeTypings["colorSchemes"];
  title: KeyTextField;
  data: ProjectDocument[];
}

export function Projects({ color, data, title }: ProjectsProps) {
  const other = useTranslations("Others");
  const projects = useMemo(
    () =>
      data?.length ? data.map((el) => el.data).filter((el) => el.fixed) : [],
    [data],
  );
  const others = useMemo(
    () =>
      data?.length ? data.map((el) => el.data).filter((el) => !el.fixed) : [],
    [data],
  );

  const options = TagsArray("ProjectsTags");

  const [selected, setSelected] = useState("All");

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  return (
    <Container maxW={"3xl"} id="projects">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" p={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              03
            </Text>
            <Text fontWeight={800}>{title}</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Stack px={4} spacing={4}>
          {projects.map((project, i) => (
            <Fade cascade key={i}>
              <Card
                key={project.seo_name}
                direction={{
                  base: "column",
                }}
                overflow="hidden"
              >
                <Image
                  objectFit="cover"
                  src={project.image.url ?? ""}
                  alt="Project Image"
                />

                <Stack>
                  <CardBody textAlign="left">
                    <Heading size="md">{project.seo_name}</Heading>

                    <Text py={2}>{project.seo_description}</Text>

                    <HStack py={2}>
                      {project.buttons.map((button) => (
                        <a
                          key={button.label}
                          href={prismicH.asLink(button.link) ?? ""}
                          target="_blank"
                        >
                          <Button color={`${color}.400`}>{button.label}</Button>
                        </a>
                      ))}
                    </HStack>
                    <HStack pt={4} spacing={2}>
                      {project.badges.map((badge) => (
                        <Badge
                          key={badge.label}
                          colorScheme={badge.color as string}
                        >
                          {badge.label}
                        </Badge>
                      ))}
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            </Fade>
          ))}
        </Stack>
        <Text color={"gray.600"} fontSize={"xl"} px={4}>
          {other("others")}
        </Text>
        <Center px={4}>
          <ButtonGroup variant="outline">
            <Wrap>
              <WrapItem>
                <Button
                  colorScheme={selected === "All" ? `${color}` : "gray"}
                  onClick={() => handleSelected("All")}
                >
                  {other("all")}
                </Button>
              </WrapItem>
              {options.map((option, i) => (
                <WrapItem key={i}>
                  <Button
                    colorScheme={
                      selected === option.value ? `${color}` : "gray"
                    }
                    onClick={() => handleSelected(option.value)}
                  >
                    {option.value}
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </ButtonGroup>
        </Center>
        <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
          {others
            // .filter((o) => {
            //   if (selected === other("all")) {
            //     return true;
            //   } else {
            //     return o.tags.includes(selected);
            //   }
            // })
            .map((other, i) => (
              <Fade key={i}>
                <Card key={other.seo_name}>
                  <Stack>
                    <CardBody textAlign="left" h={[null, "40vh"]}>
                      <Heading size="sm">{other.seo_name}</Heading>

                      <Text fontSize="sm" py={2}>
                        {other.seo_description}
                      </Text>

                      <HStack spacing={2}>
                        {other.buttons.map((button) => (
                          <Link
                            key={button.label}
                            href={prismicH.asLink(button.link) ?? ""}
                            color={`${color}.400`}
                            target="_blank"
                          >
                            {button.label}
                          </Link>
                        ))}
                      </HStack>
                      <HStack flexWrap="wrap" pt={4} spacing={2}>
                        <Wrap>
                          {other.badges.map((badge) => (
                            <WrapItem key={badge.label}>
                              <Badge my={2} colorScheme={badge.color as string}>
                                {badge.label}
                              </Badge>
                            </WrapItem>
                          ))}
                        </Wrap>
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
