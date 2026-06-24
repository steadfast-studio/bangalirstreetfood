export default function HeroVideo() {
  return (
    <video
      width={1920}
      height={1080}
      className="block h-auto w-full object-contain will-change-transform"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster="/hero/desktop.png" 
    >
      <source src="/hero/hero.mp4" />
    </video>
  );
}
