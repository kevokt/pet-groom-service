import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebarNav from "../../components/AdminNavbar/AdminSidebarNav";
import { Box, HStack, Text } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";

const AdminDashboard = () => {
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
      <AdminSidebarNav inDashboard={true} />
      <Box
        marginLeft={{ base: "4", md: "300px" }}
        marginTop={{ base: "100px", md: "40px" }}
      >
        <Text
          as={"h2"}
          textAlign={"center"}
          fontSize={"3xl"}
          fontWeight={"bolder"}
          marginTop={{ base: "0px", md: "50px" }}
        >
          Selamat datang di Admin Dashboard
        </Text>
      </Box>
    </HStack>
  );
};

export default AdminDashboard;
