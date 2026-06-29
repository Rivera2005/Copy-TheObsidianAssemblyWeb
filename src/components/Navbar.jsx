import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".nav", {
      yPercent: -100,
      duration: 1,
      ease: "power1.out",
    });
  });
  return (
    <header className="w-full z-50 nav">
      <nav className="grid grid-cols-2 md:grid-cols-3 px-5 pt-1 md:px-10 md:pt-3">
        <div className="flex flex-col font-jubilee text-[#F1EADE] text-2xl md:text-3xl leading-none">
          <span className="pl-5 md:pl-6">The</span>
          <span>Obsidian</span>
          <span className="pl-6 md:pl-7">Assembly</span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-2">
          <span className="font-switzer uppercase py-1.5 w-56 rounded-lg text-[#F1EADE] text-sm bg-white/10 backdrop-blur-md borde shadow-sm text-center">
            places
          </span>
          <div className="bg-black shrink-0 w-px h-16"></div>
          <span className="font-switzer uppercase py-1.5 w-56 rounded-lg text-[#F1EADE] text-sm bg-white/10 backdrop-blur-md borde shadow-sm text-center">
            objects
          </span>
        </div>

        <div className="flex items-center justify-end">
          <span className="font-switzer uppercase py-1.5 w-52 rounded-lg text-black text-sm bg-[#F1EADE] backdrop-blur-md borde shadow-sm text-right pr-4">
            Menu
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
