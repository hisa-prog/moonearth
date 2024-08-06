import { useState } from "react";

interface ILink {
  el: string;
  link: string;
  isFooter: boolean;
  isTeam?: boolean;
  className?: string;
}

const Link = ({ el, link, isTeam = false, className, isFooter }: ILink) => {
  const [isHover, setIsHover] = useState(false);
  const mouseOnBlock = () => {
    setIsHover(true);
  };
  const mouseOutBlock = () => {
    setIsHover(false);
  };

  let ImportComponent;

  ImportComponent = require(`../icons/${el}`).default;

  return (
    <a
      onMouseOver={mouseOnBlock}
      onMouseOut={mouseOutBlock}
      rel="noreferrer"
      target="_blank"
      href={link}
      className={`${className}
                ${el === "telegram" && "mt-0.5"} 
                ${!isTeam && !isFooter ? "mb-5 " : ""} 
                relative cursor-pointer flex items-center justify-center  opacity-60 hover:opacity-100`}
    >
      <img
        className={`${
          isTeam ? "mx-auto w-11" : "w-10"
        } absolute transition duration-300 ${
          !isHover ? "opacity-0" : "opacity-1"
        }`}
        src="/images/borderLink.svg"
        alt=""
      />
      <div
        className={`${isTeam ? "w-8 h-8 p-1" : "w-7 h-7 p-1"} ${
          isTeam && el === "imdb" ? "w-12 h-12 p-1" : ""
        } transiion duration-300`}
      >
        <ImportComponent />
      </div>
    </a>
  );
};
export default Link;
