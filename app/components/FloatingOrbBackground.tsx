import React from "react";

function FloatingOrbBackground({ children }: { children: any }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Red Orb */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-red rounded-full blur-3xl opacity-40 animate-float-slow"></div>

      {/* Green Orb */}
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green rounded-full blur-3xl opacity-40 animate-float-medium"></div>

      {/* Blue Orb */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue rounded-full blur-3xl opacity-40 animate-float-fast"></div>

      {/* Yellow Orb */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-yellow rounded-full blur-3xl opacity-40 animate-float-medium-slow"></div>
      <div className="absolute left-0 top-0 w-screen h-screen overflow-auto scroll-smooth">
        {children}
      </div>
    </div>
  );
}

export default FloatingOrbBackground;
