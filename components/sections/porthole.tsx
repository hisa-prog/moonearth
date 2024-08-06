import { useEffect, useState } from "react";
import PortholeMobile from "./portholeMobile";

export default function Porthole() {
  const [scrollY, setScrollY] = useState(0);
  const [hidePorthole, setHidePorthole] = useState(false);
  const [scaleNum, setScale] = useState(0);
  const [opacity, setOpacity] = useState(0);

  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      const heightFirstScreen = window.innerHeight;
      if (heightFirstScreen <= 600) {
        setMinHeight(heightFirstScreen);
        setMaxHeight(heightFirstScreen * 2);
      } else if (heightFirstScreen <= 700) {
        setMinHeight(heightFirstScreen);
        setMaxHeight(heightFirstScreen * 5);
      } else if (heightFirstScreen <= 800) {
        setMinHeight(heightFirstScreen);
        setMaxHeight(heightFirstScreen * 4.5);
      } else if (heightFirstScreen <= 1080) {
        setMinHeight(heightFirstScreen);
        setMaxHeight(heightFirstScreen * 4.5);
      } else if (heightFirstScreen <= 1440) {
        setMinHeight(heightFirstScreen);
        setMaxHeight(heightFirstScreen * 4.25);
      }
    }
  }, []);

  useEffect(() => {
    function onScrolling() {
      setScrollY(window.scrollY);
      if (
        window.scrollY <= 0 ||
        window.scrollY >= maxHeight - window.innerHeight + 800
      ) {
        setHidePorthole(true);
      } else if (window.scrollY > 0 || window.scrollY < maxHeight)
        setHidePorthole(false);

      if (window.scrollY > minHeight && window.scrollY < maxHeight) {
        const temp = (
          ((window.scrollY - minHeight) / (maxHeight - minHeight)) * 1 +
          1
        ).toFixed(2);
        //@ts-ignore
        setScale(temp);

        var scrollCoef = 0.0002;

        setOpacity(
          window.scrollY >= maxHeight / 1.1
            ? 1.1 - window.scrollY * scrollCoef
            : 1
        );
      }
    }

    if (window.innerWidth >= 1024) {
      onScrolling();
      window.addEventListener("scroll", onScrolling);
      return () => window.removeEventListener("scroll", onScrolling);
    }
  }, [hidePorthole]);

  return (
    <>
      <div id="secondScreen" className="bg-space overflow-hidden relative">
        <PortholeMobile />
        <img
          className="w-screen opacity-80 lg:block hidden"
          src="/images/bgPlanets.webp"
          alt=""
          loading="lazy"
        />
        <img
          style={
            hidePorthole
              ? { display: "none" }
              : scrollY > minHeight
              ? {
                  position: "fixed",
                  transform: `scale(${scaleNum})`,
                  opacity: opacity,
                }
              : { position: "absolute", transform: "scale(1)" }
          }
          className={`porthole z-10 w-screen h-screen right-0 top-0 lg:block hidden maskImage`}
          src={`/images/bgPorthole.webp`}
          alt=""
        />
        <div className="hidden lg:block">
          <div className="absolute max-w-[89%] mx-auto text-center -translate-x-1/2 -translate-y-1/2 z-5 left-1/2 xxl:top-[32%] xxl:w-[47%] top-[30%] w-[49%] grid">
            <p className="w-auto mx-0 font-raitor font-normal text-4xl-md-m">
              Human civilization <br /> is over
            </p>
            <p className="font-prompt font-normal text-2xl-m-l mt-6 ">
              Earth has been hit by three meteorites, causing chaos all over.
              Floods, earthquakes, tsunamis, and wildfires continue to spread
              across the post-apocalyptic world, causing billions of deaths.{" "}
            </p>
          </div>
          <div className="max-w-[89%] absolute mx-auto text-center -translate-x-1/2 -translate-y-1/2 z-5 left-1/2 xxl:top-[55%] xxl:w-[47%] top-[54%] w-[49%] grid">
            <p className="font-raitor font-normal text-4xl-md-m">
              To survive, the rest of the people board spaceships and head out
              to the Moon
            </p>
            <p className="font-prompt font-normal text-2xl-m-l mt-6 ">
              On arrival, scientists and explorers take up the challenge of
              building a new home. Humans are now at the mercy of geeks they
              used to bully. Will society be able to make a home from the barren
              dunes of the Moon? Will they conquer the Moon and expand to other
              planets?{" "}
            </p>
          </div>
          <div className="absolute z-5 left-[25%] xxl:top-[86%] xxl:w-[47%] top-[84%] w-[49%] grid mt-0">
            <p className="font-raitor font-normal text-4xl-md-m text-center">
              Join the adventure and find out for yourself
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
