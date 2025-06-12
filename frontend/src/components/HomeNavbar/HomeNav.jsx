import React from "react";
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import HomeDrawerNav from "./HomeDrawerNav";

const HomeNav = ({ inBeranda, inLayanan, inReservasi }) => {
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      p={8}
      height="70px"
      shadow={"xs"}
    >
      <Flex align="center" justify="space-between" height="100%">
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
        <HStack gap={0} display={{ base: "none", md: "flex" }}>
          <ColorModeButton />
          <Link to={"/"}>
            <Button
              className="nav-button"
              rounded={"full"}
              colorPalette={"purple"}
              variant={inBeranda ? "surface" : "ghost"}
              fontSize={"sm"}
              color={fontColor}
              _hover={{ bg: useColorModeValue("purple.300", "purple.800") }}
            >
              <span>Beranda</span>
            </Button>
          </Link>
          <Link to={"/layanan"}>
            <Button
              className="nav-button"
              rounded={"full"}
              colorPalette={"purple"}
              variant={inLayanan ? "surface" : "ghost"}
              fontSize={"sm"}
              color={fontColor}
              _hover={{ bg: useColorModeValue("purple.300", "purple.800") }}
            >
              <span>Layanan</span>
            </Button>
          </Link>
          <Link to={"/reservasi"}>
            <Button
              className="nav-button"
              rounded={"full"}
              colorPalette={"purple"}
              variant={inReservasi ? "surface" : "ghost"}
              fontSize={"sm"}
              color={fontColor}
              _hover={{ bg: useColorModeValue("purple.300", "purple.800") }}
            >
              <span>Reservasi</span>
            </Button>
          </Link>
          <Link to={"/login"}>
            <Button
              className="nav-button"
              rounded={"full"}
              variant="ghost"
              fontSize={"sm"}
              color={fontColor}
              _hover={{ bg: useColorModeValue("purple.300", "purple.800") }}
            >
              <span>Login</span>
            </Button>
          </Link>
        </HStack>
        <HomeDrawerNav />
      </Flex>
    </Box>
  );
};

export default HomeNav;
