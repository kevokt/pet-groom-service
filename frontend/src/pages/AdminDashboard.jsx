import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/reservasi")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Daftar Reservasi</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={`http://localhost:3000/uploads/${item.petImage}`}
              alt={item.name}
              style={{ width: "100%", height: "auto" }}
            />
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
