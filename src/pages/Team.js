import React from "react";
import { Box, Flex, SimpleGrid, Avatar, Heading, Text } from "@chakra-ui/react";
import SEO from "components/Seo";

const Team = () => {
  return (
    <>
      <SEO title="Equipa" />

      <Box as="article">
        <Heading as="h1">A Equipa</Heading>
        <Text>
          O projeto MixMyVisit é o resultado da colaboração de uma equipa do
          grupo Social iTV da unidade de investigação Digimedia - Digital Media
          and Interaction da Universidade de Aveiro com a equipa da Altice Labs
          - Aveiro.
        </Text>
        <SimpleGrid pt={[10, 16]} columns={[1, 3]} gridGap={[8, 12]}>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
          <Flex flexDir="column" justify="center" align="center">
            <Avatar size="xl" mb={4} />
            <Heading pb={4} mb={0} as="h3">
              Test
            </Heading>
            <Text>UA - Universidade de Aveiro</Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Team;
