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
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { toaster } from "../ui/toaster";

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

const AdminDrawerNav = ({ inDashboard, inPaket, inReservasi }) => {
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      top={8}
      left={8}
      zIndex={1000}
      display={{ base: "flex", md: "none" }}
    >
      <Drawer.Root placement={"top"}>
        <Drawer.Trigger asChild>
          <Button variant="solid" colorPalette={"purple"} size="lg">
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
                  <Link to={"/admin"}>
                    <Button
                      className="nav-button"
                      rounded={"full"}
                      colorPalette={"purple"}
                      variant={inDashboard ? "surface" : "ghost"}
                      fontSize={"sm"}
                      color={fontColor}
                      _hover={{
                        bg: useColorModeValue("purple.300", "purple.800"),
                      }}
                    >
                      <span>Dashboard</span>
                    </Button>
                  </Link>
                  <Link to={"/admin"}>
                    <Button
                      className="nav-button"
                      rounded={"full"}
                      colorPalette={"purple"}
                      variant={inPaket ? "surface" : "ghost"}
                      fontSize={"sm"}
                      color={fontColor}
                      _hover={{
                        bg: useColorModeValue("purple.300", "purple.800"),
                      }}
                    >
                      <span>Kelola Paket</span>
                    </Button>
                  </Link>
                  <Link to={"/admin/reservasi"}>
                    <Button
                      className="nav-button"
                      rounded={"full"}
                      colorPalette={"purple"}
                      variant={inReservasi ? "surface" : "ghost"}
                      fontSize={"sm"}
                      color={fontColor}
                      _hover={{
                        bg: useColorModeValue("purple.300", "purple.800"),
                      }}
                    >
                      <span>Kelola Reservasi</span>
                    </Button>
                  </Link>
                  <Button
                    className="nav-button"
                    rounded={"full"}
                    variant="ghost"
                    fontSize={"sm"}
                    color={fontColor}
                    _hover={{
                      bg: useColorModeValue("purple.300", "purple.800"),
                    }}
                    onClick={() => {
                      if (window.confirm("Apakah anda yakin ingin keluar?")) {
                        localStorage.removeItem("token");
                        toaster.create({
                          title: "Berhasil Logout",
                          type: "success",
                        });
                        navigate("/login");
                      }
                    }}
                  >
                    <span>Logout</span>
                  </Button>
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

export default AdminDrawerNav;
