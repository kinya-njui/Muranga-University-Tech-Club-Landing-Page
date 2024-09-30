import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import EventsPage from "./Pages/EventsPage/EventsPage";
import LeaderShip from "./Pages/Leadership/Leadership";
import Tracks from "./Pages/Tracks/Tracks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Leadership" element={<LeaderShip />} />
          <Route path="/Tracks" element={<Tracks />} />
          <Route path="/Events" element={<EventsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
