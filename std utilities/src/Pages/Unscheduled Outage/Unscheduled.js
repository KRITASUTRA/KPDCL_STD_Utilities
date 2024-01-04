import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Unscheduled.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { Switch1, Switch0 } from "./Switches/Switch1";

const FeedersdefaultData = [
  {
    id: 1,
    feeder_name: "Nai Sarak: F1",
    description: "Nai sarak/Habba Kadal",
    receivingStation: "Barbar Shah",
  },
  {
    id: 2,
    feeder_name: "Exchange: F5",
    description: "Exchange & Government Press",
    receivingStation: "Barbar Shah",
  },
  {
    id: 3,
    feeder_name: "Babarshah: F2",
    description: "Babarshah",
    receivingStation: "Barbar Shah",
  },
  {
    id: 3,
    feeder_name: "Babarshah: F2",
    description: "Babarshah",
    receivingStation: "Barbar Shah",
  },
];

const mainTableData = [
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 2,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 3,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 4,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 5,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 6,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 7,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 8,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 9,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 10,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
  {
    id: 11,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },  
  {
    id: 12,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
    reason: "Scheduled local containment",
    offTime: "10:00",
    onTime: "1:30",
    entryTime: "2:10",
  },
];

const Unscheduled = ({ title }) => {
  const [feederData, setFeederData] = useState(FeedersdefaultData);
  const [tableData, setTableData] = useState(mainTableData);
  const [expandedRows, setExpandedRow] = useState(null);
  const toggleRow = (id) => {
    console.log("Clicked on row with id:", id);
    setExpandedRow((prevExpandedRow) =>
      prevExpandedRow === id ? null : id
    );
  };
  
 
  return (
    <Layout title={title}>
      <div className="unsch-container">
        <div className="unsch-left-box">
          <div className="unsch-receiving-station">
            <h3>Receving Station</h3>
            <div>
              <input placeholder="Babar Shah" />
              <Switch0 />
            </div>
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
                        <Switch1 />
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
