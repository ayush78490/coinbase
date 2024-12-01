// App.jsx

import { Box, VStack, Heading, Text, Code, Flex } from "@chakra-ui/react";
import { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import CodeEditor from "./components/CodeEditor";

function App() {
  const [address, setAddress] = useState(null);

  const handleWalletConnect = (walletAddress) => {
    setAddress(walletAddress);
  };

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      {address ? (
        <>
        <VStack spacing={6} align="start" h="100%">
          <Heading size="md" color="gray.300">
            Welcome to the Code Editor
          </Heading>
          <Text>
            Connected Wallet Address:{" "}
            <Code colorScheme="teal" fontSize="sm">
              {address}
            </Code>
          </Text>
        </VStack>
        <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
        </Box>
        </>
      ) : (
        <VStack spacing={6} justify="center" align="center" h="100%">
          <Heading size="lg" color="gray.300">
            Code Editor Login
          </Heading>
          <WalletConnect onConnect={handleWalletConnect} />
        </VStack>
      )}
    </Box>
  );
}

export default App;
