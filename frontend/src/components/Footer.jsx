import React from "react";

import {
  Box,
  Center,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaPaw,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiComputerFan } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";

const Logo = (props) => {
  return (
    <Flex align="center" gap={2} color="purple.500">
      <FaPaw />
      <Text
        fontSize="2xl"
        fontWeight={"extrabold"}
        fontFamily="'Baloo 2', cursive"
      >
        Pawfection!
      </Text>
    </Flex>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.800", "gray.400")}
      mt={20}
      boxShadow={"lg"}
      id="footer"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Center>
          <Logo />
        </Center>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text fontSize={{ base: "0.75rem", md: "1rem" }}>
            jl. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Commodi quaerat odio similique officiis ipsam omnis repellendus quam
            sed sint.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
