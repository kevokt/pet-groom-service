// SideNav.jsx
import React from "react";
import { Box, Flex, VStack, Button, Text } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import { toaster } from "../ui/toaster";
import AdminDrawerNav from "./AdminDrawerNav";

const AdminSidebarNav = ({ inDashboard, inLayanan, inReservasi }) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const hoverBg = useColorModeValue("purple.300", "purple.800");
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  const navigate = useNavigate();

  return (
    <>
      <AdminDrawerNav />
      <Box
        position="fixed"
        left="0"
        top="0"
        height="100vh"
        width="250px"
        bg={bgColor}
        shadow="md"
        p={5}
        display={{ base: "none", md: "block" }} // Hanya tampil di desktop
      >
        <Flex direction="column" justify="space-between" h="100%">
          {/* Logo dan menu navigasi */}
          <Box>
            <Flex
              justify="center"
              align="center"
              mb={10}
              mt={3}
              w="full"
              color="purple.500"
            >
              <FaPaw />
              <Text
                fontSize="2xl"
                fontWeight="extrabold"
                fontFamily="'Baloo 2', cursive"
                ml={2}
              >
                Pawfection!
              </Text>
            </Flex>

            <VStack align="center" spacing={4}>
              <Button
                as={RouterLink}
                to="/admin"
                w="200px"
                variant={inDashboard ? "surface" : "ghost"}
                colorPalette="purple"
                justifyContent="center"
                _hover={{ bg: hoverBg }}
              >
                Dashboard
              </Button>
              <Button
                as={RouterLink}
                to="/admin"
                w="200px"
                variant={inLayanan ? "surface" : "ghost"}
                colorPalette="purple"
                justifyContent="center"
                _hover={{ bg: hoverBg }}
              >
                Kelola Paket
              </Button>
              <Button
                as={RouterLink}
                to="/admin/reservasi"
                w="200px"
                variant={inReservasi ? "surface" : "ghost"}
                colorPalette="purple"
                justifyContent="center"
                _hover={{ bg: hoverBg }}
              >
                Kelola Reservasi
              </Button>
              <Button
                w="200px"
                variant="ghost"
                colorPalette="red"
                justifyContent="center"
                _hover={{ bg: useColorModeValue("red.300", "red.700") }}
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
                Logout
              </Button>
            </VStack>
          </Box>

          {/* Color mode button di bawah */}
          <Box display="flex" justifyContent="flex-end">
            <ColorModeButton />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AdminSidebarNav;
