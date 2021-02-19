import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export interface NavbarProps {
  content: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Text>{props.content}</Text>

      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            omnis maiores, fugit accusantium cupiditate ipsa perspiciatis atque
            itaque facere, error blanditiis unde impedit aperiam magnam expedita
            et iste quasi? Asperiores.
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
