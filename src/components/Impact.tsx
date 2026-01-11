"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Impact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "50+", label: "Etkinlik", icon: "🎪" },
    { value: "5000+", label: "Öğrenci", icon: "👨‍🎓" },
    { value: "30+", label: "Kurum", icon: "🏫" },
    { value: "15+", label: "Sponsor", icon: "💝" },
  ];

  const galleryImages = [
    { src: "/images/gallery/etkinlik-1.jpg", alt: "STEM Etkinliği 1" },
    { src: "/images/gallery/etkinlik-2.jpg", alt: "STEM Etkinliği 2" },
    { src: "/images/gallery/etkinlik-3.jpg", alt: "STEM Etkinliği 3" },
    { src: "/images/gallery/etkinlik-4.jpg", alt: "STEM Etkinliği 4" },
    { src: "/images/gallery/etkinlik-5.jpg", alt: "STEM Etkinliği 5" },
    { src: "/images/gallery/etkinlik-6.jpg", alt: "STEM Etkinliği 6" },
  ];

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth * 0.85,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(sliderRef.current.scrollLeft / slideWidth);
      setCurrentSlide(newIndex);
    }
  };

  return (
    <section id="etki" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Stats Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          {/* Section Header */}
          <div className="lg:max-w-md">
            <span className="inline-block text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Sosyal Etki
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Birlikte Yarattığımız Etki
            </h2>
            <p className="text-gray-300">
              Her etkinlik, geleceğin bilim insanlarına ilham veriyor
            </p>
          </div>

          {/* Stats - Compact */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[30%] snap-start"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToSlide(Math.max(0, currentSlide - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors hidden sm:block"
            aria-label="Önceki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(galleryImages.length - 1, currentSlide + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-colors hidden sm:block"
            aria-label="Sonraki"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-emerald-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Etkinliklerimizden kareler
        </p>
      </div>
    </section>
  );
}
