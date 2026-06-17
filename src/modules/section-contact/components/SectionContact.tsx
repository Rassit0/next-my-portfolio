"use client";
import {
  Facebook01Icon,
  Github01Icon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect, useRef, useState } from "react";

export const SectionContact = () => {
  const [copied, setCopied] = useState(false);

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
          Hablemos sobre tu próximo gran proyecto y cómo podemos construir una
          solución de ingeniería de clase mundial.
        </p>
        <div className="inline-flex flex-col md:flex-row items-center gap-6 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
          <span className="text-headline-lg text-headline-lg-mobile font-headline-lg text-primary-container px-0">
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
  );
};
