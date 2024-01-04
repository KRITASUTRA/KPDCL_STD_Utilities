import { IonIcon } from "@ionic/react";
import React, { useState } from "react";
import { create, menu, person, search, trash } from "ionicons/icons";
import EditPanel from "./editPanel";
import "./Manage-feeder.css";
import "./manageFeeder.css";
import Layout from "../../Components/Layout/Layout";
import AddRST from "./addrst";
import EditFeeder from "./edit-rst";
 
const ManageFeeder = ({title}) => {
                                                                        // const [isAddOpen, setIsAddOpen] = useState(false);
                                                                        // const [isEditOpen, setIsEditOpen] = useState(false);
                                                                        
                                                                        // const handleEditClick = () => {
                                                                        //   setIsEditOpen(true);
                                                                        // };

                                                                        // const handleAddClick = () => {
                                                                        //   setIsAddOpen(true);
                                                                        // }
                                                                        
                                                                        // const handleCloseClick = () => {
                                                                        //   setIsEditOpen(false);
                                                                        //   setIsAddOpen(false);
                                                                        // };


  return (
    <Layout title={title}>
      <div className="adding-feeder-container ">
                                                                        {/* {isEditOpen && <EditPanel onClose={handleCloseClick} />}
                                                                        {isAddOpen && <AddRST onClose={handleCloseClick} />}
                                                                        {isEditOpen && <EditFeeder onClose={handleCloseClick} />} */}
        <div className="new-feeder-ddn ">
          <div style={{ marginLeft: "20px" }}>
            {" "}
            Sub Division <br />
            <div className="Blank"></div>
            <select className="feeder-select">
              <option>STD1 Srinagar</option>
              <option>STD1 Srinagar</option>
            </select>
          </div>

          <div style={{ marginLeft: "80px" }}>
            {" "}
            Recieving Station <br />
            <div className="Blank"></div>
            <select className="feeder-select">
              <option>STD1 Srinagar</option>
              <option>STD1 Srinagar</option>
            </select>
          </div>

          <div style={{ marginLeft: "80px" }}>
            {" "}
            Feeder<br />
            <div className="Blank"></div>
            <select className="feeder-select">
              <option>STD1 Srinagar</option>
              <option>STD1 Srinagar</option>
            </select>
        </div>
                                                            {/* <div style={{ marginLeft: "80px", marginRight: "50px" }}>
                                                              <br />
                                                            
                                                              <button className='add-feeder-btn'
                                                            onClick={handleAddClick}>
                                                              Add New Feeder
                                                           </button>
                                                            </div> */}

           </div>

                                                            {/* <div>
                                                              <a href="/receiving-station" style={{textDecoration:'none' }}>
                                                                {" "}
                                                                <button className="station-management-btn">
                                                                  Manage Recieving Station{" "}
                                                                </button>{" "}
                                                              </a>
                                                            </div> */}
      </div>

      <main>
        <div className="feederList-heading">
          <div className="list-heading">
            {" "}
            <h3> Feeder List </h3>{" "}
          </div>
          <div>
            <button className="download-btn">
              Download
            </button>
          </div>
        </div>
        <div style={{ marginLeft: 65 }}>
          <table>
            <thead>
              <tr>
                <th>
                  Feeder
                  <br /> Id
                </th>
                <th>Name</th>
                <th>Area</th>
                <th>Number</th>
                <th>Metered?</th>
                <th>Essential? </th>
                <th>
                  Urban Share <br /> [%]
                </th>
                <th>
                  Rural Share <br /> [%]
                </th>
                <th>Prime Month</th>
                {/* <th> Action</th> */}
              </tr>
              <tr>
                <td>1</td>
                <td>Nehru Park</td>
                <td>Nehru Park</td>
                <td>F1</td>
                <td>True</td>
                <td>False</td>
                <td>0</td>
                <td>0</td>
                <td>2023-05-01</td>
                                                                      {/* <td>
                                                                        {" "}
                                                                        <IonIcon
                                                                        icon={create}
                                                                        className="create-icon"
                                                                        onClick={handleEditClick}
                                                                      />
                                                                        <IonIcon icon={trash} className="trash-icon" />{" "}
                                                                      </td> */}
              </tr>
            </thead>
          </table>
        </div>
      </main>
    </Layout>
  );
};
export default ManageFeeder;
