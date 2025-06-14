import { useState } from "react";
import axios from "axios";
import AdminSidebarNav from "../../components/AdminNavbar/AdminSidebarNav";
import {
  Box,
  HStack,
  Text,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toaster } from "@/components/ui/toaster";
import { useColorModeValue } from "@/components/ui/color-mode";

const AdminPaketCreate = () => {
  const [namaPaket, setNamaPaket] = useState("");
  const [price, setPrice] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/paket", {
        namaPaket,
        harga: parseInt(price),
        deskripsi,
      });

      toaster.create({
        title: "Paket berhasil ditambahkan!",
        type: "success",
      });
      navigate("/admin/paket");
    } catch (err) {
      console.error("Gagal menambahkan paket:", err);
      toaster.create({
        title: "Gagal menambahkan paket",
        type: "error",
      });
    }
  };

  return (
    <HStack>
      <AdminSidebarNav inPaket={true} />
      <Box
        marginLeft={{ base: "8px", md: "250px" }}
        marginTop={{ base: "100px", md: "0px" }}
        mx={{ base: "none", "2xl": "auto" }}
        maxWidth={"1200px"}
        width={"98vw"}
        paddingLeft={{ base: "0", "2xl": "8" }}
      >
        <Text
          as="h2"
          textAlign="center"
          fontSize="3xl"
          fontWeight="bolder"
          marginTop={{ base: "0px", md: "50px" }}
        >
          Tambah Data Paket
        </Text>

        <Center>
          <Box w="80%" maxW="800px">
            <Button
              mt={8}
              mb={4}
              onClick={() => navigate("/admin/paket")}
              colorPalette="red"
            >
              Keluar
            </Button>

            <Box
              as="form"
              onSubmit={handleSubmit}
              bg={useColorModeValue("gray.100", "blackAlpha.300")}
              p={8}
              rounded="2xl"
              shadow="2xl"
              mb="8"
            >
              <Fieldset.Root size="lg" w="100%">
                <Stack align="center">
                  <Fieldset.Legend>Tambah Data Paket</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Silahkan isi form di bawah ini untuk menambahkan atau
                  </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Nama Paket</Field.Label>
                    <Input
                      name="namaPaket"
                      placeholder="Paket A | Basic Care"
                      value={namaPaket}
                      onChange={(e) => setNamaPaket(e.target.value)}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Harga</Field.Label>
                    <Input
                      name="price"
                      placeholder="50000 | 100000 | 150000"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Deskripsi Paket</Field.Label>
                    <Textarea
                      name="deskripsi"
                      rows={5}
                      placeholder={
                        "Masukkan deskripsi, pisahkan dengan baris baru.\nContoh:\n- Grooming\n- Vaksin\n- Pemeriksaan kesehatan"
                      }
                      value={deskripsi}
                      onChange={(e) => setDeskripsi(e.target.value)}
                    />
                  </Field.Root>
                </Fieldset.Content>

                <Button
                  type="submit"
                  colorPalette="green"
                  alignSelf="flex-start"
                  mt={4}
                >
                  Create
                </Button>
              </Fieldset.Root>
            </Box>
          </Box>
        </Center>
      </Box>
    </HStack>
  );
};

export default AdminPaketCreate;
