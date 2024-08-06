import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Img from "../atoms/img";

const charactersList = [
  {
    image: "/images/characters/Maverick.webp",
    title: "Maverick",
    description: `A super-intelligent scientist and explorer. He is in charge of human defense on the Moon. With his excellent scientific knowledge, he designs a robotic arm to keep humans safe.`,
  },
  {
    image: "/images/characters/General-Lee.webp",
    title: "General Lee",
    description:
      "One of the most experienced army generals on Earth. A great mind skilled in military strategy and combat.",
  },
  {
    image: "/images/characters/Enzo.webp",
    title: "Enzo",
    description: `Enzo comes from generations of experienced farmers. His experience and knowledge are assets for the survival of humankind. `,
  },
  {
    image: "/images/characters/Zeta.webp",
    title: "Zeta",
    description:
      "Resourceful, progressive, and refined, Zeta is a woman who lays the foundation of the educational system for men on the Moon.",
  },
  {
    image: "/images/characters/Chubbs.webp",
    title: "Chubbs",
    description:
      "A community leader with psychic powers. With his help the human population is safe from alien attacks, and law and order are maintained.",
  },
  {
    image: "/images/characters/Zoro.webp",
    title: "Zoro",
    description:
      "Zoro is an artificial intelligence-equipped robot. He monitors the production of other robots and advancing the technology used in producing army bots.",
  },
];

const MoonEarthCharacters = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("characters")?.offsetTop;
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
        id="characters"
        className="md:px-8 lg:px-16 font-prompt bg-space grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 pb-32"
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
        xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase mb-3`}
            style={{ "--animationTime": 2.3 + "s" } as any}
          >
            Moon Earth Characters
          </p>
        </div>
        <div className="col-span-full hidden md:grid gap-2 lg:gap-4 grid-cols-4 md:grid-cols-12 relative">
          <img
            src="/images/characters.webp"
            alt=""
            className="w-full mx-auto col-span-full"
          />
          <div className="col-span-full">
            <div
              className={`grid grid-cols-4 gap-x-3 md:grid-cols-12 lg:grid-cols-12 z-1 bg-space relative`}
            >
              {charactersList.map((item, index) => {
                return (
                  <div
                    key={`item_${index}`}
                    className="col-span-2 min-h-[200px] 2xl-s:min-h-[250px] 3xl:min-h-[200px]"
                  >
                    <div className="text-xs-xl uppercase tracking-02em mb-1">
                      {item.title}
                    </div>
                    <div className="text-lg-xs-s opacity-70">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-span-full md:hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            slidesPerView={"auto"}
            spaceBetween={20}
            className="mySwiper"
          >
            {charactersList.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Img
                    src={item.image}
                    alt=""
                    width="100%"
                    height="100%"
                    objectFit="contain"
                    layout="responsive"
                  />
                  <div className="px-4 mt-5">
                    <div className="mb-1 font-prompt font-normal uppercase tracking-02em text-xs-xl">
                      {item.title}
                    </div>
                    <div className="font-prompt font-normal opacity-70 text-lg-xs-s">
                      {item.description}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex mt-7 lg:hidden justify-center">
            <div ref={navigationPrevRef} className="w-10 mr-3">
              <img
                src="/images/slider/sliderArrow.svg"
                alt=""
                style={{ width: "40px", height: "40px" }}
                className="transform rotate-180 cursor-pointer"
              />
            </div>
            <div ref={navigationNextRef} className="w-10 ml-3">
              <img
                src="/images/slider/sliderArrow.svg"
                alt=""
                style={{ width: "40px", height: "40px" }}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoonEarthCharacters;
