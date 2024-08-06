import { useEffect, useState } from "react";
import Img from "../atoms/img";

const partnersList = [
  {
    image: "Pl9-space",
    link: "https://pl9.space",
  },
  {
    image: "Crowdcreate",
    link: "https://crowdcreate.us",
  },
  {
    image: "olivervisualfx",
    link: " https://www.oliverboueid.com/",
  },
  {
    image: "platinum",
    link: "https://platinum.fund/en",
  },
];

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("partners")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
      // if(window.scrollY <= height + window.innerHeight * 2) setIsVisible(false)
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <>
      <div
        id="partners"
        className="px-4 md:px-8 lg:px-32 font-prompt bg-space grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 pb-32"
      >
        <div className="col-span-full md:w-max px-4 md:px-0 lg:mx-auto">
          <p
            className={`${
              typeof window !== "undefined" && window.innerWidth > 768
                ? isVisible
                  ? "animatedTitle visible"
                  : "invisible"
                : ""
            }
        font-raitor font-normal whitespace-normal md:whitespace-nowrap max-w-min md:max-w-none
        xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase mb-8`}
            style={{ "--animationTime": 1.2 + "s" } as any}
          >
            Partners
          </p>
        </div>
        <div className="col-span-full grid grid-cols-2 flex-wrap lg:flex-nowrap md:flex justify-center gap-x-4 gap-y-3">
          {partnersList.map((item, index) => {
            return (
              <a
                href={item.link}
                key={`partner_${index}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center"
              >
                {/* <img src={`/images/partners/${item.image}.svg`} alt="partner" className="w-full" /> */}
                <div className="w-full">
                  <Img
                    width="100%"
                    height="38%"
                    objectFit="contain"
                    layout="responsive"
                    src={`/images/partners/${item.image}.svg`}
                    alt="partner"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Partners;
