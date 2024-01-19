import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Ministries from "./pages/Ministries";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="contaniner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
