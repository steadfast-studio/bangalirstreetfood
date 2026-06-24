"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
// import ImageLightbox from "@/components/ImageLightbox";
import WavyHero from "@/components/WavyHero";
import LightboxImage from "@/components/LightboxImage";

type GalleryImageData = {
  id: string;
  src: string;
  name: string;
  tags: "kashmir" | "andaman" | "vizag" | "misc";
};

export const dynamic = "force-static";

// sample images for travel
const galleryImages: GalleryImageData[] = [
  {
    id: "1",
    src: "/gallery/bsf1.webp",
    name: "Aaru Valley Pahalgam",
    tags: "kashmir",
  },
  {
    id: "2",
    src: "/gallery/bsf2.webp",
    name: "Beside Lidder River",
    tags: "kashmir",
  },
  {
    id: "3",
    src: "/gallery/bsf3.webp",
    name: "Lal chawk of Srinagar",
    tags: "misc",
  },
  {
    id: "4",
    src: "/gallery/bsf4.webp",
    name: "Hourse Riding at Pahalgam",
    tags: "misc",
  },
  {
    id: "5",
    src: "/gallery/bsf5.webp",
    name: "Tulip garden of Srinagar",
    tags: "misc",
  },
  {
    id: "6",
    src: "/gallery/bsf6.webp",
    name: "Way to Srinagar",
    tags: "misc",
  },
  {
    id: "7",
    src: "/gallery/bsf7.webp",
    name: "Sikara Ride at Dal Lake",
    tags: "kashmir",
  },
  {
    id: "8",
    src: "/gallery/bsf8.webp",
    name: "Tulip Garden of Srinagar",
    tags: "misc",
  },
  {
    id: "9",
    src: "/gallery/bsf9.webp",
    name: "Sonamarg Tunnel",
    tags: "misc",
  },
  {
    id: "10",
    src: "/gallery/bsf10.webp",
    name: "Sonamarg",
    tags: "misc",
  },
  {
    id: "12",
    src: "/gallery/bsf12.webp",
    name: "With American Biriyani Dada",
    tags: "misc",
  },
  {
    id: "13",
    src: "/gallery/bsf13.webp",
    name: "With Happy Customers",
    tags: "misc",
  },
  {
    id: "14",
    src: "/gallery/bsf14.webp",
    name: "Vizag Rishikonda Beach",
    tags: "misc",
  },
  {
    id: "15",
    src: "/gallery/bsf15.webp",
    name: "Vizag Yarada Beach",
    tags: "misc",
  },
  {
    id: "16",
    src: "/gallery/bsf16.webp",
    name: "Chandanwari",
    tags: "misc",
  },
  {
    id: "17",
    src: "/gallery/bsf17.webp",
    name: "Aaru Valley Pahalgam",
    tags: "misc",
  },
  {
    id: "18",
    src: "/gallery/bsf18.webp",
    name: "Meena Bazar Dal lake",
    tags: "misc",
  },
  {
    id: "19",
    src: "/gallery/bsf19.webp",
    name: "Gulmarg",
    tags: "misc",
  },
  {
    id: "20",
    src: "/gallery/bsf20.webp",
    name: "Gulmarg Gondola Ride",
    tags: "misc",
  },
];

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3"];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const lightboxImages = useMemo(
    () =>
      galleryImages.map((image) => ({
        src: image.src,
        alt: image.name,
        title: image.name,
      })),
    [],
  );

  return (
    <>
      <WavyHero
        title="Gallery"
        subtitle=""
        description="Explore our vibrant gallery showcasing the essence of Bangalir Street
          Food."
        bgImage="/pahar.webp"
      />

      <div className="mx-auto mt-16 max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`${rotations[index % rotations.length]} bg-white rounded-lg p-3 pb-6 shadow transition-all duration-300 hover:rotate-0 hover:shadow-xl`}
            >
              <Image
                src={image.src}
                alt={image.name}
                width={400}
                height={300}
                quality={100}
                className="h-56 w-full object-cover brightness-95 contrast-95 sepia-[0.2]"
              />
              <p className="font-handwriting mt-3 text-center text-xl font-bold text-gray-800">
                {image.name}
              </p>
            </button>
          ))}
        </div>

        {/* <ImageLightbox
          images={lightboxImages}
          isOpen={selectedIndex !== null}
          initialIndex={selectedIndex ?? 0}
          onClose={() => setSelectedIndex(null)}
        /> */}
        <LightboxImage
          images={lightboxImages}
          isOpen={selectedIndex !== null}
          initialIndex={selectedIndex ?? 0}
          onClose={() => setSelectedIndex(null)}
        />
      </div>
    </>
  );
};

export default GalleryPage;
