'use client';

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
import {Fade} from "react-awesome-reveal";
import {useState} from "react";
import ProjectsArray from "./ProjectsArray";
import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";
import {useTranslations} from "next-intl";

interface ProjectsProps {
    color: ThemeTypings['colorSchemes'];
}
export default function Projects({ color }: ProjectsProps) {
    const nav = useTranslations('Nav')
    const other = useTranslations('Others')
    const projects = ProjectsArray();
    const others = OtherProjectsArray();
    const options = TagsArray("ProjectsTags");

    const [selected, setSelected] = useState("All");

    const handleSelected = (value: string) => {
        setSelected(value);
    };

    return (
        <>
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
                            <Text fontWeight={800}>
                                {nav('projects')}
                            </Text>
                        </HStack>
                        <Divider orientation="horizontal" />
                    </Stack>
                    <Stack px={4} spacing={4}>
                        {projects.map((project, i) => (
                            <Fade cascade key={i}>
                                <Card
                                    key={project.name}
                                    direction={{
                                        base: "column",
                                    }}
                                    overflow="hidden"
                                >
                                    <Image objectFit="cover" src={project.image} alt="Project Image" />

                                    <Stack>
                                        <CardBody textAlign="left">
                                            <Heading size="md">{project.name}</Heading>

                                            <Text py={2}>{project.description}</Text>

                                            <HStack py={2}>
                                                {project.buttons.map((button) => (
                                                    <a key={button.text} href={button.href}>
                                                        <Button color={`${color}.400`}>
                                                            {button.text}
                                                        </Button>
                                                    </a>
                                                ))}
                                            </HStack>
                                            <HStack pt={4} spacing={2}>
                                                {project.badges.map((badge) => (
                                                    <Badge
                                                        key={badge.text}
                                                        colorScheme={badge.colorScheme}
                                                    >
                                                        {badge.text}
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
                        {other('others')}
                    </Text>
                    <Center px={4}>
                        <ButtonGroup variant="outline">
                            <Wrap>
                                <WrapItem>
                                    <Button
                                        colorScheme={selected === "All" ? `${color}` : "gray"}
                                        onClick={() => handleSelected("All")}
                                    >
                                        {other('all')}
                                    </Button>
                                </WrapItem>
                                {options.map((option, i) => (
                                    <WrapItem>
                                        <Button
                                            key={i}
                                            colorScheme={selected === option.value ? `${color}` : "gray"}
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
                            .filter((o) => {
                                if (selected === other('all')) {
                                    return true;
                                } else {
                                    return o.tags.includes(selected);
                                }
                            })
                            .map((other, i) => (
                                <Fade key={i}>
                                    <Card key={other.name}>
                                        <Stack>
                                            <CardBody textAlign="left" h={[null, "40vh"]}>
                                                <Heading size="sm">{other.name}</Heading>

                                                <Text fontSize="sm" py={2}>
                                                    {other.description}
                                                </Text>

                                                <HStack spacing={2}>
                                                    {other.buttons.map((button) => (
                                                        <Link
                                                            key={button.text}
                                                            href={button.href}
                                                            color={`${color}.400`}
                                                        >
                                                            {button.text}
                                                        </Link>
                                                    ))}
                                                </HStack>
                                                <HStack flexWrap="wrap" pt={4} spacing={2}>
                                                    <Wrap>
                                                    {other.badges.map((badge) => (
                                                        <WrapItem key={badge.text}>
                                                            <Badge
                                                                my={2}
                                                                colorScheme={badge.colorScheme}
                                                            >
                                                                {badge.text}
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
        </>
    );
}