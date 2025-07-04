import { Box, Button, Container, HStack, VStack } from "@chakra-ui/react";
import {
  ColorModeButton,
  useColorMode,
  useColorModeValue,
} from "@/components/ui/color-mode";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toaster } from "@/components/ui/toaster";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import Layanan from "./pages/Layanan";
import Reservasi from "./pages/Reservasi";
import AdminReservasi from "./pages/AdminPages/AdminReservasi";
import AdminPaket from "./pages/AdminPages/AdminPaket";
import AdminPaketCreate from "./pages/AdminPages/AdminPaketCreate";
import AdminPaketUpdate from "./pages/AdminPages/AdminPaketUpdate";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box minHeight={"100vh"} bg={useColorModeValue("gray.200", "gray.800")}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/reservasi" element={<Reservasi />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/paket"
              element={
                <ProtectedRoute>
                  <AdminPaket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/paket/create"
              element={
                <ProtectedRoute>
                  <AdminPaketCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/paket/update/:id"
              element={
                <ProtectedRoute>
                  <AdminPaketUpdate />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/reservasi"
              element={
                <ProtectedRoute>
                  <AdminReservasi />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
