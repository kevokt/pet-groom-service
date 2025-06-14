import { useEffect, useState } from "react";
import { Box, HStack, Button, Card, Image, Text, Flex } from "@chakra-ui/react";
import AdminSidebarNav from "../../components/AdminNavbar/AdminSidebarNav";
import axios from "axios";
import { useColorModeValue } from "@/components/ui/color-mode";
import { toaster } from "@/components/ui/toaster";

const AdminReservasi = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/api/reservasi")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/reservasi/${id}`);
      fetchData(); // refresh data setelah delete
      toaster.create({
        title: "Reservasi berhasil dihapus!",
        type: "success",
      });
    } catch (err) {
      console.error("Gagal menghapus:", err);
      toaster.create({
        title: `Gagal menghapus reservasi dengan ID ${id}`,
        type: "error",
      });
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    // Tentukan status berikutnya
    let newStatus = "pending";
    if (currentStatus === "pending") newStatus = "approved";
    else if (currentStatus === "approved") newStatus = "rejected";
    else if (currentStatus === "rejected") newStatus = "pending";

    try {
      await axios.put(`http://localhost:3000/api/reservasi/${id}`, {
        status: newStatus,
      });
      fetchData(); // refresh data setelah update
      toaster.create({
        title: `Status berhasil diubah menjadi ${newStatus}!`,
        type: "success",
      });
    } catch (err) {
      console.error("Gagal update status:", err);
      toaster.create({
        title: `Gagal mengubah status reservasi dengan ID ${id}`,
        type: "error",
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "green";
      case "approved":
        return "red";
      case "rejected":
        return "yellow";
      default:
        return "gray";
    }
  };

  const getStatusButtonText = (status) => {
    switch (status) {
      case "pending":
        return "Approve";
      case "approved":
        return "Reject";
      case "rejected":
        return "Pending";
      default:
        return "Ganti Status";
    }
  };

  return (
    <HStack>
      <AdminSidebarNav inReservasi={true} />
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
          Data Reservasi
        </Text>
        <Flex
          wrap={"wrap"}
          gap={"20px"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          p={"5"}
        >
          {data.map((item) => (
            <Card.Root
              maxW="3xs"
              overflow="hidden"
              bg={useColorModeValue("white", "gray.700")}
            >
              <Image
                src={`http://localhost:3000/uploads/${item.petImage}`}
                alt="Green double couch with wooden legs"
                w={"100%"}
                h={"150px"}
              />
              <Card.Body gap="2">
                <Card.Title textAlign={"center"}>
                  {item.namaPeliharaan}
                </Card.Title>
                <Card.Description>
                  <Box
                    as="ul"
                    listStylePosition="inside"
                    className="dataReservasi"
                  >
                    <li>
                      <strong>Owner:</strong> <br />
                      {item.namaPemesan}
                    </li>
                    <li>
                      <strong>No HP:</strong> <br />
                      {item.nomorTelepon}
                    </li>
                    <li>
                      <strong>Hewan:</strong> <br /> {item.jenisHewan}
                    </li>
                    <li>
                      <strong>Paket:</strong> <br /> {item.paket}
                    </li>
                    <li>
                      <strong>Jadwal:</strong> <br /> {item.jadwal}
                    </li>
                    <li>
                      <strong>Status:</strong> <br /> {item.status}
                    </li>
                  </Box>
                </Card.Description>
              </Card.Body>
              <Card.Footer gap="2">
                <Button
                  variant="solid"
                  size={"2xs"}
                  colorPalette={getStatusColor(item.status)}
                  onClick={() => handleToggleStatus(item._id, item.status)}
                >
                  {getStatusButtonText(item.status)}
                </Button>
                <Button
                  variant="solid"
                  colorPalette={"red"}
                  size={"2xs"}
                  onClick={() => handleDelete(item._id)}
                >
                  Hapus Data
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Flex>
      </Box>
    </HStack>
  );
};

export default AdminReservasi;
