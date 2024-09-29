import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Title from './components/Title/Title';
import Catalogue from './components/Catalogue/Catalogue';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs /> 
      <Catalogue />
      <Footer />
    </>
  );
}

export default App;
