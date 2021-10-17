import React from "react";

import NavbarAdmin from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";

const Dashboard = (props) => {
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "558px",
        }}
      >
        <h1>Admin Dashboard</h1>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
