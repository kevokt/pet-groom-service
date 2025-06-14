import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebarNav from "../../components/AdminNavbar/AdminSidebarNav";
import {
  Box,
  HStack,
  Text,
  Button,
  SimpleGrid,
  Card,
  Flex,
} from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { useColorModeValue } from "@/components/ui/color-mode";

const AdminPaket = () => {
  const navigate = useNavigate();
  const [pakets, setPakets] = useState([]);

  // Fetch data dari backend
  useEffect(() => {
    const fetchPakets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/paket");
        setPakets(res.data.reverse());
      } catch (error) {
        console.error("Gagal memuat data paket:", error);
      }
    };

    fetchPakets();
  }, []);

  async function handleDelete(id) {
    const confirm = window.confirm("Yakin ingin menghapus paket ini?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/api/paket/${id}`);
      setPakets(pakets.filter((p) => p._id !== id));
      toaster.create({
        title: "Paket berhasil dihapus!",
        type: "success",
      });
    } catch (err) {
      console.error("Gagal menghapus paket:", err);
      toaster.create({
        title: "Gagal menghapus paket",
        type: "error",
      });
    }
  }

  return (
    <HStack>
      <AdminSidebarNav inPaket={true} />
      <Box
        marginLeft={{ base: "8px", md: "250px" }}
        marginTop={{ base: "100px", md: "0px" }}
        mx={{ base: "none", "2xl": "auto" }}
        maxWidth={"1200px"}
        width={"98vw"}
      >
        <Text
          as={"h2"}
          textAlign={"center"}
          fontSize={"3xl"}
          fontWeight={"bolder"}
          marginTop={{ base: "0px", md: "50px" }}
        >
          Data Paket
        </Text>

        <Box px={{ base: "24px", md: "48px", "2xl": "64px" }} mt={10}>
          <Flex justify="space-between" align="center" mb={6} flexWrap="wrap">
            <Button
              colorPalette="green"
              onClick={() => navigate("/admin/paket/create")}
            >
              Create Data
            </Button>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
            spacing={8}
            justifyItems="center"
          >
            {pakets.map((paket) => (
              <Box key={paket._id} display="flex" justifyContent="center">
                <Card.Root
                  width="300px" // lebar konsisten
                  height="400px" // tinggi konsisten
                  bg={useColorModeValue("white", "blackAlpha.300")}
                  borderRadius="2xl"
                  boxShadow="md"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  p={4}
                  my={4}
                >
                  <Card.Body gap="2" flex="1">
                    <Card.Title>{paket.namaPaket}</Card.Title>

                    <Box
                      whiteSpace="pre-line"
                      overflowY="auto"
                      minH="100px"
                      maxH="180px"
                      p={1}
                      css={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#CBD5E0 transparent",
                      }}
                    >
                      <Card.Description>{paket.deskripsi}</Card.Description>
                    </Box>
                  </Card.Body>

                  <Card.Footer
                    gap="2"
                    pt={4}
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <Text
                      textStyle="xl"
                      fontWeight="bold"
                      letterSpacing="tight"
                      color={useColorModeValue("gray.800", "gray.100")}
                    >
                      Rp {Number(paket.harga).toLocaleString("id-ID")}
                    </Text>

                    <Flex gap="2">
                      <Button
                        variant="solid"
                        colorPalette="blue"
                        size="sm"
                        onClick={() =>
                          navigate(`/admin/paket/update/${paket._id}`)
                        }
                      >
                        Update
                      </Button>
                      <Button
                        variant="solid"
                        colorPalette="red"
                        size="sm"
                        onClick={() => handleDelete(paket._id)}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Card.Footer>
                </Card.Root>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </HStack>
  );
};

export default AdminPaket;
