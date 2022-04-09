import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import TissueCulture from "./TissueCulture";
import StemCells from "./StemCells";
import FpqLog from "./FpqLog";
import DashBoard from "./Dashboard";
import Header from "./components/Header";

function App() {

  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/lims-database" element={<DashBoard />} />
        <Route path="/lims-database/tissue-culture" element={<TissueCulture />} />
        <Route path="/lims-database/stem-cells" element={<StemCells />} />
        <Route path="/lims-database/fpq-log" element={<FpqLog />} />
      </Routes>
  </Router>
  );
}

export default App;
