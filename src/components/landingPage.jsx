import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";

function LandingPage({ onConnect }) {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <VStack spacing={6} justify="center" align="center" h="100%">
        <Heading size="2xl" color="gray.300" textAlign="center">
          Welcome to the Code Editor
        </Heading>
        <Text fontSize="lg" textAlign="center" color="gray.400">
          Connect your wallet to start coding and exploring blockchain
          development.
        </Text>
        <Button colorScheme="teal" size="lg" onClick={onConnect}>
          Connect Wallet
        </Button>
      </VStack>
    </Box>
  );
}

export default LandingPage;
