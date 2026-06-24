"use client";

import Image from "next/image";

type WavyHeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  bgImage: string;
};

const WavyHero = ({ title, subtitle, description, bgImage }: WavyHeroProps) => {
  return (
    <div className="relative h-125 w-full overflow-hidden sm:h-150">
      {/* Background image */}
      <Image
        src={bgImage}
        alt={title}
        width={1920}
        height={1080}
        priority
        sizes="100vw"
        fetchPriority="high"
        className="h-full w-full object-cover object-center hero-mask-intersect"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 hero-mask-intersect" />

      {/* Content */}
      <div className=" absolute inset-0 z-10 mx-auto flex max-w-6xl flex-col justify-end p-8 pb-52 text-white">
        {subtitle && (
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] uppercase">
            {subtitle}
          </p>
        )}

        <h1 className="mb-4 text-4xl font-semibold sm:text-6xl font-handwriting">{title}</h1>

        {description && (
          <p className="max-w-2xl text-sm text-white/90">{description}</p>
        )}
      </div>
    </div>
  );
};

export default WavyHero;
