import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebarNav from "../../components/AdminNavbar/AdminSidebarNav";
import { Box, HStack, Text } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

const AdminPaket = () => {
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

  return (
    <HStack>
      <AdminSidebarNav inPaket={true} />
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
          Data Paket
        </Text>
      </Box>
    </HStack>
  );
};

export default AdminPaket;
