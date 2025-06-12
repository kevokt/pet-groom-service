import React from "react";
import { Container, Stack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import WorkshopCarousel from "./WorkshopCarousel";
import { useColorModeValue } from "../ui/color-mode";

const AboutSection = () => {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 25, md: 28 }}
        direction={{ base: "column-reverse", xl: "row" }}
      >
        <Stack
          flex={1}
          spacing={{ base: 5, md: 5 }}
          align="center"
          textAlign="center"
        >
          <Heading lineHeight={1.1} fontWeight={600}>
            <Text
              fontSize="1.75rem"
              fontWeight="600"
              id="about-us"
              mt={{ base: 12, xl: 0 }}
              mb="5"
              fontFamily="'Baloo 2', sans-serif"
            >
              Tentang kami
            </Text>
          </Heading>
          <Text
            fontFamily="'Baloo 2', sans-serif"
            color={useColorModeValue("gray.700", "gray.300")}
            px={{ base: "80px", lg: "40px" }}
          >
            Pawfection adalah layanan grooming hewan yang memudahkan Anda
            merawat anjing, kucing, atau kelinci kesayangan. Melalui platform
            kami, Anda bisa memilih jenis hewan, menentukan paket perawatan yang
            tersedia, serta menjadwalkan layanan sesuai waktu yang diinginkan.
            Setiap layanan dirancang untuk memberikan kenyamanan maksimal, mulai
            dari perawatan dasar hingga opsi tambahan sesuai kebutuhan hewan
            peliharaan Anda.
            <br /> <br /> Untuk pengelolaan, Pawfection menyediakan sistem admin
            yang memungkinkan tim melihat dan mengatur pemesanan, mengelola data
            layanan dan pengguna, serta menugaskan groomer. Proses yang
            terintegrasi ini memastikan layanan berjalan profesional, efisien,
            dan memuaskan bagi pelanggan maupun hewan peliharaan.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"600px"}
            overflow={"hidden"}
          >
            <WorkshopCarousel />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default AboutSection;
