export default function HeroVideo({className}: {className?: string}) {
  return (
    <video
      width={1920}
      height={1080}
      className={`block h-auto w-full object-contain will-change-transform ${className || ''}`}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/hero/desktop.webp"
    >
      <source src="/hero/hero.mp4" />
    </video>
  );
}
