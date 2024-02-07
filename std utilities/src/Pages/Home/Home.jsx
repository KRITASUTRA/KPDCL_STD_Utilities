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
      >
        <div className="tabs-container">
          <Link to="/feeder-management">
            <Tab  style={{
              marginTop: 200,
              marginBottom: 200,
              padding: '60%',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '10px',
              ...(window.innerWidth < 769 && { /* Adjust styles for screens smaller than 768px */
                padding: '5%', // Adjusted padding for smaller screens
                backgroundColor: 'rgba(255,255,255,0.5)', // Adjusted background color for smaller screens
              }),
              ...(window.innerWidth < 426 && { /* Adjust styles for screens smaller than 426px */
                padding: '0%',gap:0 // Further adjusted padding for even smaller screens
              })
            }} 
              label="Feeder Management"
              active={activeTab === "Feeder Management"}
              onClick={() => handleTabClick("Feeder Management")}
            />
          </Link>
          <Link to="/pump-energy">
            <Tab  style={{
              marginTop: 200,
              marginBottom: 200,
              padding: '60%',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '10px',
              ...(window.innerWidth < 769 && { /* Adjust styles for screens smaller than 768px */
                padding: '5%', // Adjusted padding for smaller screens
                backgroundColor: 'rgba(255,255,255,0.5)', // Adjusted background color for smaller screens
              }),
              ...(window.innerWidth < 426 && { /* Adjust styles for screens smaller than 426px */
                padding: '0%',gap:0 // Further adjusted padding for even smaller screens
              })
            }}
              label="Pump Energy"
              active={activeTab === "Pump Energy"}
              onClick={() => handleTabClick("Pump Energy")}
            />
          </Link>
          <Link to="/scheduled-outage">
          <Tab
          style={{
            marginTop: 200,
            marginBottom: 200,
            padding: '60%',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: '10px',
            ...(window.innerWidth < 769 && { /* Adjust styles for screens smaller than 768px */
              padding: '5%', // Adjusted padding for smaller screens
              backgroundColor: 'rgba(255,255,255,0.5)', // Adjusted background color for smaller screens
            }),
            ...(window.innerWidth < 426 && { /* Adjust styles for screens smaller than 426px */
              padding: '0%',gap:0, // Further adjusted padding for even smaller screens
            })
          }}
          label="Scheduled Outage"
          active={activeTab === "Scheduled Outage"}
          onClick={() => handleTabClick("Scheduled Outage")}
        />
          </Link>
          <Link to="/unscheduled-outage">
            <Tab  style={{
              marginTop: 200,
              marginBottom: 200,
              padding: '60%',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '10px',
              ...(window.innerWidth < 769 && { /* Adjust styles for screens smaller than 768px */
                padding: '5%', // Adjusted padding for smaller screens
                backgroundColor: 'rgba(255,255,255,0.5)', // Adjusted background color for smaller screens
              }),
              ...(window.innerWidth < 426 && { /* Adjust styles for screens smaller than 426px */
                padding: '0%',gap:0, // Further adjusted padding for even smaller screens
              })
            }}
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
