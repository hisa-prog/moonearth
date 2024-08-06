import React, { useEffect, useRef, useState } from "react";
import Image, { ImageProps } from "next/image";

const Img: React.FC<ImageProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScrolling() {
      const height = ref.current?.getBoundingClientRect().top;
      if (!!height && height < window.innerHeight * 2) setLoading(true);
    }
    onScrolling();
    window.addEventListener("scroll", onScrolling);
    return () => window.removeEventListener("scroll", onScrolling);
  }, [loading]);
  return (
    <div ref={ref}>
      <Image priority={loading} {...props} />
    </div>
  );
};

export default Img;
