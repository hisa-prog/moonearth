import { useRef, useState } from "react";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import "@babylonjs/core/Animations/animatable";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import "@babylonjs/loaders/glTF";
import SceneComponentMoon from "./SceneComponentMoon";
import { Animation, Color3, MeshBuilder } from "@babylonjs/core";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";

let SCENE;
let ACTIONS = {};
// var model;
var head;

export default function App() {
  const [activeRegion, setActiveRegion] = useState("");
  const WidthFirstScreen = window.innerWidth;
  const reactCanvas = useRef(null);

  const onSceneReady = (scene) => {
    SCENE = scene;

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 2,
      1.5,
      new Vector3(0, 0, 0)
    );
    camera.attachControl(reactCanvas, true);

    camera.lowerRadiusLimit = 1.5;
    camera.upperRadiusLimit = 1.5;

    var light = new HemisphericLight("light1", new Vector3(0, 0, 0), scene);

    light.intensity = 2.5;
    scene.autoClear = false;
    const moon = MeshBuilder.CreateSphere("moon", { diameter: 1 });
    moon.rotation.x = Math.PI;
    const moonfMat = new StandardMaterial("moonfMat");
    moonfMat.diffuseTexture = new Texture("/assets/texture.webp", scene);
    moon.material = moonfMat;
    moon.material.specularColor = new Color3(0, 0, 0);

    const animmoon = new Animation(
      "animmoon",
      "rotation.y",
      30,
      Animation.ANIMATIONTYPE_FLOAT,
      Animation.ANIMATIONLOOPMODE_CYCLE
    );

    const moonKeys = [];

    //At the animation key 0, the value of rotation.y is 0
    moonKeys.push({
      frame: 0,
      value: 0,
    });

    moonKeys.push({
      frame: 1366,
      value: 2 * Math.PI,
    });

    animmoon.setKeys(moonKeys);
    moon.animations = [];
    moon.animations.push(animmoon);

    //Begin animation - object to animate, first frame, last frame and loop if true
    scene.beginAnimation(moon, 0, 20000, true);
  };

  const onRender = () => {};
  const registerActions = () => {
    ACTIONS["setActiveRegion"] = setActiveRegion;
  };
  registerActions();

  return (
    <>
      <SceneComponentMoon
        reactCanvas={reactCanvas}
        antialias
        onSceneReady={onSceneReady}
        onRender={onRender}
        id="shelfCanvas"
        style={
          WidthFirstScreen <= 320
            ? { width: 248, height: 248 }
            : WidthFirstScreen <= 380
            ? { width: 320, height: 320 }
            : WidthFirstScreen <= 440
            ? { width: 380, height: 380 }
            : WidthFirstScreen <= 800
            ? { width: 440, height: 440 }
            : WidthFirstScreen <= 1300
            ? { width: 440, height: 440 }
            : WidthFirstScreen <= 1560
            ? { width: 520, height: 520 }
            : WidthFirstScreen <= 1920
            ? { width: 600, height: 600 }
            : { width: 800, height: 800 }
        }
      />
    </>
  );
}
