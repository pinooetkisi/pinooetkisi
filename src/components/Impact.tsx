"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function Impact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const stats = [
    { value: "10+", label: "Etkinlik", icon: "🎪" },
    { value: "1000+", label: "Öğrenci", icon: "👨‍🎓" },
    { value: "5+", label: "Kurum", icon: "🏫" },
    { value: "3+", label: "Sponsor", icon: "💝" },
  ];

  const galleryImages = [
    // Etkinlik 1
    { src: "/images/gallery/etkinlik-1.1.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.2.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.3.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.4.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.5.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.6.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.7.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.8.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.9.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.10.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.11.JPG", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-1.12.JPG", alt: "STEM Etkinliği" },
    // Etkinlik 2
    { src: "/images/gallery/etkinlik-2.1.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.2.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.3.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.4.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.5.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.6.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.7.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.8.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.9.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.10.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.11.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-2.12.jpeg", alt: "STEM Etkinliği" },
    // Etkinlik 3
    { src: "/images/gallery/etkinlik-3.1.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.2.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.3.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.4.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.5.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.6.jpeg", alt: "STEM Etkinliği" },
    { src: "/images/gallery/etkinlik-3.7.jpeg", alt: "STEM Etkinliği" },
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

          {/* Progress Bar */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <span className="text-gray-400 text-sm">{currentSlide + 1} / {galleryImages.length}</span>
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-400 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / galleryImages.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Etkinliklerimizden kareler
        </p>
      </div>
    </section>
  );
}
