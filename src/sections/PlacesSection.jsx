import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const PlacesSection = () => {
  useGSAP(() => {
    // En HeroSection o en un componente de transición
  });

  return (
    <section className="w-full min-h-screen bg-black">
      <div className="w-full flex flex-col items-center pt-10 font-voyage text-[clamp(5rem,15vw,11rem)] text-[#F1EADE] leading-[0.8]">
        <span>Explore</span>
        <span>Places</span>
      </div>
    </section>
  );
};

export default PlacesSection;
