import React from "react";

export const SectionStack = () => {
  return (
    <section
      className="py-margin-desktop px-margin-mobile bg-surface-container-lowest/50 backdrop-blur-md"
      id="stack"
    >
      {" "}
      <div className="px-margin-desktop px-margin-mobile max-w-container-max mx-auto text-center">
        {" "}
        <h2 className="font-display-md text-display-md text-primary-container mb-16 scroll-reveal">
          Tech Stack{" "}
        </h2>{" "}
        <div
          className="flex flex-wrap justify-center gap-6 scroll-reveal"
          id="stack-container"
        >
          {/* Frontend */}
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ NEXT.JS ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ TYPESCRIPT ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ TAILWIND ]
          </div>

          {/* Backend & Frameworks */}
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ NODE.JS ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ NESTJS ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ NESTJS - MICROSERVICES ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ LARAVEL ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ PHP ]
          </div>

          {/* Databases & ORMs */}
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ POSTGRESQL ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ MYSQL ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ MONGO DB ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ PRISMA ORM ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ REDIS ]
          </div>

          {/* Devops & Infra */}
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ DOCKER ]
          </div>
          <div className="tech-badge px-8 py-4 border border-white/10 rounded-xl bg-white/5 text-on-surface-variant hover:border-primary-container hover:text-primary-container transition-all cursor-default">
            [ RABBITMQ ]
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
};
