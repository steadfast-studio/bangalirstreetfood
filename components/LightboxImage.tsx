"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
};

interface ImageLightboxProps {
  images: LightboxImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

/**
 * Detect whether an image URL is portrait or landscape by loading it
 * off-screen. Returns the aspect ratio (width / height).
 */
function useImageAspectRatio(src: string | undefined) {
  const [ratio, setRatio] = useState<number | null>(null);
  const [loadedSrc, setLoadedSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!src) return;
    const img = new window.Image();
    img.onload = () => {
      setLoadedSrc(src);
      setRatio(img.naturalWidth / img.naturalHeight);
    };
    img.src = src;
  }, [src]);

  return loadedSrc === src ? ratio : null;
}

export default function ImageLightbox({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
}: ImageLightboxProps) {
  const safeInitialIndex = useMemo(() => {
    if (!images.length) return 0;
    if (initialIndex < 0) return 0;
    if (initialIndex > images.length - 1) return images.length - 1;
    return initialIndex;
  }, [images.length, initialIndex]);

  const [currentIndex, setCurrentIndex] = useState(safeInitialIndex);
  const [lastInitialIndex, setLastInitialIndex] = useState(safeInitialIndex);

  if (safeInitialIndex !== lastInitialIndex) {
    setCurrentIndex(safeInitialIndex);
    setLastInitialIndex(safeInitialIndex);
  }

  const currentImage = images[currentIndex];
  const aspectRatio = useImageAspectRatio(isOpen ? currentImage?.src : undefined);

  // Scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const goPrev = useCallback(() =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length),
    [images.length]
  );

  const goNext = useCallback(() =>
    setCurrentIndex((prev) => (prev + 1) % images.length),
    [images.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !images.length) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length, isOpen, onClose, goPrev, goNext]);

  if (!isOpen || !images.length) return null;

  /**
   * Layout strategy:
   * - Portrait  (ratio < 1):  tall card, constrained by viewport height
   * - Square    (ratio ≈ 1):  treated like portrait
   * - Landscape (ratio > 1):  wide card, constrained by viewport width
   *
   * We let the <img> render at its natural aspect ratio via `aspect-ratio`
   * so there is NEVER any empty space / black bars inside the polaroid frame.
   */
  const isLandscape = aspectRatio !== null && aspectRatio > 1;

  const polaroidMaxWidth = isLandscape
    ? "min(90vw, 800px)"      // wide for landscape
    : "min(75vw, 480px)";     // narrower for portrait / square

  // CSS aspect-ratio value e.g. "4 / 3" or "3 / 4"
  const cssAspectRatio = aspectRatio
    ? `${aspectRatio} / 1`
    : "1 / 1"; // square placeholder while loading

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      style={{ background: "rgba(0,0,0,0.72)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-4 z-10 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Polaroid card — width adapts to orientation */}
      <div
        className="relative animate-[zoomIn_0.3s_ease]"
        style={{ width: polaroidMaxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg p-3 pb-8 shadow-2xl">
          {/* 
            Image wrapper: aspect-ratio drives the height.
            `overflow-hidden` clips any sub-pixel rounding.
            No black background — white card shows through while loading.
          */}
          <div
            className="relative w-full overflow-hidden rounded-sm"
            style={{ aspectRatio: cssAspectRatio }}
          >
            {/* Skeleton shimmer while aspect ratio resolves */}
            {aspectRatio === null && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}

            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              /**
               * object-cover fills the exact aspect-ratio box edge-to-edge.
               * Because the box IS the image's own ratio, no cropping occurs
               * and no black bars appear — it just fills perfectly.
               */
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 768px) 90vw, 800px"
              priority
            />
          </div>

          {/* Caption */}
          <div className="font-handwriting mt-4 text-center text-3xl font-bold text-gray-800 leading-tight px-2">
            {currentImage.title ?? currentImage.alt}
          </div>
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="mt-4 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-4 z-10 rounded-full border border-white/30 bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}