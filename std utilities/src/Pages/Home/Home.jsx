import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        className='md:pt-64 pt-20' 
      >
        <div className="flex flex-col justify-center gap-5 md:flex-row sm:flex-col items-center mt-5 p-8 ">
          <Link to="/feeder-management">
            <Tab className="tabs" 
              label="Feeder Management"
              active={activeTab === "Feeder Management"}
              onClick={() => handleTabClick("Feeder Management")}
            />
          </Link>
          <Link to="/pump-energy">
            <Tab  
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
