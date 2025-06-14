import React, { useEffect, useState } from "react";
import { Box, Card, Flex, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import HomeNav from "@/components/HomeNavbar/HomeNav";
import Footer from "@/components/Footer";
import axios from "axios";

const Layanan = () => {
  const [pakets, setPakets] = useState([]);

  useEffect(() => {
    const fetchPakets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/paket");
        setPakets(res.data.reverse()); // urutkan terbaru ke terlama
      } catch (err) {
        console.error("Gagal memuat data paket:", err);
      }
    };

    fetchPakets();
  }, []);

  return (
    <>
      <HomeNav inLayanan={true} />
      <Box w="full" p={8}>
        <Stack align={"center"}>
          <Text textAlign="center" fontWeight="600" fontSize="3xl">
            Layanan Kami
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2, xl: 3 }}
            spacing={8}
            justifyItems="center"
            maxW={"1200px"}
          >
            {pakets.map((paket) => (
              <Box key={paket._id} display="flex" justifyContent="center">
                <Card.Root
                  width="300px"
                  minH="300px"
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="2xl"
                  boxShadow="md"
                  overflow="hidden"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  p={4}
                  mx={6}
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
                  </Card.Footer>
                </Card.Root>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Layanan;
