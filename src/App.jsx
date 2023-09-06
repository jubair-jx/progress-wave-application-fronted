import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarSec from "./Shared/Navbar/NavbarSec";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./Shared/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Login from "./components/Login/Login";
import Board from "./pages/Board";
import BoardDetails from "./pages/BoardDetails";

function App() {
  return (
    <>
      <Router>
        <NavbarSec />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/board/:boardId" element={<BoardDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
