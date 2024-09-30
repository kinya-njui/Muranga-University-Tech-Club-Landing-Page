import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Catalogue from "./components/Catalogue/Catalogue";
import AboutUs from "./components/AboutUs/AboutUs";
import Testimonies from "./components/Testimonies/Testimonies";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Title />
      <Catalogue />
      <Testimonies />
      <Footer />
    </>
  );
}

export default App;
