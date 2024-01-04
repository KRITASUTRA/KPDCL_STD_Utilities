import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Layout from "../../Components/Layout/Layout";
import backgroundImage from "../../assets/icons/home-bg.jpeg.jpg";
import { Tab } from "@mui/material";
import './home.css';

const Home = ({ title }) => {
  const [activeTab, setActiveTab] = useState("Feeder Management");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Layout title={title}>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tabs-container"> 
          {/* Use Link from react-router-dom to navigate to different paths */}
          <Link to="/feeder-management">
            <Tab style={{marginTop: 200}} 
              label="Feeder Management"
              active={activeTab === "Feeder Management"}
              onClick={() => handleTabClick("Feeder Management")}
            />
          </Link>
          <Link to="/pump-energy">
            <Tab style={{marginTop: 200}} 
              label="Pump Energy"
              active={activeTab === "Pump Energy"}
              onClick={() => handleTabClick("Pump Energy")}
            />
          </Link>
          <Link to="/scheduled-outage">
            <Tab
              label="Scheduled Outage"
              active={activeTab === "Scheduled Outage"}
              onClick={() => handleTabClick("Scheduled Outage")}
            />
          </Link>
          <Link to="/unscheduled-outage">
            <Tab
              label="Unscheduled Outage"
              active={activeTab === "Unscheduled Outage"}
              onClick={() => handleTabClick("Unscheduled Outage")}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
