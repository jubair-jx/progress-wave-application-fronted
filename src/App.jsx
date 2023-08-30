import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarSec from "./Shared/Navbar/NavbarSec";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Shared/Footer/Footer";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Router>
        <NavbarSec />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
