"use client";

import { useCarousel } from "@/hooks/useCarousel";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface CarouselProps {
  images: string[];
  alt: string;
}

export const Carousel = ({ images, alt }: CarouselProps) => {
  const { currentIndex, next, prev, goTo } = useCarousel(images.length);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-surface-container h-full">
      <div className="overflow-hidden h-full">
        <div
          className="h-full transition-transform duration-500 ease-in-out"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${images.length}, 100%)`,
            transform: `translate3d(-${currentIndex * 100}%,0,0)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex items-center justify-center overflow-hidden"
            >
              <img
                src={image}
                alt={`${alt}-${index}`}
                className="
      w-full
      h-auto
      object-contain
      transition-transform
      duration-500
    "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-30 flex items-center justify-between px-4">
        <button
          onClick={prev}
          type="button"
          className="
        carousel-prev z-20 w-10 h-10 
        rounded-full bg-surface/50 
        backdrop-blur-md border border-secondary-container/30 
        text-secondary-container flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition-all 
        hover:bg-secondary-container hover:text-white
      "
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
        </button>

        <button
          onClick={next}
          type="button"
          className="
        carousel-next z-20 w-10 h-10 
        rounded-full bg-surface/50 
        backdrop-blur-md border border-secondary-container/30 
        text-secondary-container flex items-center justify-center 
        opacity-0 group-hover:opacity-100 transition-all 
        hover:bg-secondary-container hover:text-white
      "
        >
          <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
        </button>
      </div>
    </div>
  );
};
