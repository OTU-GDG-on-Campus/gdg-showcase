import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingOrbBackground from "./components/FloatingOrbBackground";
import Prizes from "./components/Prizes";
import Judges from "./components/Judges";
import Rules from "./components/Rules";
import FAQ from "./components/FAQ";

function Home() {
  return (
    <FloatingOrbBackground>
      <Navbar />
      <Hero />
      <Prizes />
      <Judges />
      <Rules />
      <FAQ />
    </FloatingOrbBackground>
  );
}

export default Home;
