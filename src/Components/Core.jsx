import {
  Box,
  ButtonGroup,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import FloatingWhatsApp from "./WhatSapp/FloatingWhatsApp";
import Confetti from "react-confetti";
import { useState } from "react";
import ModalMpesa from "./ModalMpesa";

function Core() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const threeOdd = "250";
  const fourOdd = "300";
  const megaOdd = "400";

  const handleMegaODD = () => {
    // console.log("mega");
    // setIsModelOpen(true);
    // setAmount(megaOdd);
  };
  const handleThreeODD = () => {
    // console.log("Three");
    // setIsModelOpen(true);
    // setAmount(threeOdd);
  };

  const handleFourODD = () => {
    // console.log("four");
    // setIsModelOpen(true);
    // setAmount(fourOdd);
  };

  const handleOnClose = () => {
    setIsModelOpen(false);
  };

  return (
    <Flex
      h={["200", "120"]}
      py={10}
      m={["0", "20"]}
      mt={["200", "200"]}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Container
        maxW="container.xl"
        bg={useColorModeValue("blue.400", "teal.600")}
        color="white"
        py={10}
        m={["0", "20"]}
      >
        <Confetti className="confetti" />
        <Stack
          spacing={["6", "3"]}
          align="center"
          textAlign="center"
          bg={useColorModeValue("blue.400", "teal.600")}
        >
          <Text fontSize={["sm", "xl"]}>
            {" "}
            We have the best football analysts in Kenya with a 90% win rate. We
            provide major bet markets such as 3 WAY 1,2,X, BTTS, OVER 2.5, UNDER
            2.5, HT/FT, FIRST HALF. With our tips worry no more and be
            guaranteed of daily profits.
          </Text>
        </Stack>
      </Container>

      <Flex
        alignContent={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        // bg={useColorModeValue("blue.400", "teal.600")}
        // p="10"
        // flexWrap={"wrap"}
      >
        <Flex
          alignContent={"center"}
          justifyContent={"center"}
          flexDir={["column", "row"]}
          mt="10"

          // flexWrap={"wrap"}
        >
          <Button
            size="md"
            height="48px"
            mt="10"
            width="200px"
            border="2px"
            color={"white"}
            variant="solid"
            bg={"red"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleThreeODD}
          >
            3 ODDS(KES 250)
          </Button>
          <Button
            size="md"
            mt="10"
            height="48px"
            width="200px"
            border="2px"
            variantColor="pink"
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            bg={"red"}
            onClick={handleFourODD}
          >
            4 ODDS(KES 300)
          </Button>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            mt="10"
            variantColor="pink"
            bg={"red"}
            color={"white"}
            onClick={handleMegaODD}
            _hover={{
              bg: "blue.500",
            }}
          >
            MEGA JACKPOT(KES 400)
          </Button>
        </Flex>
        <ModalMpesa
          isModelOpen={isModelOpen}
          handleOnClose={handleOnClose}
          amount={amount}
        />
        Use the Till Number : <Heading>9373737</Heading>
      </Flex>

      <FloatingWhatsApp
        phoneNumber="+254113635470"
        accountName="LegitBet"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </Flex>
  );
}

export default Core;
