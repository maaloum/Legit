import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Button,
  useColorModeValue,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// eslint-disable-next-line react/prop-types
function ModalMpesa({ isModelOpen, handleOnClose, amount }) {
  const url = "http://localhost:3000/api/stkPush";

  const [phone, setPhone] = useState("");
  //   const orderID = "1234";
  const generateRandomOrderID = () => {
    const randomNumber = Math.floor(Math.random() * 1000000); // Adjust the range as needed
    return `OrderID_${randomNumber}`;
  };

  const orderID = generateRandomOrderID();

  //   const body = {
  //     amount,
  //     phone,
  //     Order_ID: orderID,
  //   };

  const handlePostRequest = async () => {
    // toast.warning("Danger");
    if (phone === "") {
      toast.error("Enter your number");
    }

    const formattedPhone = phone.replace(/^0/, "254");
    console.log({ formattedPhone });
    if (phone) {
      try {
        const response = await axios.post(url, {
          amount,
          phone: formattedPhone,
          Order_ID: orderID,
        });

        console.log("Response from server:", response.data);

        // Handle the response as needed
      } catch (error) {
        console.error("Error sending POST request:", error.message);
      }
    }
  };

  return (
    <Flex alignContent={"center"} justifyItems={"center"} m={"30"}>
      <Modal
        isOpen={isModelOpen}
        onClose={handleOnClose}
        size={"xl"}
        bg={useColorModeValue("blue.400", "teal.600")}
      >
        <ModalOverlay />
        <ModalContent mt="150">
          <ModalHeader>Enter your number</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <InputLeftElement pointerEvents="none"></InputLeftElement>
              <Input
                type="number"
                placeholder="eg: 0712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              bg={"red"}
              color={"white"}
              mx={["0", "150"]}
              required
              mt="10"
              _hover={{
                bg: "blue.500",
              }}
              onClick={handlePostRequest}
            >
              Pay
            </Button>
          </ModalBody>
        </ModalContent>
        <ToastContainer />
      </Modal>
    </Flex>
  );
}

export default ModalMpesa;
