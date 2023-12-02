import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/00Home";
import Destination from "./Routes/01Destination";
import Crew from "./Routes/02Crew";
import Technology from "./Routes/03Technology";
import Navbar from "./components/Nav";
import data from "/src/assets/data.json"
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination data={data} />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
