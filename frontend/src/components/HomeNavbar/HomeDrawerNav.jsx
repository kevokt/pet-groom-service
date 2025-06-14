import {
  Box,
  Button,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Logo = () => {
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

const HomeDrawerNav = ({ inBeranda, inLayanan, inReservasi }) => {
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  const navItems = [
    { to: "/", label: "Beranda", isActive: inBeranda },
    { to: "/layanan", label: "Layanan", isActive: inLayanan },
    { to: "/reservasi", label: "Reservasi", isActive: inReservasi },
    { to: "/login", label: "Login", isActive: false, variant: "ghost" },
  ];

  return (
    <Box display={{ base: "flex", md: "none" }}>
      <Drawer.Root placement={"top"}>
        <Drawer.Trigger asChild>
          <Button variant="outline" size="sm">
            <IoMdMenu />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>
                  <Center>
                    <Logo />
                  </Center>
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack>
                  {navItems.map(
                    ({ to, label, isActive, variant = "surface" }) => (
                      <Link to={to} key={label}>
                        <Button
                          className="nav-button"
                          rounded={"full"}
                          colorPalette={"purple"}
                          variant={isActive ? variant : "ghost"}
                          fontSize={"sm"}
                          color={fontColor}
                          _hover={{
                            bg: useColorModeValue("purple.300", "purple.800"),
                          }}
                        >
                          <span>{label}</span>
                        </Button>
                      </Link>
                    )
                  )}
                </VStack>
              </Drawer.Body>
              <Drawer.Footer>
                <ColorModeButton />
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default HomeDrawerNav;
