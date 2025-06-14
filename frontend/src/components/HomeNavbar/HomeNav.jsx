import React from "react";
import { Box, Flex, HStack, Button, Text } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import HomeDrawerNav from "./HomeDrawerNav";

const HomeNav = ({ inBeranda, inLayanan, inReservasi }) => {
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  const navItems = [
    { to: "/", label: "Beranda", isActive: inBeranda },
    { to: "/layanan", label: "Layanan", isActive: inLayanan },
    { to: "/reservasi", label: "Reservasi", isActive: inReservasi },
    { to: "/login", label: "Login", isActive: false, isGhost: true },
  ];

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
          {navItems.map(({ to, label, isActive, isGhost }) => (
            <Link to={to} key={label}>
              <Button
                className="nav-button"
                rounded={"full"}
                colorPalette={"purple"}
                variant={isGhost ? "ghost" : isActive ? "surface" : "ghost"}
                fontSize={"sm"}
                color={fontColor}
                _hover={{ bg: useColorModeValue("purple.300", "purple.800") }}
              >
                <span>{label}</span>
              </Button>
            </Link>
          ))}
        </HStack>
        <HomeDrawerNav
          inBeranda={inBeranda}
          inLayanan={inLayanan}
          inReservasi={inReservasi}
        />
      </Flex>
    </Box>
  );
};

export default HomeNav;
