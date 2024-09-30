import React from "react";
import Hero from "../../components/Hero/Hero";
import Testimonies from "../../components/Testimonies/Testimonies";
import AboutUs from "../../components/AboutUs/AboutUs";
function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Testimonies />
    </div>
  );
}

export default Home;
