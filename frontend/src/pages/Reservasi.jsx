import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  Text,
  Stack,
  SimpleGrid,
  Field,
  Fieldset,
  Input,
  Center,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";
import axios from "axios";
import HomeNav from "@/components/HomeNavbar/HomeNav";

const Layanan = () => {
  const [name, setName] = useState("");
  const [petImage, setPetImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("petImage", petImage);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/reservasi",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toaster.create({
        title: "Registration Successful!",
        type: "info",
      });
    } catch (error) {
      toaster.create({ title: "Gagal menyimpan", type: "error" });
      console.error(error);
    }
  };

  return (
    <>
      <HomeNav inReservasi={true} />
      <Text textAlign={"center"} fontWeight={"600"} fontSize={"3xl"} mt={"8"}>
        Reservasi
      </Text>
      <Text textAlign={"center"}>
        Silahkan isi form dibawah ini untuk melakukan reservasi
      </Text>
      <Center>
        <Box
          as="form"
          onSubmit={handleSubmit}
          w="80%"
          maxW={"800px"}
          bg={useColorModeValue("gray.100", "gray.700")}
          mt={8}
          p={8}
          rounded={"2xl"}
          shadow={"2xl"}
        >
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Daftar Reservasi</Fieldset.Legend>
              <Fieldset.HelperText>
                Tolong isi form dibawah ini dengan informasi yang benar
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Nama</Field.Label>
                <Input
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Gambar Peliharaan</Field.Label>
                <input
                  name="petImage"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPetImage(e.target.files[0])}
                  required
                />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start" mt={4}>
              Submit
            </Button>
          </Fieldset.Root>
        </Box>
      </Center>
    </>
  );
};

export default Layanan;
