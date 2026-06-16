import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest full-width py-margin-desktop mt-32 relative z-20">
      <div className="bg-gradient-to-t from-primary-container/5 to-transparent absolute inset-0 pointer-events-none"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto gap-gutter relative">
        <div className="font-display-md text-display-md text-primary-fixed-dim">
          MAAV
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left uppercase tracking-tighter">
          © 2024 MAAV SYSTEMS. ENGINEERED FOR PRECISION.
        </p>
        <div className="flex gap-gutter">
          <a
            className="text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_15px_rgba(0,219,231,0.8)] transition-all"
            href="#"
          >
            Email
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_15px_rgba(0,219,231,0.8)] transition-all"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary-container hover:drop-shadow-[0_0_15px_rgba(0,219,231,0.8)] transition-all"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
