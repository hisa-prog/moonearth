import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Img from "../atoms/img";
import PlanetRoadmap from "../atoms/planetRoadmap";
import { PlanetsRoadmapLaptopContext } from "../context/planetsRoadmap";

const Roadmap = ({ whitepaper = false }: any) => {
  const { roadmapList, roadmapMobileList } = useContext(
    PlanetsRoadmapLaptopContext
  );
  const slider = useRef<Slider>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleToogleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleSwipeNext = () => {
    if (expanded) setExpanded(false);
    slider.current?.slickNext();
  };
  const handleSwipePrev = () => {
    if (expanded) setExpanded(false);
    slider.current?.slickPrev();
  };

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById("roadmap")?.offsetTop;
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
        id="roadmap"
        className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 bg-space bg-cover bg-center lg:px-8 px-4 pb-[100px] lg:pb-32 relative"
      >
        <p
          className={`${
            typeof window !== "undefined" && window.innerWidth > 768
              ? isVisible
                ? "animatedTitle visible"
                : "invisible"
              : ""
          }
        col-span-4 ${
          whitepaper
            ? "md:ml-4 lg:ml-[7rem] xl:ml-[7rem] ml-0"
            : "xxl:ml-10 xl:ml-4  md:ml-[28%] md:col-start-3 lg:col-start-5 lg:ml-0"
        } md:col-span-3  lg:col-span-4 max-w-fit font-raitor font-normal 
        xl:text-4xl-l lg:text-4xl-m text-2xl mm:text-2xl-xs uppercase  lg:mb-20 mb-3`}
          style={{ "--animationTime": 1.3 + "s" } as any}
        >
          Roadmap
        </p>
        {roadmapList.map((item, index) => (
          <PlanetRoadmap
            key={`planet_${index}`}
            time={item.time}
            year={item.year}
            img={item.img}
            description={item.description}
            padding={item.padding}
            exeption={item.exception}
            className={` ${item.col}
            ${index + 1}
            col-span-2 z-10 lg:block hidden`}
          />
        ))}

        <div
          className={`bg-bgLinearGradient pb-6 rounded-30px relative col-span-4 md:col-span-8 lg:hidden`}
        >
          <Slider
            infinite={false}
            arrows={false}
            ref={slider}
            beforeChange={(current, next) => {
              setExpanded(false);
              setCurrentSlide(next);
            }}
            adaptiveHeight
          >
            {roadmapMobileList.map((item, index) => (
              <div
                key={index}
                className={`p-6 ${expanded ? "h-auto" : "h-roadMapCard"}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col">
                      <p className="font-raitor font-normal text-2xl-md uppercase mb-1">
                        {item.time}
                      </p>
                      <p className="font-prompt font-normal text-lg-s uppercase text-white/50">
                        {item.year}
                      </p>
                    </div>
                    {item.status ? (
                      <div className="bg-completed/10 py-2 px-4 rounded-30px flex">
                        <p className="font-raitor font-normal text-thin-lg text-completed">
                          Completed
                        </p>
                      </div>
                    ) : (
                      <div className="bg-coming-soon/10 py-2 px-4 rounded-30px">
                        <p className="font-raitor font-normal text-thin-lg text-coming-soon">
                          Coming soon
                        </p>
                      </div>
                    )}
                  </div>
                  <div
                    className={`${
                      item.exception ? "w-full md:w-1/2" : "w-2/4 md:w-1/4"
                    } mb-9  mx-auto`}
                  >
                    <Img
                      quality={100}
                      src={item.img}
                      alt={"img Planet"}
                      width="100%"
                      height={!item.exception ? "100%" : "50%"}
                      objectFit="contain"
                      layout="responsive"
                    />
                  </div>
                  <div className="flex flex-col items-start md:items-center">
                    {expanded
                      ? item.description.map((item, index) => (
                          <p
                            key={index}
                            className="font-prompt font-normal text-xs-xl-l mb-2"
                          >
                            {item.text}
                          </p>
                        ))
                      : item.description.slice(0, 6).map((item, index) => (
                          <p
                            key={index}
                            className="font-prompt font-normal text-xs-xl-l mb-2"
                          >
                            {item.text}
                          </p>
                        ))}
                    {item.description.length > 6 && (
                      <p
                        onClick={handleToogleExpanded}
                        className="uppercase underline mt-4"
                      >
                        {expanded ? "Swow less" : "Show more"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-around h-auto mt-4 w-32 mx-auto">
            <div className="w-10">
              <Img
                quality={100}
                src="/images/slider/sliderArrow.svg"
                width="100%"
                height="100%"
                alt=""
                className={`transform rotate-180 cursor-pointer ${
                  currentSlide === 0 ? "invisible" : ""
                }`}
                onClick={handleSwipePrev}
              />
            </div>
            <div className="w-10">
              <Img
                quality={100}
                src="/images/slider/sliderArrow.svg"
                width="100%"
                height="100%"
                alt=""
                className={`cursor-pointer ${
                  currentSlide === roadmapMobileList.length - 1
                    ? "invisible"
                    : ""
                }`}
                onClick={handleSwipeNext}
              />
            </div>
          </div>
        </div>
        <img
          className="z-0 h-[69%] absolute w-full lg:top-[17%] 1lg:top-[19%] xl:top-[16%] xl:top-[18.5%] 2xl:top-[21%] 2xl-s:top-[21.5%] 3xl:top-[15.5%] right-[4.5rem] lg:block hidden"
          src="/images/roadmap/roadmapLine.svg"
          alt="plan"
        />
      </div>
    </>
  );
};

export default Roadmap;
