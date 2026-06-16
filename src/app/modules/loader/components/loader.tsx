import React from "react";

export const loader = () => {
  return (
    <div
      className="fixed inset-0 z-[100] bg-surface flex items-center justify-center transition-opacity duration-500"
      id="loader"
    >
      <h1 className="font-display-lg text-display-lg text-primary-container glitch-text tracking-tighter">
        MAAV
      </h1>
    </div>
  );
};
