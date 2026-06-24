import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/img/bg.jpg')] bg-cover bg-center min-h-dvh">
      <Navbar />
      <div className="flex flex-col items-center text-[13rem] font-voyage text-white/80 leading-[0.8]">
        <span className="block translate-x-[-17%]">Nothing</span>
        <span className="block translate-x-[20%]">Shown</span>
        <span className="z-30 block translate-x-[-30%]">First</span>
      </div>
       <div className="flex absolute flex-col items-center leading-normal -translate-y-50 translate-x-100 overflow-hidden right-[48%] top-[30%] font-switzer text-sm">
        <span>Coordinates</span>
        <span>Withheld</span>
      </div>
      <div className="flex absolute flex-col items-center leading-normal -translate-y-50 translate-x-100 overflow-hidden left-[-6%] top-[42%] font-switzer text-sm">
        <span>A Private Assembly</span>
        <span>for Makers</span>
      </div>
      <div className="z-10 flex items-center">
        <img
          src="/img/obsiddian0-removebg-preview.png"
          alt=""
          className="block translate-y-[-25%] translate-x-[55%] md:w-3xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
