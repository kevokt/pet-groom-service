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
  NativeSelect,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";
import axios from "axios";
import HomeNav from "@/components/HomeNavbar/HomeNav";
import Footer from "@/components/Footer";

const Layanan = () => {
  const [form, setForm] = useState({
    namaPemesan: "",
    nomorTelepon: "",
    jenisHewan: "",
    paket: "",
    jadwal: "",
  });
  const [petImage, setPetImage] = useState(null);

  const jenisHewanOptions = [
    "Pilih Jenis Hewan",
    "Kucing",
    "Anjing",
    "Kelinci",
    "Lainnya",
  ];

  const paketOptions = [
    "Pilih Paket",
    "Paket A | Basic Care (Rp 50.000)",
    "Paket B | Premium Care (Rp 100.000)",
    "Paket C | VIP Care (Rp 150.000)",
    "Paket D | Deluxe Care (Rp 200.000)",
  ];

  const jadwalOptions = [
    "Pilih Jadwal",
    "Senin (08:00 - 12:00)",
    "Senin (13:00 - 17:00)",
    "Kamis (08:00 - 12:00)",
    "Kamis (13:00 - 17:00)",
    "Sabtu (08:00 - 12:00)",
    "Sabtu (13:00 - 17:00)",
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
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
        title: "Registration Berhasil!",
        type: "success",
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
          mb={"8"}
        >
          <Fieldset.Root size="lg" w="100%">
            <Stack align={"center"}>
              <Fieldset.Legend>Daftar Reservasi</Fieldset.Legend>
              <Fieldset.HelperText>
                Tolong isi form dibawah ini dengan informasi yang benar
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Nama Pemesan</Field.Label>
                <Input
                  name="namaPemesan"
                  value={form.namaPemesan}
                  onChange={handleChange}
                  required
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Nomor Telepon</Field.Label>
                <Input
                  name="nomorTelepon"
                  value={form.nomorTelepon}
                  onChange={handleChange}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Jenis Hewan</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name="jenisHewan"
                    value={form.jenisHewan}
                    onChange={(e) =>
                      setForm({ ...form, jenisHewan: e.target.value })
                    }
                  >
                    {jenisHewanOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label>Paket</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name="paket"
                    value={form.paket}
                    onChange={(e) =>
                      setForm({ ...form, paket: e.target.value })
                    }
                  >
                    {paketOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label>Jadwal</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name="jadwal"
                    value={form.jadwal}
                    onChange={(e) =>
                      setForm({ ...form, jadwal: e.target.value })
                    }
                  >
                    {jadwalOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
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

            <Button
              type="submit"
              alignSelf="flex-start"
              colorPalette={"purple"}
              mt={4}
            >
              Submit
            </Button>
          </Fieldset.Root>
        </Box>
      </Center>

      <Footer />
    </>
  );
};

export default Layanan;
