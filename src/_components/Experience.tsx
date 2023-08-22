'use client';

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
import {ChevronRightIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";
import {Fade} from "react-awesome-reveal";
import {useTranslations} from "next-intl";

interface ExperienceProps {
    color: ThemeTypings['colorSchemes'];
}

export default function Experience({color}: ExperienceProps) {
    const t = useTranslations("Nav");
    const experience = ExperienceArray();
    const options = TagsArray("ExperienceTags");
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (options.length > 0) {
            setSelected(options[0].value);
        }
    }, [options]);

    const handleSelected = (value: string) => {
        setSelected(value);
    };

    return (
        <>
            <Container maxW={"3xl"} id="experience">
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{base: 8, md: 14}}
                    pb={{base: 20, md: 36}}
                >
                    <Stack align="center" direction="row" px={4}>
                        <HStack mx={4}>
                            <Text color={`${color}.400`} fontWeight={800}>
                                02
                            </Text>
                            <Text fontWeight={800}>
                                {t("experience")}
                            </Text>
                        </HStack>
                        <Divider orientation="horizontal"/>
                    </Stack>
                    <Center px={4}>
                        <ButtonGroup variant="outline">
                            {options.map((option, i) => (
                                <Button
                                    key={i}
                                    colorScheme={selected === option.value ? `${color}` : "gray"}
                                    onClick={() => handleSelected(option.value)}
                                >
                                    {option.value}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Center>
                    <Stack px={4} spacing={4}>
                        {experience
                            .filter((exp) => exp.tags.includes(selected))
                            .map((exp) => (
                                <Fade key={exp.company}>
                                    <Card size="sm">
                                        <CardHeader>
                                            <Stack display="flex" justifyContent="space-between"
                                                   direction={{base: 'column', sm: 'row'}}>
                                                <Stack direction={{base: 'column', sm: 'row'}}>
                                                    <Image src={exp.image} h={['full', 50]} alt="Logo"/>
                                                    <Box px={2} textAlign="left">
                                                        <Text fontWeight={600}>{exp.company}</Text>
                                                        <Text>{exp.position}</Text>
                                                    </Box>
                                                </Stack>
                                                <Text px={2} fontWeight={300} textAlign={["left", "center"]}>
                                                    {exp.duration}
                                                </Text>
                                            </Stack>
                                        </CardHeader>
                                        <CardBody>
                                            <Flex>
                                                <List spacing={3} textAlign="left" w="full">
                                                    {exp.listItems.map((item, index) => (
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
                                                            <Badge colorScheme={badge.colorScheme}>
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
        </>
    );
}