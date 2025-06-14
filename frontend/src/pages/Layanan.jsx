import React from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import HomeNav from "@/components/HomeNavbar/HomeNav";
import Footer from "@/components/Footer";

const Layanan = () => {
  return (
    <>
      <HomeNav inLayanan={true} />
      <Box w="full" p={"8"}>
        <Stack>
          <Text textAlign={"center"} fontWeight={"600"} fontSize={"3xl"}>
            Layanan Kami
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            justifyItems="center"
          >
            <Card.Root
              maxW="sm"
              overflow="hidden"
              mx={"4"}
              my={"8"}
              bg={useColorModeValue("white", "gray.700")}
            >
              <Card.Body gap="2">
                <Card.Title>Paket A | Basic Care</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Card.Description>
                <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text>
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root
              maxW="sm"
              overflow="hidden"
              mx={"4"}
              my={"8"}
              bg={useColorModeValue("white", "gray.700")}
            >
              <Card.Body gap="2">
                <Card.Title>Paket A | Basic Care</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Card.Description>
                <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text>
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
              </Card.Footer>
            </Card.Root>
            <Card.Root
              maxW="sm"
              overflow="hidden"
              mx={"4"}
              my={"8"}
              bg={useColorModeValue("white", "gray.700")}
            >
              <Card.Body gap="2">
                <Card.Title>Paket A | Basic Care</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Card.Description>
                <Text
                  textStyle="2xl"
                  fontWeight="medium"
                  letterSpacing="tight"
                  mt="2"
                >
                  $450
                </Text>
              </Card.Body>
              <Card.Footer gap="2">
                <Button variant="solid">Buy now</Button>
                <Button variant="ghost">Add to cart</Button>
              </Card.Footer>
            </Card.Root>
          </SimpleGrid>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default Layanan;
