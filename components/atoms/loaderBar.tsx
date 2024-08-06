import React, { FC } from "react";
import style from "../../styles/loaderProgress.module.css";

type LoaderProps = {
  progress: number;
  animate?: boolean;
};

const Loader: FC<LoaderProps> = ({ progress, animate }) => {
  return (
    <div className={style.container}>
      <div
        style={{ width: `${progress}%` }}
        className={[style.progress, animate ? style.animate : ""].join(" ")}
      />
    </div>
  );
};

export default Loader;
