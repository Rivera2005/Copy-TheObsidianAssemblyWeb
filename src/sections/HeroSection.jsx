import Navbar from "../components/Navbar";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline({});
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    tl.from(titleSplit.chars, {
      yPercent: 100,
      xPercent: 50,
      stagger: 0.02,
      opacity: 0.0,
      duration: 1,
      ease: "power1.out",
    })
      .from(
        ".img-div",
        {
          yPercent: 5,
          opacity: 0.0,
          duration: 1,
          ease: "power1.out",
        },
        "-=0.7",
      )
      .from(
        ".pai-div",
        {
          yPercent: 10,
          opacity: 0.0,
          duration: 1,
          ease: "power1.out",
        },
        "-=0.7",
      )
      .from(
        ".txt-fl",
        {
          opacity: 0,
        },
        "-=0.7",
      ).from(".clipP", {
        yPercent: 10
      }, "-=0.6");

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTL
      .to("#pai-div1", {
        rotate: 14,
        yPercent: 75,
        ease: "power1.inOut",
      })
      .to(
        "#pai-div2",
        {
          rotate: -14,
          yPercent: 75,
          ease: "power1.inOut",
        },
        "==",
      )
      .to(
        "#img-div",
        {
          yPercent: 20,
          scale: 0.70,
          ease: "power1.inOut",
        },
        "==",
      )
      .to(
        "#pai-div1",
        {
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.3",
      )
      .to(
        "#pai-div2",
        {
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=0.5",
      )
      .to(
        "#img-div",
        {
          opacity: 0,
          ease: "power1.inOut",
        }, "-=0.5"
      );
  });

  return (
    <section className="bg-[url('/img/bg.jpg')] min-h-dvh overflow-hidden relative flex flex-col hero">
      <Navbar className="navbar" />
      <div className="flex-1 flex flex-col items-center relative">
        <div className="relative flex flex-col items-center justify-center font-voyage text-[clamp(5rem,15vw,12rem)] text-[#F1EADE] leading-[0.8] pt-40 md:pt-3">
          <span className="translate-x-[-4vw] hero-title">Nothing</span>
          <span className="translate-x-[7vw] hero-title">Shown</span>
          <span className="translate-x-[-4vw] z-20 hero-title">First</span>

          <div className="absolute top-34 md:top-24 right-9 md:-right-28 flex flex-col items-center font-switzer text-[10px] md:text-xs leading-normal text-black txt-fl">
            <span>Coordinates</span>
            <span>Withheld</span>
          </div>

          <div className="absolute bottom-19 md:bottom-48 -left-14 md:-left-28 flex flex-col items-center font-switzer text-[10px] md:text-xs leading-normal text-black txt-fl">
            <span>A Private Assembly</span>
            <span>for Makers</span>
          </div>
        </div>

        <div
          className="w-full max-w-2xl -mt-20 md:-mt-44 z-10 img-div"
          id="img-div"
        >
          <img
            src="/img/obsiddian0-removebg-preview.png"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full absolute bottom-1/4 flex justify-between z-30">
          <div
            className="w-[28vw] max-w-[230px] aspect-[3/4] rounded-lg overflow-hidden -rotate-14 relative pai-div"
            id="pai-div1"
          >
            <img
              src="/img/paisaje1.webp"
              alt=""
              className="object-cover w-full h-full"
            />
            <p className="font-jubilee text-2xl absolute top-[7%] left-1/2">
              P.
            </p>
          </div>
          <div
            className="w-[28vw] max-w-[230px] aspect-[3/4] rounded-lg overflow-hidden rotate-14 relative pai-div"
            id="pai-div2"
          >
            <img
              src="/img/paisaje2.webp"
              alt=""
              className="object-cover w-full h-full"
            />
            <p className="font-jubilee text-2xl absolute top-[7%] left-1/2">
              I.
            </p>
          </div>
        </div>
      </div>
      <div
        className="w-full h-102 absolute bottom-0 bg-black clipP"
        style={{ clipPath: "ellipse(55% 90% at 50% 100%)" }}
      />
    </section>
  );
};

export default HeroSection;
