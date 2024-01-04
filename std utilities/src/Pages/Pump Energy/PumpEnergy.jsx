import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import "./PumpEnergy.css";
import Paper from "@mui/material/Paper";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

const mainTableData = [
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
  {
    id: 1,
    OID: "2262146",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    duration: "5 mins",
  },
];

const PumpEnergy = ({ title }) => {
  const [age, setAge] = React.useState("");
  const [tableData, setTableData] = useState(mainTableData);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout title={title}>
      <div className="pump-container">
        <div className="left-pump-container">
          <Stack className="left-pump-form">
            <Stack direction="row" spacing={6} marginBottom={0}>
              <Stack width={"40%"}>
                <InputLabel style={{ marginBottom: "2px" }}>
                  Sub Division
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    onChange={handleChange}
                    style={{ borderRadius: "10px", height: "60%" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack width={"40%"}>
                <InputLabel>Receiving Station</InputLabel>
                <FormControl fullWidth>
                  <Select
                    onChange={handleChange}
                    style={{ borderRadius: "10px", height: "60%" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={6}>
              <Stack width={"40%"}>
                <InputLabel>Feeders</InputLabel>
                <FormControl fullWidth>
                  <Select
                    onChange={handleChange}
                    style={{ borderRadius: "10px", height: "60%" }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              {/* <Stack width={"40%"}>
                <InputLabel>Month and Year</InputLabel>
                <Stack direction="row" spacing={1} width={"100%"}>
                  <Stack width={"45%"}>
                    <FormControl fullWidth>
                      <Select onChange={handleChange} style={{borderRadius:'10px', height:'60%'}}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack width={"40%"}>
                    <FormControl fullWidth>
                      <Select onChange={handleChange} style={{borderRadius:'10px', height:'60%'}}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </Stack> */}
              <Stack width={"40%"}>
                <InputLabel>Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    slotProps={{
                      field: {
                        clearable: true,
                      },
                      textField: {
                        InputProps: {
                          sx: { borderRadius:2.5, height: "66%",fontSize:12 }, // Adjust the height value as needed
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Stack>
            <Stack direction="row" spacing={6}>
              <Stack className="customTextField" style={{ width: "40%" }}>
                <InputLabel>Total Supply</InputLabel>
                <input className="customInput" placeholder="" />
              </Stack>
              <Stack style={{ width: "40%" }}>
                <InputLabel>Supply Unit in KW</InputLabel>
                <FormControl fullWidth>
                  <Select
                    style={{ borderRadius: "10px", height: "60%" }}
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>

            {/* <Stack direction="row" spacing={6}>
                                                                            
                                                                              <Stack width={"40%"}>
                                                                                <InputLabel>Time</InputLabel>
                                                                                <Stack direction="row" spacing={1}>
                                                                                  <Stack>
                                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                      <TimePicker 
                                                                                        sx={{
                                                                                          borderRadius: 8, // Set the desired border-radius value
                                                                                        }}
                                                                                      />
                                                                                    </LocalizationProvider>
                                                                                  </Stack>
                                                                                  <Stack>
                                                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                                      <TimePicker 
                                                                                        sx={{
                                                                                          borderRadius: 8, // Set the desired border-radius value
                                                                                        }}
                                                                                      />
                                                                                    </LocalizationProvider>{" "}
                                                                                  </Stack>
                                                                                </Stack>
                                                                              </Stack>
                                                                            </Stack> */}

            <Stack width={120} margin={"20px auto 0 auto"}>
              <Button variant="contained">Submit</Button>
            </Stack>
          </Stack>
        </div>

        <div className="right-pump-container">
          <div className="right-pump-table-wrapper">
            <table className="right-custom-table">
              <thead>
                <tr className="header-of-table">
                  <th>Date</th>
                  <th>RST</th>
                  <th>Sub Division</th>
                  <th>Feeder</th>
                  <th>KW</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.OID}</td>
                    <td>{item.feeder_name}</td>
                    <td>{item.date}</td>
                    <td>{item.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="view-more-container">
              <a href="/pump-table-view">View more</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PumpEnergy;
