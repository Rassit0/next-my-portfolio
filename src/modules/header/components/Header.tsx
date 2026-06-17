"use client";

import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-surface/10 backdrop-blur-[20px] text-primary-container sticky top-0 z-50 border-b border-white/10">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto">
          <a
            href="#inicio"
            className="font-display-md text-display-md tracking-tighter text-primary-container drop-shadow-[0_0_10px_rgba(0,242,255,0.5)]"
          >
            MAAV
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex gap-gutter items-center">
            <a
              href="#inicio"
              className="font-label-md text-label-md text-primary-container border-b-2 border-primary-container pb-1"
            >
              Home
            </a>

            <a
              href="#especialidades"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all"
            >
              Specialties
            </a>

            <a
              href="#proyectos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all"
            >
              Projects
            </a>

            <a
              href="#stack"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all"
            >
              Stack
            </a>

            <a
              href="#contacto"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary-container transition-all"
            >
              Contact
            </a>

            <a
              href="https://wa.me/59176681428"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-label-md hover:shadow-[0_0_15px_rgba(0,242,255,0.6)] transition-all"
            >
              Connect
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-primary-container"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-surface/95 backdrop-blur-2xl
          md:hidden
          flex flex-col justify-center items-center gap-8
          border-l border-white/10
          transition-transform duration-500 ease-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-margin-mobile text-primary-container text-4xl"
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <a
          href="#inicio"
          onClick={closeMenu}
          className="text-3xl font-display-md text-primary-container hover:glitch-text"
        >
          Home
        </a>

        <a
          href="#especialidades"
          onClick={closeMenu}
          className="text-3xl font-display-md text-on-surface-variant hover:text-primary-container"
        >
          Specialties
        </a>

        <a
          href="#proyectos"
          onClick={closeMenu}
          className="text-3xl font-display-md text-on-surface-variant hover:text-primary-container"
        >
          Projects
        </a>

        <a
          href="#stack"
          onClick={closeMenu}
          className="text-3xl font-display-md text-on-surface-variant hover:text-primary-container"
        >
          Stack
        </a>

        <a
          href="#contacto"
          onClick={closeMenu}
          className="text-3xl font-display-md text-on-surface-variant hover:text-primary-container"
        >
          Contact
        </a>

        <a
          href="https://wa.me/59176681428"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="mt-4 bg-primary-container text-surface px-12 py-4 rounded-full font-bold text-xl"
        >
          Connect
        </a>
      </div>
    </>
  );
};
