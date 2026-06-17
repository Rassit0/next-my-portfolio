"use client";

import { useCarousel } from "@/hooks/useCarousel";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface CarouselProps {
  images: string[];
  alt: string;
}

export const Carousel = ({ images, alt }: CarouselProps) => {
  const { currentIndex, next, prev } = useCarousel(images.length);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Asegura que el portal solo se renderice en el cliente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/10 bg-surface-container p-4 text-secondary-container">
        No hay imágenes disponibles
      </div>
    );
  }

  return (
    <div className="group relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-surface-container shadow-2xl">
      {/* Contenedor del Carrusel */}
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex h-full w-full flex-shrink-0 items-center justify-center overflow-hidden"
            >
              <img
                src={image}
                alt={`${alt}-${index}`}
                className="h-full w-full object-contain object-center"
                loading="lazy"
              />

              {/* MEJORA 1: Botón flotante reubicado en la parte SUPERIOR derecha */}
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 hover:scale-105 hover:bg-black/60"
                title="Ampliar imagen"
              >
                <HugeiconsIcon icon={ViewIcon} size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de Navegación */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            type="button"
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary-container/30 bg-surface/50 text-secondary-container backdrop-blur-md transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-secondary-container hover:text-white"
            aria-label="Imagen anterior"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
          </button>

          <button
            onClick={next}
            type="button"
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary-container/30 bg-surface/50 text-secondary-container backdrop-blur-md transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-secondary-container hover:text-white"
            aria-label="Siguiente imagen"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </button>
        </>
      )}

      {/* MEJORA 2: Modal usando React Portal para romper el overflow del padre */}
      {selectedImage &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt={alt}
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />

              {/* Botón Cerrar Modal */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:-right-12 md:top-0"
                aria-label="Cerrar"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
