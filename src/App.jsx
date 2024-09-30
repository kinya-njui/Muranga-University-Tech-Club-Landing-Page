import "./App.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Leadership from "./components/Leadership/Leadership";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonies from "./components/Testimonies/Testimonies";
import Tracks from "./components/Tracks/Tracks";
import Events from "./components/Events/Events";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Title />
      <Leadership />
      <Testimonies />
      <Events />
      <Tracks />
      <Footer />
    </>
  );
}

export default App;
