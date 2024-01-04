import { Route, Routes } from "react-router-dom";
import "./Pages/Manage Feeders/Manage-feeder.css";
// Components
import Home from "./Pages/Home/Home";
import LogSide from "./Pages/Scheduled Outage/LogSide";
import Unscheduled from "./Pages/Unscheduled Outage/Unscheduled";
import PumpEnergy from "./Pages/Pump Energy/PumpEnergy";
import FeederManagement from "./Pages/Manage Feeders/feeder";
import StationManagement from "./Pages/Manage Feeders/RecievingStationMngmnt";
import PumpEnergyTable from "./Pages/Pump Energy/PumpEnergyTable/PumpEnergyTable";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home title="Home page" />} />
        <Route
          path="/scheduled-outage"
          element={<LogSide title="Scheduled Outage" />}
        />
        <Route
          path="/unscheduled-outage"
          element={<Unscheduled title="Unscheduled Outage" />}
        />
        <Route
          path="/pump-energy"
          element={<PumpEnergy title="Pump Energy" />}
        />
        <Route path="/feeder-management" element={<FeederManagement title="Manage Feeder"/>}/>
        <Route path="/receiving-station" element={<StationManagement title="Manage Receiving Station"/>}/>
        <Route path="/pump-table-view" element={<PumpEnergyTable  title="Pump Energy"/>}/>

      </Routes>
    </div>
  );
}

export default App;
