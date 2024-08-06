import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { useEffect, useState } from "react";
import styles from "../../../styles/loader.module.css";

const SceneComponentMoon = (props) => {
  const [hideLoader, setHideLoader] = useState(true);

  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onSceneReady,
    reactCanvas,
    style,
    className,
    ...rest
  } = props;

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(
        reactCanvas.current,
        antialias,
        engineOptions,
        adaptToDeviceRatio
      );
      setTimeout(() => {
        setHideLoader(false);
      }, 3000);
      const scene = new Scene(engine, sceneOptions);
      if (scene.isReady()) {
        props.onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === "function") {
          onRender(scene);
        }
        scene.render();
      });

      const resize = () => {
        scene.getEngine().resize();
      };

      if (window) {
        window.addEventListener("resize", resize);
      }

      return () => {
        scene.getEngine().dispose();

        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
  }, [reactCanvas]);

  return (
    <div className="relative">
      <canvas
        style={style ? style : ""}
        className={`${hideLoader ? "opacity-0" : "opacity-1"} ${
          className ? className : ""
        }`}
        ref={reactCanvas}
        {...rest}
      />
      <div
        className={` top-20 h-full w-full absolute
      ${!hideLoader ? "hidden" : "block"}`}
      >
        <div
          className={`${styles.loader} top-1/3 lg:top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 absolute `}
        ></div>
      </div>
    </div>
  );
};

export default SceneComponentMoon;
