import Img from "./img";

interface IPlanetRoadmap {
  time: string;
  year: number;
  img: string;
  description: Array<{ text: string }>;
  padding: string;
  className?: string;
  exeption?: boolean;
}

const PlanetRoadmap = ({
  time,
  year,
  img,
  description,
  padding,
  className,
  exeption,
}: IPlanetRoadmap) => {
  return (
    <div className={`${className ? className : ""} ${padding} flex flex-col`}>
      <p className="font-raitor font-normal xl:text-xl-md lg:text-xs-md uppercase mb-1">
        {time}
      </p>
      <p className="font-prompt font-normal xl:text-lg-s lg:text-thin-l text-white/50">
        {year}
      </p>
      <div
        className={`${
          exeption
            ? "5xl:w-[280px] 3xl:w-[280px] w-[220px]"
            : "5xl:w-[160px] 3xl:w-[140px] lg:w-planet"
        } mt-3`}
      >
        <Img
          src={img}
          alt={"img Planet"}
          width="100%"
          height={!exeption ? "100%" : "50%"}
          objectFit="contain"
          layout="responsive"
        />
      </div>
      <div className="flex flex-col xxl:mt-4 lg:mt-2">
        {description.map((item, index) => (
          <p
            key={index}
            className="font-prompt font-normal xl:text-xs-h lg:text-thin-m 5xl:mb-2 mb-1 last:mb-0"
          >
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};
export default PlanetRoadmap;
