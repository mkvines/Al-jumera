"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  sizes?: string;
}

export default function ImageCarousel({ images, alt, sizes }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchDelta, setTouchDelta] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      if (index < 0) setCurrent(0);
      else if (index >= total) setCurrent(total - 1);
      else setCurrent(index);
    },
    [total]
  );

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!containerRef.current?.matches(":hover")) return;
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo]);

  if (total <= 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes={sizes || "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"}
        priority={false}
      />
    );
  }

  function onTouchStart(e: React.TouchEvent) {
    setTouchStart(e.touches[0].clientX);
    setSwiping(true);
    setTouchDelta(0);
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!swiping) return;
    setTouchDelta(e.touches[0].clientX - touchStart);
  }

  function onTouchEnd() {
    if (!swiping) return;
    setSwiping(false);
    if (touchDelta > 50) goTo(current - 1);
    else if (touchDelta < -50) goTo(current + 1);
    setTouchDelta(0);
  }

  return (
    <div
      ref={containerRef}
      className="carousel-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ position: "absolute", inset: 0 }}
    >
      {/* Slides */}
      <div
        className="carousel-track"
        style={{
          display: "flex",
          width: `${total * 100}%`,
          height: "100%",
          transform: `translateX(calc(-${(current * 100) / total}% + ${swiping ? touchDelta : 0}px))`,
          transition: swiping ? "none" : "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            style={{ width: `${100 / total}%`, height: "100%", position: "relative", flexShrink: 0 }}
          >
            <Image
              src={src}
              alt={`${alt} - ${i + 1}`}
              fill
              className="object-cover"
              sizes={sizes || "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {current > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goTo(current - 1); }}
          className="carousel-arrow carousel-arrow-left"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} />
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goTo(current + 1); }}
          className="carousel-arrow carousel-arrow-right"
          aria-label="Next image"
        >
          <ChevronRight size={16} />
        </button>
      )}

      {/* Dot indicators */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
