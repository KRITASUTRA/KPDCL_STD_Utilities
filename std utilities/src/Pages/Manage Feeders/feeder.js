import React, { useState } from "react";
import "./Manage-feeder.css";
import "./manageFeeder.css";
import Layout from "../../Components/Layout/Layout";
import Dropdown from "../../Components/Layout/selectDrops";

const TableData = [
  
];

const ManageFeeder = ({ title }) => {
  const [subDivision, setSubDivision] = React.useState(null);
  const [receivingStation, setReceivingStation] = React.useState(null);
  const [selectedFeeder, setSelectedFeeder] = React.useState(null);
  const [tableData, setTableData] = useState(TableData);

  const receivingStations = {
    
  };

  const handleSubDivisionChange = (e) => {
    setSubDivision(e.target.value);
    setReceivingStation(receivingStations[e.target.value]);
  };
  const subdivisionItems = [''];
  const receivingStationItems = [''];
  const feederItems = [''];

  return (
    <Layout title={title}>
    <div className="bg-gray-50 p-6 mx-5 mt-20 md:mx-auto md:max-w-xl lg:max-w-2xl xl:max-w-6xl lg:ml-16  lg:mt-28">

      {/* 
        <div className="new-feeder-ddn  justify-center items-center">
          <div className="      flex-col">
            {" "}
            <div>Sub Division </div>
            <div className="Blank"></div>
            <select
              className="feeder-select"
              value={subDivision}
              onChange={handleSubDivisionChange}
            >
              <option disabled value="">
                -- Select One --
              </option>
              {Object.keys(receivingStations).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="      flex-col">
            {" "}
            <div>
            Recieving Station </div>
            <div className="Blank"></div>
            <select className="feeder-select">
              <option disabled selected value="">
                {" "}
                -- Select One --{" "}
              </option>
              {receivingStation.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="     flex-col">
            {" "}
            Feeder Name
            <br />
            <div className="Blank"></div>
            <select className="feeder-select">
              <option disabled selected value="">
                -- Select One --
              </option>
              <option></option>
            </select>
          </div>
        </div>*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="flex flex-col items-center justify-center">
        <div className='text-black text-sm font-medium mb-2'>
            Sub Division 
        </div>
        <Dropdown
            label="Select One"
            items={subdivisionItems}
            onSelect={(item) => setSubDivision(item)}
        />
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className='text-black text-sm font-medium mb-2'>
            RECEIVING STATION
        </div>
        <Dropdown
            label="Select One "
            items={receivingStationItems}
            onSelect={(item) => setReceivingStation(item)}
        />
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className='text-black text-sm font-medium mb-2'>
            FEEDER
        </div>
        <Dropdown
            label="Select One"
            items={feederItems}
            onSelect={(item) => setSelectedFeeder(item)}
        />
    </div>
</div>


      </div>

      <main>
      <div class="feederList-heading flex flex-col sm:flex-row items-center justify-between">
      <div class="list-heading">
          <h3>Feeder List</h3>
      </div>
      <div class="flex flex-col sm:flex-row items-center justify-center mt-5 ">

          <button class="bg-blue-500 text-white text-sm font-normal py-2 px-5 mb-5 sm:mr-5 border border-blue-500 rounded">
              Download
          </button>
      </div>
  </div>
  
        <div className='table-wrapper' style={{ marginLeft: 65 }}>
          <table>
            <thead>
              <tr className="header-of-table">
                <th>Feeder Id</th>
                <th>Name</th>
                <th> Area</th>
                <th>Number</th>
                <th>Metered </th>
                <th>Essential </th>
                <th>Urban Share [%]</th>
                <th>Rural Share [%]</th>
                <th>Prime Month</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.area}</td>
                  <td>{item.number}</td>
                  <td>{item.metered}</td>
                  <td>{item.essential}</td>
                  <td>{item.urban}</td>
                  <td>{item.rural}</td>
                  <td>{item.prime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};
export default ManageFeeder;
