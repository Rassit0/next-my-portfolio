"use client";
import Image from "next/image";
import { BackgroundLayers } from "@/modules/background-layers";
import { Header } from "@/modules/header";
import { useEffect, useRef, useState } from "react";
import { Footer } from "@/modules/footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  FootballIcon,
  Github01Icon,
  Linkedin01Icon,
  Restaurant02Icon,
  Store01Icon,
} from "@hugeicons/core-free-icons";
import { SectionProjects } from "@/modules/section-projects";

export default function Home() {
  const [typewriterText, setTypewriterText] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const phrases = [
      "Ingeniero de Sistemas",
      "Full-Stack Developer",
      "Soluciones a Medida",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setTypewriterText(currentPhrase.substring(0, charIndex));

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;

        speed = 500;
      }

      timeoutId = setTimeout(type, speed);
    };

    const loaderTimer = setTimeout(() => {
      setLoading(false);
      type();
    }, 1500);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(timeoutId);
    };
  }, []);

  // Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    const elements = document.querySelectorAll(".scroll-reveal");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic-button");

    const cleanups: (() => void)[] = [];

    buttons.forEach((button) => {
      const move = (e: Event) => {
        const mouseEvent = e as MouseEvent;

        const rect = (button as HTMLElement).getBoundingClientRect();

        const x = mouseEvent.clientX - rect.left - rect.width / 2;

        const y = mouseEvent.clientY - rect.top - rect.height / 2;

        (button as HTMLElement).style.transform =
          `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };

      const leave = () => {
        (button as HTMLElement).style.transform = "translate(0,0)";
      };

      button.addEventListener("mousemove", move);

      button.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        button.removeEventListener("mousemove", move);

        button.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  // Title card
  useEffect(() => {
    const cards = document.querySelectorAll(".tilt-card");

    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const move = (e: Event) => {
        const mouseEvent = e as MouseEvent;

        const rect = (card as HTMLElement).getBoundingClientRect();

        const x = mouseEvent.clientX - rect.left;

        const y = mouseEvent.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 10;

        const rotateY = (rect.width / 2 - x) / 10;

        (card as HTMLElement).style.transform = `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
      };

      const leave = () => {
        (card as HTMLElement).style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      };

      card.addEventListener("mousemove", move);

      card.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        card.removeEventListener("mousemove", move);

        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  // Stack riple
  useEffect(() => {
    const badges = document.querySelectorAll(".tech-badge");

    const cleanups: (() => void)[] = [];

    badges.forEach((badge) => {
      const enter = () => {
        badges.forEach((other) => {
          if (other !== badge) {
            (other as HTMLElement).style.transform = "scale(0.95)";

            (other as HTMLElement).style.opacity = "0.7";
          }
        });
      };

      const leave = () => {
        badges.forEach((other) => {
          (other as HTMLElement).style.transform = "scale(1)";

          (other as HTMLElement).style.opacity = "1";
        });
      };

      badge.addEventListener("mouseenter", enter);

      badge.addEventListener("mouseleave", leave);

      cleanups.push(() => {
        badge.removeEventListener("mouseenter", enter);

        badge.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("mauricio.rr32@gmail.com");

    setCopied(true);

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className="fixed inset-0 z-[100] bg-surface flex items-center justify-center transition-opacity duration-500"
          id="loader"
        >
          <h1 className="font-display-lg text-display-lg text-primary-container glitch-text tracking-tighter">
            MAAV
          </h1>
        </div>
      )}

      {/* <!-- Background Layers --> */}
      <BackgroundLayers />
      {/* <!-- Top Navigation --> */}
      <Header />
      <main className="relative z-20">
        {/* <!-- Hero Section --> */}
        <section
          className="min-h-screen flex flex-col justify-center px-margin-desktop px-margin-mobile max-w-container-max mx-auto py-margin-desktop"
          id="inicio"
        >
          <div className="scroll-reveal">
            <p className="font-label-md text-primary-container mb-unit tracking-widest uppercase">
              System Architect &amp; Developer
            </p>
            <h1 className="font-display-lg text-display-lg font-display-md text-display-md md:text-[96px] leading-[0.9] mb-unit gradient-text-animate tracking-tighter">
              Mauricio Ariel
              <br />
              Aramayo Vidaurre
            </h1>
            <div className="h-12">
              <span className="typewriter">{typewriterText}</span>
            </div>
            <div className="flex flex-wrap gap-gutter mt-12">
              <button className="magnetic-button group relative px-8 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-surface font-bold rounded-full overflow-hidden">
                <span className="relative z-10">Descargar CV</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="magnetic-button group px-8 py-4 border border-primary-container/40 text-primary-container font-bold rounded-full hover:bg-primary-container/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">code</span>
                GitHub
              </button>
            </div>
          </div>
        </section>
        {/* <!-- Especialidades Section --> */}
        <section
          className="py-margin-desktop px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
          id="especialidades"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter scroll-reveal">
            <div className="max-w-2xl">
              <h2 className="font-display-md text-display-md text-primary-container mb-4">
                Especialidades
              </h2>
              <p className="text-on-surface-variant text-body-lg">
                Arquitectura de sistemas robustos enfocados en la optimización
                de procesos operativos y experiencia de usuario fluida.
              </p>
            </div>
            <div className="text-primary-container font-display-md opacity-20">
              01 / .XP
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* <!-- Tarjeta 1 --> */}
            <div className="scroll-reveal tilt-card group relative bg-white/5 backdrop-blur-[40px] border border-white/10 p-8 rounded-xl hover:border-primary-container/50 transition-all duration-500 overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all"></div>
              <HugeiconsIcon
                icon={Store01Icon}
                className="text-primary-container text-5xl mb-6"
                size={45}
              />
              <h3 className="font-headline-lg text-headline-lg mb-4">
                Sistemas de Inventarios
              </h3>
              <p className="text-on-surface-variant">
                Control total y trazabilidad en tiempo real para almacenes de
                alto flujo y logística compleja.
              </p>
            </div>
            {/* <!-- Tarjeta 2 --> */}
            <div className="scroll-reveal tilt-card group relative bg-white/5 backdrop-blur-[40px] border border-white/10 p-8 rounded-xl hover:border-primary-container/50 transition-all duration-500 overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/10 rounded-full blur-3xl group-hover:bg-secondary-container/20 transition-all"></div>
              <HugeiconsIcon
                icon={Restaurant02Icon}
                className="text-primary-container mb-6"
                size={45}
              />
              <h3 className="font-headline-lg text-headline-lg mb-4">
                Gestión de Restaurantes
              </h3>
              <p className="text-on-surface-variant">
                Soluciones POS integradas con comandas digitales y analítica de
                ventas para el sector gastronómico.
              </p>
            </div>
            {/* <!-- Tarjeta 3 --> */}
            <div className="scroll-reveal tilt-card group relative bg-white/5 backdrop-blur-[40px] border border-white/10 p-8 rounded-xl hover:border-primary-container/50 transition-all duration-500 overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-fixed-dim/10 rounded-full blur-3xl group-hover:bg-primary-fixed-dim/20 transition-all"></div>
              <HugeiconsIcon
                icon={FootballIcon}
                className="text-primary-container mb-6"
                size={45}
              />
              <h3 className="font-headline-lg text-headline-lg mb-4">
                Clubes Deportivos
              </h3>
              <p className="text-on-surface-variant">
                Plataformas de administración de socios, reservas de campos y
                tracking de rendimiento atlético.
              </p>
            </div>
          </div>
        </section>
        {/* <!-- Proyectos Section --> */}
        <SectionProjects />
        {/* <!-- Stack Section --> */}
        <section
          className="py-margin-desktop px-margin-mobile bg-surface-container-lowest/50 backdrop-blur-md"
          id="stack"
        >
          <div className="px-margin-desktop px-margin-mobile max-w-container-max mx-auto text-center">
            <h2 className="font-display-md text-display-md text-primary-container mb-16 scroll-reveal">
              Tech Stack
            </h2>
            <div
              className="flex flex-wrap justify-center gap-6 scroll-reveal"
              id="stack-container"
            >
              {/* <!-- Badges will be injected by JS for the ripple effect --> */}
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ NEXT.JS ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ TYPESCRIPT ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ DOCKER ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ POSTGRESQL ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ TAILWIND ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ NODE.JS ]
              </div>
              <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
                [ GRAPHQL ]
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Contact Section --> */}
        <section
          className="
          py-margin-desktop
    px-margin-mobile
    md:px-margin-desktop
    max-w-container-max
    mx-auto
    text-center"
          id="contacto"
        >
          <div className="scroll-reveal mb-16">
            <h2 className="font-display-lg text-display-lg font-display-md text-display-md mb-8 gradient-text-animate">
              ¿Listo para innovar?
            </h2>
            <p className="text-on-surface-variant text-body-lg max-w-xl mx-auto mb-12">
              Hablemos sobre tu próximo gran proyecto y cómo podemos construir
              una solución de ingeniería de clase mundial.
            </p>
            <div className="inline-flex flex-col md:flex-row items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
              <span className="text-headline-lg text-headline-lg-mobile font-headline-lg text-primary-container px-4">
                mauricio.rr32@gmail.com
              </span>
              <button
                onClick={copyEmail}
                className="bg-primary-container text-surface px-8 py-3 rounded-xl"
              >
                Copiar Email
              </button>

              {copied && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-secondary-container text-white px-6 py-3 rounded-full">
                  ¡Copiado con éxito!
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-gutter pt-8">
            <a
              className="magnetic-button w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
              href="https://www.linkedin.com/in/mauricio-ariel-aramayo-vidaurre-83a57421b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img
                alt="LinkedIn"
                className="w-8 h-8 group-hover:scale-110 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr7IHcPN2zY7OBj0CX3-GnkhNRzQIMjxOM3CQSi7JX2p1xdSCttH7nlQsO6TQ_bGbn97mYRwQIg7c881Spn7HCi8s5txET6f5xis4ivly3Mt65hfZQl4sUiC_iD7xHGz7ZUgbDw3zvgGfyEVRMG9VbOLQfHyw1yTMLfhBRwZP3O__dujcI8q-NAOlVkhjv8HiD76ws1SMKgwLiQGJBHuhNzj5EqF5bfi_Nb4uMyxL1uXeNtTHjkMCt31XDF-dbUZgApIHVAq2psg"
              /> */}
              <HugeiconsIcon
                icon={Linkedin01Icon}
                size={35}
                color="currentColor"
                strokeWidth={2}
              />
            </a>
            <a
              className="magnetic-button w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
              href="https://github.com/Rassit0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon
                icon={Github01Icon}
                size={35}
                color="currentColor"
                strokeWidth={2}
              />
            </a>
            <a
              className="magnetic-button w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
              href="https://www.facebook.com/mauricioariel.aramayovidaurre.3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <img
                alt="Twitter"
                className="w-8 h-8 group-hover:scale-110 transition-transform"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2mlcx6svT6RAtXlg22exoKLQem09o7HvyoEtBBFRPWkoEzKzemo6opu1iJhmCXH3t7yBBYtuYybf_-FAb4_6Auqun0zFgD25D6pv5YXHxn2xKq36Md-jn6kOQObAFi7ptAVemSQQSNjXbDixFVwIfacvRdk1JtM2AwBQmfOMZjFbftQ6gqEQleHs-UFtFCHvk-K79J9botcQRSg0F61uaI1RNolpjwBNKN_RcOrmtnnI2ZZqQ89RCONbfWjZBVVMJSGr1TcyEOw"
              /> */}
              <HugeiconsIcon
                icon={Facebook01Icon}
                size={35}
                color="currentColor"
                strokeWidth={2}
              />
            </a>
          </div>
        </section>
      </main>
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
