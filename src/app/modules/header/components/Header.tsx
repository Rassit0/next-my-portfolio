import React from "react";

export const Header = () => {
  return (
    <header className="bg-surface/10 backdrop-blur-[20px] text-primary-container docked full-width top-0 z-50 sticky border-b border-white/10">
      <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
        <a
          className="font-display-md text-display-md tracking-tighter text-primary-container drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]"
          href="#inicio"
        >
          MAAV
        </a>
        <nav className="hidden md:flex gap-gutter items-center">
          <a
            className="font-label-md text-label-md text-primary-container border-b-2 border-primary-container pb-1 hover:text-primary-container transition-all duration-300 hover:scale-110"
            href="#inicio"
          >
            Home
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all duration-300 hover:scale-110"
            href="#especialidades"
          >
            Specialties
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all duration-300 hover:scale-110"
            href="#proyectos"
          >
            Projects
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all duration-300 hover:scale-110"
            href="#stack"
          >
            Stack
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all duration-300 hover:scale-110"
            href="#contacto"
          >
            Contact
          </a>
          <a
            className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-md hover:shadow-[0_0_15px_rgba(0,242,255,0.6)] transition-all"
            href="#contacto"
          >
            Connect
          </a>
        </nav>
        <button className="md:hidden text-primary-container">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};
