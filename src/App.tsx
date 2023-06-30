import { useState } from "react";
import { Heading, Flex, Text, Container } from "@chakra-ui/react";
import Hero from "./components/Hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Container>
        <Flex>
          <Heading>Install Chakra UI in React JS</Heading>
        </Flex>
      </Container>
    </>
  );
}

export default App;
