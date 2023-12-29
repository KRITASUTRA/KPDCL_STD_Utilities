import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import backgroundImage from "../../assets/icons/home-bg.jpeg.jpg";
import { Tab } from "@mui/material";
import './home.css';


const Home = ({ title }) => {
  const [activeTab, setActiveTab] = useState("Feeder Management");
  const handleTabClick = (tab) => {
    setActiveTab(tab); // update the active tab state
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
          <Tab style={{marginTop: 200}} 
            label="Feeder Management"
            active={activeTab === "Feeder Management"}
            onClick={() => handleTabClick("Feeder Management")}
          />
          <Tab style={{marginTop: 200}} 
            label="Pump Energy"
            active={activeTab === "Pump Energy"}
            onClick={() => handleTabClick("Pump Energy")}
          />
          <Tab
            label="Scheduled Outage"
            active={activeTab === "Scheduled Outage"}
            onClick={() => handleTabClick("Scheduled Outage")}
          />
          <Tab
            label="Unscheduled Outage"
            active={activeTab === "Unscheduled Outage"}
            onClick={() => handleTabClick("Unscheduled Outage")}
          />
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;
