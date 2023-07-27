import React from 'react';
import { Box, Flex, Heading, Badge, Text, HStack, VStack, ChakraProvider } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BadgePage = () => {
  const languageData = [
    { language: 'JavaScript', percentage: 50, color: 'yellow' },
    { language: 'Python', percentage: 30, color: 'blue' },
    { language: 'Java', percentage: 20, color: 'red' },
  ];

  const progressBarStyle = {
    width: `${languageData[0].percentage}%`, 
    height: '20px',
    borderRadius: '10px',
    background: `linear-gradient(to right, ${languageData
      .map((data, index) => `${data.color} ${data.percentage}%${index < languageData.length - 1 ? ',' : ''}`)
      .join('')})`,
  };

  return (
    <ChakraProvider>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="gray.100">
        <Box bg="white" p={8} borderRadius="xl" boxShadow="md" m={4} maxW="400px">
          <Heading as="h2" size="lg" fontWeight="bold" color="pink.600" mb={4}>
            Carbon Credits Badge
          </Heading>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Lorem Ipsum</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">4</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Lorem Ipsum</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">4</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Lorem Ipsum</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">4</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Lorem Ipsum</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">4</Badge>
          </HStack>
          <HStack align="center" mb={4}>
            <FontAwesomeIcon icon={faStar} color="yellow" size="lg" />
            <Text color="blue.500">Lorem Ipsum</Text>
            <Badge colorScheme="blue">New</Badge>
            <Badge colorScheme="pink">4</Badge>
          </HStack>
        </Box>

        <Box bg="white" p={8} borderRadius="xl" boxShadow="md" m={4} maxW="400px" align="center">
          <Heading as="h2" size="lg" fontWeight="bold" color="pink.600" mb={4}>
            Most Consumed
          </Heading>
          <VStack spacing={4} alignItems="center">
            <Box style={progressBarStyle} />
            <HStack spacing={4}>
              {languageData.map((data) => (
                <Box key={data.language} display="flex" alignItems="center">
                  <Box w="8px" h="8px" borderRadius="full" bg={data.color} mr={2} />
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
