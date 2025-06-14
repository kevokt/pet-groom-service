import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
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
import { toaster } from "@/components/ui/toaster";
import { useColorModeValue } from "@/components/ui/color-mode";

const AdminPaketUpdate = () => {
  const { id } = useParams();
  const [namaPaket, setNamaPaket] = useState("");
  const [price, setPrice] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPaket = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/paket/${id}`);
        const data = res.data;
        setNamaPaket(data.namaPaket || "");
        setPrice(data.harga?.toString() || "");
        setDeskripsi(data.deskripsi || "");
      } catch (error) {
        console.error("Gagal mengambil data paket:", error);
        toaster.create({
          title: "Gagal mengambil data paket",
          type: "error",
        });
      }
    };

    fetchPaket();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/api/paket/${id}`, {
        namaPaket,
        harga: parseInt(price),
        deskripsi,
      });

      toaster.create({
        title: "Paket berhasil diperbarui!",
        type: "success",
      });
      navigate("/admin/paket");
    } catch (err) {
      console.error("Gagal memperbarui paket:", err);
      toaster.create({
        title: "Gagal memperbarui paket",
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
          Update Data Paket
        </Text>

        <Center>
          <Box w="80%" maxW="800px">
            <Button
              mt={8}
              mb={4}
              onClick={() => navigate("/admin/paket")}
              colorPalette="red"
            >
              Kembali
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
                  <Fieldset.Legend>Ubah Data Paket</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Silahkan ubah data paket di bawah ini
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
                  Update
                </Button>
              </Fieldset.Root>
            </Box>
          </Box>
        </Center>
      </Box>
    </HStack>
  );
};

export default AdminPaketUpdate;
