// SideNav.jsx
import React from "react";
import { Box, Flex, VStack, Button, Text } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { ColorModeButton, useColorModeValue } from "../ui/color-mode";
import { toaster } from "../ui/toaster";
import AdminDrawerNav from "./AdminDrawerNav";

const AdminSidebarNav = ({ inDashboard, inPaket, inReservasi }) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const hoverBg = useColorModeValue("purple.300", "purple.800");
  const fontColor = useColorModeValue("black", "whiteAlpha.900");
  const navigate = useNavigate();

  const navItems = [
    { to: "/admin", label: "Dashboard", isActive: inDashboard },
    { to: "/admin/paket", label: "Kelola Paket", isActive: inPaket },
    {
      to: "/admin/reservasi",
      label: "Kelola Reservasi",
      isActive: inReservasi,
    },
  ];

  return (
    <>
      <AdminDrawerNav
        inDashboard={inDashboard}
        inPaket={inPaket}
        inReservasi={inReservasi}
      />
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
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  as={RouterLink}
                  to={item.to}
                  w="200px"
                  variant={item.isActive ? "surface" : "ghost"}
                  colorPalette="purple"
                  justifyContent="center"
                  _hover={{ bg: hoverBg }}
                >
                  {item.label}
                </Button>
              ))}
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
