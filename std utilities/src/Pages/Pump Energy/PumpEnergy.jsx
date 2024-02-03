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
    OID: "BARBAR SHAH",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "BASANT BAGH",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "ADOORA",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"BARAMULLA"
  },
  {
    id: 1,
    OID: "ADOORA",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"BARAMULLA"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"BUDGAM"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"BUDGAM"
  },
  {
    id: 1,
    OID: "GAGANGEER",
    feeder_name: "Nai Sarak: F1",
    date: "12/12/2023",
    unit: "5 W",
    sd:"SRINAGAR"
  },
];

const PumpEnergy = ({ title }) => {
  const dataSend={
    rst:'',
    subDivision:'',
    feeder:'',
    kw:'',
    energyDate:'123213',
    totalSupply:'23',
  }
  const [data,setData]=useState(dataSend);
  const [age, setAge] = React.useState("");
  const [tableData, setTableData] = useState(mainTableData);

  const handleChange = (event) => {
    setData({...data,feeder:event.target.value});
    console.log('After Feeder:',data);
  };
  const handleChangeKw = (event) => {
    setData({...data,kw:event.target.value});
    console.log('After kw:',data);
  };
  // const [value,setValue]=useState('');
  const [subDivision, setSubDivision] = useState('');
  const [receivingStation, setReceivingStation] = useState([]);

  const receivingStations = {
    'SRINAGAR' : ['BARBAR SHAH ','BASANT BAGH','BREINE','BUCHWARA','CENTAUR','FATEH KADAL','HARWAN','KAWDARA','KHAYAM','MUGHAL MASJID','NEDOUS','NISHAT','SHALIMAR',
                  'TRC','BADAMIBAGH'],
    'BUDGAM' : ['B. K. PORA','BEERWAH','BRANWAR','BUDGAM','CHADOORA','CHARARISHAREEF','ICHGAM','KANIR','KHAG','KHAN SAHIB','KHANDA','KREMSHORE'],
    'KUPWARA' :['ADOORA', 'CHOGUL', 'DRUGMULLA', 'GANAPORA','HANDWARA','KHUMRIYAL', 'KRALPORA', 'KRUSEN', 'LASSIPORA SOGAM', 'MAGAM (KUPWARA) ', 'TANGDHAR'],
    'BARAMULLA' :['ARAMPORA','BARAMULLA-I','BASE STATION','BARAMULLA - II','BONIYAR','CHAKLOO','CHANDOOSA'],
    'BANDIPORA' : ['AJAR','AJAS','ALOOSA','HAJIN','MANASBAL (SAFAPORA)','MARKUNDAL','NADIHAL','NAIDKHAI','PANZIGAM','PRENG MADHWAN','SHADIPORA',],
    'GANDERBAL' : ['ALASTENG','DOODERHAMA','GAGANGEER','GANDASINGH','KANGAN','KANGAN OF PDC','KHEER- BHAWANI','KURHAMA','LAR'],
    'ANANTNAG' : ['AISHMUQAM','AKURA','ASHAJIPORA','DIALGAM','DOORU-SOUTH','GOPALPORA','HARNAG','HILLER-BAHI','HILLER-DOORU','HUTMURA','JANGLATMANDI (BRAKPORA)','KHIRAM','KOKERNAG'],
    'KULGAM' : ['KULGAM','NILLOW', 'QAIMOH', 'YARIPORA', 'BEHIBAGH','KEELAM','Rembhama','CHOWGAM', 'Safalpora']
  };

  const handleSubDivisionChange = (e) => {
    setSubDivision(e.target.value);
    setReceivingStation(receivingStations[e.target.value]);
    setData({...data,subDivision:e.target.value});
  };

  const handleReceivingStationChange=(e)=>{
    setData({...data,rst:e.target.value});
    console.log('Data: ',data)
  }

  const handleClick=async()=>{
    try{
      console.log('After Click',data);
      const response=await fetch('http://172.18.2.96:8081/api/pumpEnergy',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json', // Specify the content type if sending JSON data
        // Add any additional headers if needed
      },
      body:JSON.stringify(data),
      });
      if(!response.ok){
        return null;
      }
      const responseData=await response.json();
      console.log(responseData);
    }catch(e){
      console.log(e.message);
    }
  }
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
                <select className="pump-feeder-select" value={subDivision} onChange={handleSubDivisionChange}>
                <option disabled value=""> Select One </option>
                {Object.keys(receivingStations).map((category) => (
                  <option key={category} value={category}>{category}</option>
              ))}
              </select>
                </FormControl>
              </Stack>
              <Stack width={"40%"}>
                <InputLabel>Receiving Station</InputLabel>
                <FormControl fullWidth>
                <select className="pump-feeder-select" value={data.rst} onChange={handleReceivingStationChange}>
                <option disabled selected value=""> Select One  </option>
                {receivingStation.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
                </select>
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
                    value={data.feeder}
                  >
                    <MenuItem disabled selected value=''>Select One</MenuItem>
                    <MenuItem value={'Nai Sarak : F1'}>Nai Sarak : F1</MenuItem>
                    <MenuItem value={'Exchange : F5'}>Exchange : F5</MenuItem>
                    <MenuItem value={'Barbarshah: F2'}>Barbarshah: F2</MenuItem>
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
                <InputLabel>Supply Unit </InputLabel>
                <FormControl fullWidth>
                  <Select
                    style={{ borderRadius: "10px", height: "60%" }}
                    onChange={handleChangeKw}
                    value={data.kw}
                  >
                    <MenuItem value={'W'}>Watt</MenuItem>
                    <MenuItem value={'KW'}>Killo Watt</MenuItem>
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
              <Button variant="contained" onClick={handleClick}>Submit</Button>
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
                    <td>{item.date}</td>
                    <td>{item.OID}</td>
                    <td>{item.sd}</td>
                    <td>{item.feeder_name}</td>
                    <td>{item.unit}</td>
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