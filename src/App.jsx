import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
// // import Hero from "./components/Hero/Hero";
// // import Title from "./components/Title/Title";
// // import Leadership from "./components/Leadership/Leadership";
// // import AboutUs from "./components/AboutUs/AboutUs";
// // import Testimonies from "./components/Testimonies/Testimonies";
// // import Tracks from "./components/Tracks/Tracks";
// // import Events from "./components/Events/Events";
import Home from "./Pages/Home/Home";
import EventsPage from "./Pages/Eventspage/EventsPage";
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
      {/* <Header />
      <Hero />
      <AboutUs />
      <Testimonies />
      <Title />
      <Leadership />
      <Events />
      <Tracks />
      <Footer /> */}
    </>
  );
}

export default App;
