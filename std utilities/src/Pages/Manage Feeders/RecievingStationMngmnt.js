import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { arrowBack, create, person, search, trash } from "ionicons/icons";
import EditPanel from "./editPanel";
import Layout from "../../Components/Layout/Layout";
import "./manageFeeder.css";
const StationManagement = ({title}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleCloseClick = () => {
    setIsEditOpen(false);
  };

  const showBackButton = true;

  return (
    <Layout title={title} showBackButton={showBackButton}>
      <div style={{marginTop:90}}>
      {isEditOpen && <EditPanel onClose={handleCloseClick} />}
      <div>
        <div className="adding-recieving-station">
          <div style={{ marginLeft: "20px" }}>
            {" "}
            <text>RST No</text> <br />
            <input className="rst-input"></input>
          </div>

          <div style={{ marginLeft: "60px" }}>
            {" "}
            <text>Name of RST</text> <br />
            <input className="rst-input"></input>
          </div>

          <div style={{ marginLeft: "60px" }}>
            <text>Feeder</text> <br />
            <select className="rst-input">
              {/* Other options go here  <option>STD1 Srinagar</option>*/}

              {/* Other options go here */}
            </select>
          </div>
          <div>
            <br />
            <button className="add-rst-btn">ADD RST</button>
          </div>
        </div>
      </div>

      <main>
        <div className="download-btn2">
          <button>
            Download
            {/* <img
              src={downloadIcon}
              alt="Download Icon"
              className="download-icon "
              width={13}
              style={{ marginLeft: "10px" }}
            /> */}
          </button>
        </div>
        <div style={{marginLeft:55}}>
        <table>
          <thead>
            <tr>
              <th>Rst. No.</th>
              <th>Recieving Station</th>
              <th>Feeder</th>
              <th>Distribution_Transformer</th>
              <th>Sub Division</th>
              <th> Action</th>
            </tr>

            <tr>
              <td>70</td>
              <td>STD1 Srinagar</td>
              <td></td>
              <td></td>
              <td>STD1 Srinagar</td>
              <td>
                {" "}
                <IonIcon
                  icon={create}
                  className="create-icon"
                  onClick={handleEditClick}
                />
                <IonIcon icon={trash} className="trash-icon" type="delete" />{" "}
              </td>
            </tr>
          </thead>
          <tbody>{/* Table data goes here */}</tbody>
        </table>
        </div>
      </main>
      </div>
    </Layout>
  );
};
export default StationManagement;
