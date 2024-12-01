import { useState } from "react";
import { Button, VStack, Text, Heading } from "@chakra-ui/react";

const WalletConnect = ({ onConnect }) => {
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      await window.arweaveWallet.connect(["ACCESS_ADDRESS", "SIGN_TRANSACTION"]);
      const walletAddress = await window.arweaveWallet.getActiveAddress();
      onConnect(walletAddress);
      setError("");
    } catch (err) {
      setError("Failed to connect wallet. Please try again.");
      console.error(err);
    }
  };

  return (
    <VStack spacing={6} justify="center" align="center" h="100%">
      <Heading size="lg" color="gray.300">
        Code Editor Login
      </Heading>
      <Text fontSize="md" color="gray.400">
        Connect your Arweave wallet to access the editor.
      </Text>
      <Button colorScheme="purple" size="lg" onClick={connectWallet}>
        Connect Arweave Wallet
      </Button>
      {error && <Text color="red.300">{error}</Text>}
    </VStack>
  );
};

export default WalletConnect;
