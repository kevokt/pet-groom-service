import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

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

export default Logo;
