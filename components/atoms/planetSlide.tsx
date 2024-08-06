import Button from "../atoms/button";
import Img from "./img";

interface IPlanetSlide {
  index: number;
  name: string;
  title: string;
  img: string;
  openModal: () => void;
  indexPlanet: number;
  planets: Array<{
    name: string;
    img: string;
    title: string;
    listOfParagraphs: Array<string>;
  }>;
  className?: string;
  isMobile: boolean;
}

const animation = "transform transition-all duration-1000";

const PlanetSlide = ({
  index,
  name,
  title,
  indexPlanet,
  // planets,
  openModal,
  img,
  className,
  isMobile,
}: IPlanetSlide) => {
  return (
    <>
      <div
        className={`${className ? className : ""} ${
          isMobile ? "" : animation
        } ${
          isMobile
            ? "px-6 py-8 h-planetCard"
            : index + 1 === indexPlanet
            ? "px-6 py-8"
            : "p-4 scale-90"
        } flex flex-col items-center bg-bgLinearGradientSlide backdrop-blur-6px rounded-30px relative`}
      >
        <div></div>
        <div
          className={`${isMobile ? "" : animation} 
                      ${
                        isMobile
                          ? "w-full lg:-mt-28 md:-mt-32 ml:-mt-40 -mt-36"
                          : index + 1 === indexPlanet
                          ? "w-full lg:-mt-28 md:-mt-32 ml:-mt-40 -mt-36"
                          : "w-[70%] -mt-16"
                      } relative top-0 mx-auto`}
        >
          <Img
            src={img}
            alt={name + "img"}
            width="100%"
            height={"100%"}
            objectFit="contain"
            layout="responsive"
          />
        </div>
        <p
          className={`${isMobile ? "" : animation} 
                    ${
                      isMobile
                        ? "mb-5 text-2xl-h"
                        : index + 1 === indexPlanet
                        ? "mb-5 text-2xl-h"
                        : "mt-4"
                    }
                    font-raitor font-normal text-center`}
        >
          {name}
        </p>
        <p
          className={`${isMobile ? "" : animation} truncateText
                    ${
                      isMobile
                        ? "text-xs-xl"
                        : index + 1 === indexPlanet
                        ? "text-xs-xl"
                        : "hidden"
                    }
                    font-prompt font-normal text-center w-[260px] md:w-[240px] xl:w-[210px] xxl:w-[240px] px-4 ms:px-0`}
        >
          {title}
        </p>
        <Button
          onClick={() => openModal()}
          className={`${
            isMobile ? "block" : index + 1 === indexPlanet ? "block" : "hidden"
          } mt-5`}
        >
          Read more
        </Button>
      </div>
    </>
  );
};
export default PlanetSlide;
