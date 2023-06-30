import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import FormikExample from "./Formik";
// The below import defines which components come from formik

export default function ForgottenPassword() {
  return (
    <Stack>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text color={"#1808A3"} as={"span"}>
              Trade with Confidence
            </Text>{" "}
            <br />{" "}
            <Text color={"#1808A3"} as={"span"}>
              and Ease Today
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"#1808A3"}>
            Trade with confidence and ease on Digimart, the leading P2P crypto
            exchange.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#1808A3"}
              color={"white"}
              _hover={{
                bg: "blue.400",
              }}
            >
              Trade Now
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
