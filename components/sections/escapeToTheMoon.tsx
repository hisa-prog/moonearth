import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
let Moon: any;

export default function EscapeToTheMoon() {
  const [visibleMoon, setIsVisibleMoon] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const watch = document.getElementById("moonSection");

    function obCallback(payload: any) {
      if (watch !== null) {
        if (payload[0].isIntersecting === true) {
          Moon = loadable(() => import("../helpers/model/moonBabylon"));
          setIsVisibleMoon(true);
          console.log(payload[0].isIntersecting);
        }
      }
    }

    const ob = new IntersectionObserver(obCallback);
    if (watch) {
      ob.observe(watch);
    }
  });

  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("escapeToTheMoon")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <div
      id="escapeToTheMoon"
      className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 pt-20 relative bg-space bg-center bg-cover"
    >
      <div className="bg-grayBg col-span-4 h-screen lg:block hidden"></div>
      <div className="lg:col-span-8 md:col-span-4 col-span-4 lg:h-max grid lg:grid-cols-8 grid-cols-4 gap-x-4 gap-y-3 md:gap-y-12 lg:pr-[133px] px-4 lg:px-0">
        <div className="lg:mt-[20%] flex flex-col lg:col-start-3 lg:col-span-6 col-span-4">
          <p
            className={`font-raitor xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase max-w-fit
                md:ml-0 ml:ml-[6%] ml-0 
                ${
                  typeof window !== "undefined" && window.innerWidth > 768
                    ? isVisible
                      ? "animatedTitle visible"
                      : "invisible"
                    : ""
                }`}
            style={{ "--animationTime": 1.8 + "s" } as any}
          >
            The land is NFT
          </p>
          <p className="mt-6 font-prompt md:text-xl-md text-white/70">
            {`Each plot of land is an NFT that represents an ownership stake in that planet or the Moon. Plots are limited to 1000 per planet.`}{" "}
            <br /> <br />
            {`Owning or renting an NFT plot will be the only way to generate in-game tokens and also grants governance rights in that planetary DAO. `}
            <br /> <br />
            {`Interplanetary DAO governance is tied to in-game token. Owners will be able to submit recommendations and vote on specific game features, treasury usage, attributes and development. `}
            <br /> <br />
            {`The Moon Earth Federation owns unsold land until it is purchased.`}
            <br />
            <br />
          </p>
        </div>
      </div>
      <div
        id="moonSection"
        className="flex flex-col items-center justify-center lg:absolute top-[20%] xxl:top-[20%]  lg:left-[8.5%] col-span-4 z-10"
      >
        <div className=" flex justify-center min-h-[340px] cursor-pointer relative -top-4 md:top-auto">
          {visibleMoon ? <Moon /> : null}
        </div>
        <a
          href="#lands"
          className="flex items-center relative -top-16 ms:-top-6 md:top-auto"
        >
          <p className="font-prompt font-normal text-xs-xl text-center uppercase tracking-02em">
            Explore all planets
          </p>
          <img className="ml-3 w-4" src="/images/arrowDown.svg" alt="arrow" />
        </a>
      </div>
      <div className="h-[251px] w-screen bg-grayBg absolute top-[74%] md:hidden"></div>
    </div>
  );
}
