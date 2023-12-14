import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg={useColorModeValue("blue.400", "teal.600")} mt="300">
      <Box h={16} color={"white"}>
        <Text fontSize={"xl"} textAlign={"center"} m="10" pt="4">
          +254-113-635-470
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
