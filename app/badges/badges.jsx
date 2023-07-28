"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Badge,
  Text,
  HStack,
  VStack,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const BadgePage = () => {
  const languageData = [
    { language: "Green", percentage: 50, color: "green" },
    { language: "Brown", percentage: 30, color: "brown" },
    { language: "Grey", percentage: 20, color: "grey" },
  ];

  const progressBarStyle = {
    width: `${languageData[0].percentage}%`,
    height: "20px",
    borderRadius: "10px",
    background: `linear-gradient(to right, ${languageData
      .map(
        (data, index) =>
          `${data.color} ${data.percentage}%${
            index < languageData.length - 1 ? "," : ""
          }`,
      )
      .join("")})`,
  };

  const customTheme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: "#000000",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        bg="#2e2e2e"
        borderRadius="xl"
      >
        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="md"
          m={4}
          maxW="400px"
        >
          <Heading as="h2" size="lg" fontWeight="bold" color="pink.600" mb={4}>
            Carbon Credits Badge
          </Heading>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Eco-Warrior</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">0</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Climate Hero</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">0</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Carbon Neutral Champion</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">0</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Green Legend</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">0</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Sustainable Star</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">0</Badge>
          </HStack>
        </Box>

        <Box
          bg="white"
          p={8}
          borderRadius="xl"
          boxShadow="md"
          m={4}
          maxW="400px"
          align="center"
        >
          <Heading as="h2" size="lg" fontWeight="bold" color="pink.600" mb={4}>
            Most Consumed
          </Heading>
          <VStack spacing={4} alignItems="center">
            <Box style={progressBarStyle} />
            <HStack spacing={4}>
              {languageData.map((data) => (
                <Box key={data.language} display="flex" alignItems="center">
                  <Box
                    w="8px"
                    h="8px"
                    borderRadius="full"
                    bg={data.color}
                    mr={2}
                  />
                  <Text fontWeight="bold">{data.language}</Text>
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default BadgePage;