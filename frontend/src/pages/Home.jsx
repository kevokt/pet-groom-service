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
import Hero from "@/components/Hero";
import HomeNav from "@/components/HomeNavbar/HomeNav";
import AboutSection from "@/components/About/AboutSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <HomeNav inBeranda={true} />
      <Hero />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
