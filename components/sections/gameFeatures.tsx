import { useEffect, useState } from "react";
import Slider from "react-slick";
import Img from "../atoms/img";
import OrbitsImage from "../atoms/orbitsImage";

const featuresList = [
  {
    title: "Space Exploration",
    description:
      "Earth has fallen, and human civilization as we know it is over! To survive, the rest of the people board spaceships and head out to the Moon, our closest neighbor in the solar system. On arrival, scientists and explorers set up shop to make the Moon habitable. In this fascinating strategy, action-adventure game, explore the expanse of our solar system.",
    image: "/images/features/Space-Exploration.webp",
    imageMobile: "/images/features/Space-Exploration-mobile.webp",
    arr: [],
  },
  {
    title: "Strategy",
    description:
      "Players must gather resources, trade, form alliances, construct defenses, repel invaders, and conquer new regions in other to survive. The grand strategy emphasizes claim staking to develop your empire and establish and control routes through an offensive and defensive tactical plan of action.",
    image: "/images/features/Strategy.webp",
    imageMobile: "/images/features/Strategy-mobile.webp",
    arr: [],
  },
  {
    title: "LAND Development",
    description:
      "The primary focus of land development is your interaction with the property, whether physically or financially. Players can farm the LAND's natural resources, locate rare materials and NFTS, rent out your LAND, promote, create infrastructure, and so on.",
    image: "/images/features/LAND-Development.webp",
    imageMobile: "/images/features/LAND-Development-mobile.webp",
    arr: [],
  },
  {
    title: "Alliance",
    description:
      "Each planet will be its distinct and interactive environment, offering chances to DAOs and players through land-based commerce, environmental resources, cosmetics, gaming, and other means.",
    image: "/images/features/Alliance.webp",
    imageMobile: "/images/features/Alliance-mobile.webp",
    arr: [],
  },
  {
    title: "In-Game Economy",
    description:
      "At first he LAND NFT will be the sole means to obtain the in-game toke of Moon Earth. The token will be distributed in three different ways, namely:",
    image: "/images/features/In-Game-Economy.webp",
    imageMobile: "/images/features/In-Game-Economy-mobile.webp",
    arr: [
      "Initial airdrop to LAND owners",
      "By staking LAND plots",
      "Liquidity mining",
    ],
  },
];

const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  className: "center",
  centerMode: true,
  variableWidth: true,
  initialSlide: 0,
};

const GameFeatures = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [firstSlider, setFirstSlider] = useState<Slider | null>(null);
  const [secondSlider, setSecondSlider] = useState<Slider | null>(null);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("features")?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <>
      <div
        id="features"
        className="overflow-hidden items-baseline grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 bg-space bg-center gap-x-0 bg-cover items-center md:px-8 lg:pl-8 lg:pr-0 pl-0 pb-[100px] lg:pb-32 relative"
      >
        <div className="px-4 mb-3 col-span-full">
          <p
            className={`${
              typeof window !== "undefined" && window.innerWidth > 768
                ? isVisible
                  ? "animatedTitle visible"
                  : "invisible"
                : ""
            }
         block md:hidden font-raitor font-normal whitespace-normal md:whitespace-nowrap max-w-min
        xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase`}
            style={{ "--animationTime": 2.3 + "s" } as any}
          >
            Game Features
          </p>
        </div>
        <div className="col-span-full md:hidden mb-3">
          <Slider
            {...settings}
            className="mb-5"
            asNavFor={secondSlider as Slider}
            ref={(slider) => setFirstSlider(slider)}
            beforeChange={(slide, nextSlide) => setActiveItem(nextSlide)}
          >
            {featuresList.map((item, index) => {
              return (
                <div
                  key={`featMobile_${index}`}
                  id="feat_ + index"
                  className={`px-4 py-2 rounded-2xl font-raitor text-lg-s whitespace-nowrap text-center
                            ${
                              activeItem === index
                                ? "bg-line-gray-1 text-white"
                                : "text-line-gray-3"
                            }`}
                >
                  {item.title}
                </div>
              );
            })}
          </Slider>
          <Slider
            arrows={false}
            ref={(slider) => setSecondSlider(slider)}
            asNavFor={firstSlider as Slider}
          >
            {featuresList.map((feature) => {
              return (
                <div key={feature.title} className="px-4">
                  <div className="w-full block lg:hidden">
                    <Img
                      src={feature.imageMobile}
                      alt=""
                      width="100%"
                      height="90%"
                      objectFit="contain"
                      layout="responsive"
                    />
                  </div>

                  <div className="font-prompt font-normal block lg:hidden mt-4">
                    {feature.description}
                  </div>
                  {feature.arr.length !== 0 ? (
                    <div className="mt-2 lg:hidden">
                      {feature.arr.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center mb-3 lg:mb-2 last:mb-0"
                          >
                            <OrbitsImage />
                            <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
                              {item}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="lg:flex col-span-full items-center">
          <div className="hidden md:block lg:w-[50%] lg:pl-24 relative lg:-top-6 xl:top-0 xxl:-top-8 2xl:-top-12 lg:h-[420px] 2xl:h-[500px] 3xl:h-[600px] 4xl:h-[700px]">
            {featuresList.map((item, index) => {
              return (
                <div key={`feat_${index}`}>
                  <div
                    onClick={() => setActiveItem(index)}
                    className={` cursor-pointer lg:max-w-[80%] font-raitor ${
                      activeItem === index
                        ? "uppercase text-4xl-md-l lg:text-3xl-s xxl:text-4xl-md mb-2"
                        : "text-lg-md opacity-60 mb-4 xl:mb-8"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`font-prompt max-w-[80%] font-normal ${
                      activeItem === index ? "block" : "hidden"
                    } ${index === 4 ? "mb-6 xl:mb-8 lg:mb-0" : "mb-6 xl:mb-8"}`}
                  >
                    <div>{item.description}</div>
                    {item.arr.length !== 0 ? (
                      <div className="mt-2">
                        {item.arr.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex items-center mb-3 lg:mb-2 last:mb-0"
                            >
                              <OrbitsImage />
                              <p className="ml-2 font-prompt font-normal text-xs-xl uppercase tracking-02em">
                                {item}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-4 md:px-0 lg:w-[50%]">
            <div className="w-full lg:block hidden">
              <Img
                src={featuresList[activeItem].image}
                alt=""
                width="100%"
                height="100%"
                objectFit="contain"
                layout="responsive"
              />
            </div>
            {/* <img src={featuresList[activeItem].image} alt="" className="w-full lg:block hidden" /> */}
            <div className="w-full hidden md:block lg:hidden">
              <Img
                src={featuresList[activeItem].imageMobile}
                alt=""
                width="100%"
                height="90%"
                objectFit="contain"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameFeatures;
