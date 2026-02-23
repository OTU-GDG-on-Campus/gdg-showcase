import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-20">
      <div className="relative z-1 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to The
        </h2>
        <h1 className="text-4xl md:text-8xl font-bold mb-6 gradient-text">
          GDG SHOWCASE
        </h1>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">
          Pitch. Build. Impress.
        </h3>
        <p className="text-md md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Ontario Tech's brightest builders take the stage to present their
          projects to a panel of industry judges. Compete for amazing prizes,
          gain real feedback, and showcase what you've built.
        </p>
      </div>
    </section>
  );
};

export default Hero;
