import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { create, menu, person, search, trash } from "ionicons/icons";
import "./Manage-feeder.css";
import "./manageFeeder.css";
import FileSaver from "file-saver";
import Layout from "../../Components/Layout/Layout";


const TableData = [
  {
    id: 1,
    name: "Nai Sarak : F1	",
    area: "Nai Sarak / Habba Kadal	",
    number: "F1",
    metered: "true",
    essential: "false",
    urban: "0",
    rural: "0",
    prime: "2019-03-01",
  },
  {
    id: 2,
    name: "Zabarwan Park	",
    area: "Zabarwan Park		",
    number: "F4",
    metered: "true",
    essential: "true",
    urban: "0",
    rural: "0",
    prime: "2020-03-01",
  },
  {
    id: 3,
    name: "Nai Sarak : F1	",
    area: "Nai Sarak / Habba Kadal	",
    number: "F1",
    metered: "true",
    essential: "false",
    urban: "0",
    rural: "0",
    prime: "2019-03-01",
  },
];

const ManageFeeder = ({ title }) => {
  const [subDivision, setSubDivision] = useState("");
  const [receivingStation, setReceivingStation] = useState([]);
  const [tableData, setTableData] = useState(TableData);

  const receivingStations = {
    SRINAGAR: [
      "BARBAR SHAH ",
      "BASANT BAGH",
      "BREINE",
      "BUCHWARA",
      "CENTAUR",
      "FATEH KADAL",
      "HARWAN",
      "KAWDARA",
      "KHAYAM",
      "MUGHAL MASJID",
      "NEDOUS",
      "NISHAT",
      "SHALIMAR",
      "TRC",
      "BADAMIBAGH",
    ],
    BUDGAM: [
      "B. K. PORA",
      "BEERWAH",
      "BRANWAR",
      "BUDGAM",
      "CHADOORA",
      "CHARARISHAREEF",
      "ICHGAM",
      "KANIR",
      "KHAG",
      "KHAN SAHIB",
      "KHANDA",
      "KREMSHORE",
    ],
    KUPWARA: [
      "ADOORA",
      "CHOGUL",
      "DRUGMULLA",
      "GANAPORA",
      "HANDWARA",
      "KHUMRIYAL",
      "KRALPORA",
      "KRUSEN",
      "LASSIPORA SOGAM",
      "MAGAM (KUPWARA) ",
      "TANGDHAR",
    ],
    BARAMULLA: [
      "ARAMPORA",
      "BARAMULLA-I",
      "BASE STATION",
      "BARAMULLA - II",
      "BONIYAR",
      "CHAKLOO",
      "CHANDOOSA",
    ],
    BANDIPORA: [
      "AJAR",
      "AJAS",
      "ALOOSA",
      "HAJIN",
      "MANASBAL (SAFAPORA)",
      "MARKUNDAL",
      "NADIHAL",
      "NAIDKHAI",
      "PANZIGAM",
      "PRENG MADHWAN",
      "SHADIPORA",
    ],
    GANDERBAL: [
      "ALASTENG",
      "DOODERHAMA",
      "GAGANGEER",
      "GANDASINGH",
      "KANGAN",
      "KANGAN OF PDC",
      "KHEER- BHAWANI",
      "KURHAMA",
      "LAR",
    ],
    ANANTNAG: [
      "AISHMUQAM",
      "AKURA",
      "ASHAJIPORA",
      "DIALGAM",
      "DOORU-SOUTH",
      "GOPALPORA",
      "HARNAG",
      "HILLER-BAHI",
      "HILLER-DOORU",
      "HUTMURA",
      "JANGLATMANDI (BRAKPORA)",
      "KHIRAM",
      "KOKERNAG",
    ],
    KULGAM: [
      "KULGAM",
      "NILLOW",
      "QAIMOH",
      "YARIPORA",
      "BEHIBAGH",
      "KEELAM",
      "Rembhama",
      "CHOWGAM",
      "Safalpora",
    ],
  };

  const handleSubDivisionChange = (e) => {
    setSubDivision(e.target.value);
    setReceivingStation(receivingStations[e.target.value]);
  };

  return (
    <Layout title={title}>
      <div className="adding-feeder-container ">
        <div className="new-feeder-ddn ">
          <div style={{ marginLeft: "20px" }}>
            {" "}
            Sub Division <br />
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

          <div style={{ marginLeft: "80px" }}>
            {" "}
            Recieving Station <br />
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

          <div style={{ marginLeft: "80px" }}>
            {" "}
            Feeder
            <br />
            <div className="Blank"></div>
            <select className="feeder-select">
              <option disabled selected value="">
                -- Select One --
              </option>
              <option>Feeder1</option>
            </select>
          </div>
        </div>
      </div>

      <main>
        <div className="feederList-heading">
          <div className="list-heading">
            {" "}
            <h3> Feeder List </h3>{" "}
          </div>
          <div>
            <button className="download-btn">Download</button>
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
                <th>Metered ?</th>
                <th>Essential ?</th>
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
