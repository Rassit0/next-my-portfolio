import React from "react";
import { Carousel } from "./Carousel";

export const SectionProjects = () => {
  return (
    <section
      className="py-margin-desktop px-margin-mobile px-margin-desktop max-w-container-max mx-auto overflow-hidden"
      id="proyectos"
    >
      <h2 className="font-display-md text-display-md text-primary-container mb-16 scroll-reveal text-center">
        Proyectos Destacados
      </h2>
      <div className="space-y-32">
        {/* <!-- Project 1: Sistema Global de Inventario --> */}
        <div className="flex flex-col md:flex-row gap-16 items-center scroll-reveal">
          <div
            className="w-full md:w-1/2 relative group carousel-container tilt-card"
            data-carousel="1"
          >
            <div className="absolute inset-0 bg-primary-container/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl aspect-video">
              <Carousel
                alt="Inventory"
                images={[
                  "/images/projects/inventory/login-inventory.png",
                  "/images/projects/inventory/branches.png",
                  "/images/projects/inventory/categorias.png",
                  "/images/projects/inventory/productos-list.png",
                  "/images/projects/inventory/productos-add.png",
                  "/images/projects/inventory/suppliers.png",
                  "/images/projects/inventory/warehouses.png",
                  "/images/projects/inventory/ventas-add.png",
                  "/images/projects/inventory/usuarios.png",
                  "/images/projects/inventory/usuarios-add.png",
                  "/images/projects/inventory/permisos.png",
                  "/images/projects/inventory/permisos-add.png",
                ]}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-container text-surface px-6 py-3 font-bold rounded-lg z-20">
              INVENTORY
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-primary-container font-label-md">
              CASE STUDY: INVENTORY
            </span>
            <h3 className="font-display-md text-display-md mb-6">
              Sistema de Gestión de Inventarios
            </h3>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Plataforma de inventario diseñada para centralizar la gestión de
              productos, almacenes, proveedores y ventas en una única solución.
              Automatiza tareas operativas, mejora la trazabilidad de los
              movimientos de stock y reduce los errores asociados al control
              manual de inventarios.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ REACT ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ LARAVEL ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ POSTGRESQL ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ DOCKER ]
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Project 2: Omni-Channel POS --> */}
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center scroll-reveal">
          <div
            className="w-full md:w-1/2 relative group carousel-container tilt-card"
            data-carousel="2"
          >
            <div className="absolute inset-0 bg-secondary-container/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl aspect-video">
              <Carousel
                alt="POS Gourmet"
                images={[
                  "/images/projects/restaurant/login-restaurant.png",
                  "/images/projects/restaurant/branches-restaurante.png",
                  "/images/projects/restaurant/productos.png",
                  "/images/projects/restaurant/proveedores1.png",
                  "/images/projects/restaurant/proveedores-crear.png",
                  "/images/projects/restaurant/movimientos.png",
                  "/images/projects/restaurant/movimientos-crear.png",
                  "/images/projects/restaurant/movimientos-confirmar-cantidades.png",
                  "/images/projects/restaurant/agregar-recetas.png",
                  "/images/projects/restaurant/lista-comandas.png",
                ]}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-container text-surface px-6 py-3 font-bold rounded-lg z-20">
              RESTAURANTE MULTISUCURSAL
            </div>
          </div>
          <div className="w-full md:w-1/2 text-right">
            <span className="text-primary-container font-label-md">
              CASE STUDY: ENTERPRISE RESTAURANT SYSTEMS
            </span>
            <h3 className="font-display-md text-display-md mb-6">
              Pollos Valery: POS Híbrido
            </h3>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Sistema integral de gestión para <b>Pollos Valery (Tupiza)</b>.
              Arquitectura basada en <b>microservicios con NestJS</b> para
              garantizar la consistencia de datos en tiempo real, frontend
              reactivo con
              <b> Next.js</b> y persistencia de alta integridad en{" "}
              <b>PostgreSQL</b>. Diseñado para operar en entornos de alta
              concurrencia con sincronización híbrida para máxima resiliencia
              operativa.
            </p>
            <div className="flex flex-wrap gap-4 justify-end">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ NEXT.JS ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ NESTJS ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ POSTGRESQL ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ MICROSERVICES ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ DOCKER ]
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Project 3: CD-Manager / Clubes Deportivos --> */}
        <div className="flex flex-col md:flex-row gap-16 items-center scroll-reveal">
          <div
            className="w-full md:w-1/2 relative group carousel-container tilt-card"
            data-carousel="3"
          >
            <div className="absolute inset-0 bg-primary-fixed-dim/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl aspect-video">
              <Carousel
                alt="Sports Manager"
                images={[
                  "/images/projects/club/launcher-can.png",
                  "/images/projects/club/can-dashboard.png",
                  "/images/projects/club/categories.png",
                  "/images/projects/club/disciplines.png",
                  "/images/projects/club/players.png",
                  "/images/projects/club/seasons.png",
                  "/images/projects/club/teams.png",
                  // "/images/projects/club/teams-can.png",
                  // "/images/projects/club/noticias-can.png",
                ]}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-fixed-dim text-surface px-6 py-3 font-bold rounded-lg z-20">
              GESTION CAN
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-primary-container font-label-md">
              CASE STUDY: SPORTS TECH
            </span>
            <h3 className="font-display-md text-display-md mb-6">
              GESTION CAN
            </h3>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Plataforma de gestión deportiva diseñada para clubes y escuelas de
              formación, integrando sitio web institucional, administración de
              jugadores, equipos, cursos, temporadas, membresías, pagos,
              asistencia y personal técnico en una solución unificada.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ NEXT.JS ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ NESTJS ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ POSTGRESQL ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ DOCKER ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
