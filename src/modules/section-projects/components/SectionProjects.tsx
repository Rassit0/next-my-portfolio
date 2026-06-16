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
                alt="SGIC Dashboard"
                images={[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuC99a32y39KVVmSya2_24q_eFjUncZjkdaZ8SfV3Qgd-MAseLSo8GOmMPBqC3wFAGsPfNN_fR_NPdCrBb4Kez26-G6QXA5ZJJqQqaRUR7BWRjYK2knKHjKTyaVHkLz2JujFN0s8giBHZpe7c5SzviQ83PIHb83qo9FpCGfp8hluJ4GNBKJWTy-9JdDzdUhQmC4BtEeS3hLDhRCP7YTqIREhyoAsPkumBvF3PFDYauOc0dwHOW_sxSRp9EsIY2vL3xWTC3bDV_RjIQ",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCUCbB-fITDWOUKyowL9HuOmQ_kWMjBYYa0zw3g-uRyuDnv36Lmt-ag4Gfam7yzuMhPv2kNXEeojeOtfuc9y2rg9u8aLL7iy8ipLIs5LRD5gXztoyPwnZB7neoICMOYnLv6CcD71D2JSpnruamQGl53nJ0kuFJ9VCX-9MYjaBd5SizcdofqXYS_0kf8OL9XYnyyJcfhqmgtMvP6j8XE0pjnokCnYY7h2s4Fdk2hYBA4eUXwCvisqTb83pbWPMPkC6H3LeOiv_cx1g",
                ]}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-container text-surface px-6 py-3 font-bold rounded-lg z-20">
              SGIC V2.0
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-primary-container font-label-md">
              CASE STUDY: LOGISTICS
            </span>
            <h3 className="font-display-md text-display-md mb-6">
              Sistema Global de Inventario
            </h3>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Reducción del 35% en errores de stock mediante implementación de
              algoritmos de predicción y escaneo biométrico.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ REACT ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ PYTHON ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ AWS ]
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
            <div className="flex gap-4 justify-end">
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
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqz2rfjDzcUOxyCvQt02Nu6ck-mlnXl3DlMZzW1BITetiswls88fl52F0-RKb5L_yXmzQsqOzaibpycUTnpund30T8Q6Fj6eCIhF-NZtwjMksJDSiUC55GBejqCdSDEU2aMkH8Rojdr8eB76poHyVTtwA9iYNrxCMLDALV49EugdrIy4T1DKRLd4ZPAp1PbP0mHMa3JwwXHVNTebvpoNU92x6_An5O3B1jNMLZxEt3mWHFhIyt5mpYuOlWA6TJeAoMY1LYacib6Q",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBr7IHcPN2zY7OBj0CX3-GnkhNRzQIMjxOM3CQSi7JX2p1xdSCttH7nlQsO6TQ_bGbn97mYRwQIg7c881Spn7HCi8s5txET6f5xis4ivly3Mt65hfZQl4sUiC_iD7xHGz7ZUgbDw3zvgGfyEVRMG9VbOLQfHyw1yTMLfhBRwZP3O__dujcI8q-NAOlVkhjv8HiD76ws1SMKgwLiQGJBHuhNzj5EqF5bfi_Nb4uMyxL1uXeNtTHjkMCt31XDF-dbUZgApIHVAq2psg",
                ]}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary-fixed-dim text-surface px-6 py-3 font-bold rounded-lg z-20">
              CD MANAGER
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-primary-container font-label-md">
              CASE STUDY: SPORTS TECH
            </span>
            <h3 className="font-display-md text-display-md mb-6">
              Clubes Deportivos
            </h3>
            <p className="text-on-surface-variant text-body-lg mb-8">
              Gestión integral de socios y analítica de rendimiento para centros
              de alto desempeño deportivo.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ NEXT.JS ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ FIREBASE ]
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs rounded uppercase tracking-widest">
                [ CHART.JS ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
