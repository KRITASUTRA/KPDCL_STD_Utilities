import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Unscheduled.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@mui/material";
import SwitchWithPopup from "./Switches/Switch1";

const FeedersdefaultData = [
  
];

const mainTableData = [
 
];

const Unscheduled = ({ title }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [showPopup, setShowPopup] = useState(false); 

   const handleSwitchToggle = () => {
    setIsSwitchOn((prevSwitchState) => !prevSwitchState);

    // If the switch is turned off, show the popup
    if (!isSwitchOn) {
      setShowPopup(true);
    }
  };

  const [feederData, setFeederData] = useState(FeedersdefaultData);
  const [tableData, setTableData] = useState(mainTableData);
  const [expandedRows, setExpandedRow] = useState(null);
  const toggleRow = (id) => {
    console.log("Clicked on row with id:", id);
    setExpandedRow((prevExpandedRow) =>
      prevExpandedRow === id ? null : id
    );
  };
  const datasend={
    feederName:'',
    reason:'',
    receivingStation:'',
    rsid:'',
 
  }
 
  return (
    <Layout title={title}>

      <div className="unsch-container">
        <div className="unsch-left-box">
        <div className="unsch-receiving-station">
        <div>
          <h3>Sub Division</h3>
          <input placeholder="Srinagar" />
        </div>
        <div>
          <h3>Receiving Station</h3>
          <input placeholder="Babar Shah" />
          
        </div>
        <SwitchWithPopup isSwitchOn={isSwitchOn} onToggle={handleSwitchToggle} />
      </div>
      
          
          <div className="unsch-feeder-table">
            <h3>Feeders</h3>
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>FID</th>
                    <th>Feeder Name</th>
                    <th>Description</th>
                    <th>Receiving Station</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {feederData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.feeder_name}</td>
                      <td>{item.description}</td>
                      <td>{item.receivingStation}</td>
                      <td>
                        <SwitchWithPopup />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="unsch-right-box">
          <div className="right-table-container">
            <table className="right-custom-table">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>OID</th>
                  <th>Feeder Name</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
              {tableData.map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.OID}</td>
                    <td>{item.feeder_name}</td>
                    <td>{item.date}</td>
                    <td>{item.duration}</td>
                    <td style={{ width: 0 }}>
                      <Button
                        variant="outlined"
                        onClick={() => toggleRow(item.id)}
                      >
                        Show
                      </Button>
                    </td>
                    <td>
                      <RiDeleteBinLine />
                    </td>
                  </tr>
                  {expandedRows === item.id && (
                    <tr>
                      <td colSpan="7">
                        <div className="expandable-content">
                          <div>
                            <strong>Reason:</strong> <br/> {item.reason}
                          </div>
                          <div>
                            <strong>Off time:</strong> <br/> {item.offTime}
                          </div>
                          <div>
                            <strong>On time:</strong> <br/> {item.onTime}
                          </div>
                          <div>
                            <strong>Entry time:</strong> <br/> {item.entryTime}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Unscheduled;
