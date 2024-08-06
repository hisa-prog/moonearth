import { useState, useEffect } from "react";

interface ITitle {
  text: string;
  id: string;
  maxWidth?: boolean;
  animationTime: number;
  whitespace?: boolean;
}

const Title = ({ text, whitespace, id, animationTime, maxWidth }: ITitle) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function onScrolling() {
      const height = document.getElementById(id)?.offsetTop;
      //@ts-ignore
      if (window.scrollY >= height - window.innerHeight) setIsVisible(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [isVisible]);

  return (
    <p
      className={`${
        typeof window !== "undefined" && window.innerWidth > 768
          ? isVisible
            ? "animatedTitle visible"
            : "invisible"
          : ""
      } col-span-full md:w-max
        font-raitor font-normal ${
          whitespace
            ? "whitespace-normal sm:whitespace-nowrap 1lg:whitespace-nowrap lg:whitespace-normal w-min sm:max-w-max lg:max-w-min 1lg:max-w-max"
            : ""
        } ${!maxWidth ? "max-w-min" : "max-w-max"}
        xl:text-4xl-l lg:text-4xl-m text-2xl-xs uppercase mb-2`}
      style={{ "--animationTime": animationTime + "s" } as any}
    >
      {text}
    </p>
  );
};
export default Title;
