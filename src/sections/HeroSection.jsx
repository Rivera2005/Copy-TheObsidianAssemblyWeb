import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/img/bg.jpg')] bg-cover bg-center min-h-dvh">
      <Navbar />

      <div className="flex flex-col items-center text-[13rem] font-voyage text-white/80 leading-[0.8]">
        <span className="block translate-x-[-11%]">Nothing</span>
        <span className="block translate-x-[20%]">Shown</span>
        <span className="z-30 block translate-x-[-30%]">First</span>
      </div>
      <div className="flex absolute flex-col items-center leading-normal overflow-hidden right-[23%] top-[16%] font-switzer text-sm">
        <span>Coordinates</span>
        <span>Withheld</span>
      </div>
      <div className="flex absolute flex-col items-center leading-normal overflow-hidden left-[22%] top-[27%] font-switzer text-sm">
        <span>A Private Assembly</span>
        <span>for Makers</span>
      </div>

      <div className="flex w-full h-full absolute justify-between p-6 top-[43%]">
        <div class="w-full max-w-[230px] max-h-[300px] aspect-[4/3] rounded-lg overflow-hidden -rotate-12 relative">
          <img
            src="/img/paisaje1.webp"
            alt=""
            className="object-cover w-full h-full"
          />
          <p className="font-jubilee text-2xl absolute top-[7%] left-1/2">P.</p>
        </div>
        <div class="w-full max-w-[231px] max-h-[300px] aspect-[4/3] rounded-lg overflow-hidden rotate-12 relative">
          <img
            src="/img/paisaje2.webp"
            alt=""
            className="object-cover w-full h-full"
          />
          <p className="font-jubilee text-2xl absolute top-[7%] left-1/2">I.</p>
        </div>
      </div>
      <div className="z-10 flex items-center w-full">
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
