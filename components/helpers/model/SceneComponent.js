import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { useEffect, useState } from "react";
import styles from "../../../styles/loader.module.css";

const SceneComponent = (props) => {
  const [hideLoader, setHideLoader] = useState(true);
  const {
    antialias,
    engineOptions,
    adaptToDeviceRatio,
    sceneOptions,
    onRender,
    onScene1Ready,
    onScene2Ready,
    onScene3Ready,
    onScene4Ready,
    onScene5Ready,
    onScene6Ready,
    reactCanvas,
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
      // engine.hideLoadingUI();
      setTimeout(() => {
        setHideLoader(false);
      }, 20000);
      const scene1 = new Scene(engine, sceneOptions);
      const scene2 = new Scene(engine, sceneOptions);
      const scene3 = new Scene(engine, sceneOptions);
      const scene4 = new Scene(engine, sceneOptions);
      const scene5 = new Scene(engine, sceneOptions);
      const scene6 = new Scene(engine, sceneOptions);
      if (
        scene1.isReady() &&
        scene2.isReady() &&
        scene3.isReady() &&
        scene4.isReady() &&
        scene5.isReady() &&
        scene6.isReady()
      ) {
        props.onScene1Ready(scene1);
        props.onScene2Ready(scene2);
        props.onScene3Ready(scene3);
        props.onScene4Ready(scene4);
        props.onScene5Ready(scene5);
        props.onScene6Ready(scene6);
      } else {
        scene1.onReadyObservable.addOnce((scene) => props.onScene1Ready(scene));
        scene2.onReadyObservable.addOnce((scene) => props.onScene2Ready(scene));
        scene3.onReadyObservable.addOnce((scene) => props.onScene3Ready(scene));
        scene4.onReadyObservable.addOnce((scene) => props.onScene4Ready(scene));
        scene5.onReadyObservable.addOnce((scene) => props.onScene5Ready(scene));
        scene6.onReadyObservable.addOnce((scene) => props.onScene6Ready(scene));
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === "function") {
          onRender(scene1);
          onRender(scene2);
          onRender(scene3);
          onRender(scene4);
          onRender(scene5);
          onRender(scene6);
        }
        scene1.render();
        scene2.render();
        scene3.render();
        scene4.render();
        scene5.render();
        scene6.render();
      });

      const resize = () => {
        scene1.getEngine().resize();
        scene2.getEngine().resize();
        scene4.getEngine().resize();
        scene3.getEngine().resize();
        scene5.getEngine().resize();
        scene6.getEngine().resize();
      };

      if (window) {
        window.addEventListener("resize", resize);
      }

      return () => {
        scene1.getEngine().dispose();
        scene2.getEngine().dispose();
        scene3.getEngine().dispose();
        scene4.getEngine().dispose();
        scene5.getEngine().dispose();
        scene6.getEngine().dispose();

        if (window) {
          window.removeEventListener("resize", resize);
        }
      };
    }
  }, [reactCanvas]);

  return (
    <div className="relative">
      <canvas ref={reactCanvas} {...rest} />
      <div
        className={` top-20 h-full bg-space  w-full absolute
        ${!hideLoader ? "hidden" : "block"}`}
      >
        <div
          className={`${styles.loader} absolute  top-1/4 right-1/2 translate-x-1/2 -translate-y-1/2 w-full`}
        ></div>
      </div>
    </div>
  );
};

export default SceneComponent;
