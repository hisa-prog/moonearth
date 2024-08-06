import React, { useRef, useState } from "react";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { BoneLookController } from "@babylonjs/core/Bones/boneLookController";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import "@babylonjs/loaders/glTF";
import SceneComponent from "./SceneComponent";
import { Space } from "@babylonjs/core";

let SCENE;
let SCENE2;
let SCENE3;
let SCENE4;
let SCENE5;
let SCENE6;
let ACTIONS = {};
const DEBUGSCENE = false;
var model1;
var model2;
// var head;
var engine;

const onScene1Ready = (scene) => {
  SCENE = scene;
  var camera = new ArcRotateCamera(
    "camera",
    13.7,
    1.15,
    3.8,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1, 0));
  var light = new HemisphericLight(
    "hemiLight",
    new Vector3(0.1, -0.5, 0.4),
    scene
  );
  light.intensity = 1.5;
  loadModel1();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};
const onScene2Ready = (scene) => {
  SCENE2 = scene;
  var camera = new ArcRotateCamera(
    "camera",
    13.7,
    1.15,
    3.5,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1, 0));
  var light = new HemisphericLight("light1", new Vector3(1, 0.5, 0), scene);
  light.intensity = 1.5;
  loadModel2();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};
const onScene3Ready = (scene) => {
  SCENE3 = scene;
  var camera = new ArcRotateCamera(
    "camera",
    14.2,
    1.15,
    3.1,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1.15, 0));
  var light = new HemisphericLight("light1", new Vector3(1, 0.5, 0), scene);
  light.intensity = 1.5;
  loadModel3();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};
const onScene4Ready = (scene) => {
  SCENE4 = scene;
  var camera = new ArcRotateCamera(
    "camera",
    14.3,
    1.15,
    2.75,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1, 0));
  var light = new HemisphericLight("light1", new Vector3(2, 2, 1), scene);
  light.intensity = 1.5;
  loadModel4();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};
const onScene5Ready = (scene) => {
  SCENE5 = scene;
  var camera = new ArcRotateCamera(
    "camera",
    14.8,
    1.15,
    3.7,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1.15, 0));
  var light = new HemisphericLight("light1", new Vector3(1, 1, 1), scene);
  light.intensity = 1.5;
  loadModel5();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};
const onScene6Ready = (scene) => {
  SCENE6 = scene;
  var camera = new ArcRotateCamera(
    "camera",
    14.6,
    1.15,
    4,
    Vector3.Zero(),
    scene
  );

  scene.autoClear = false;
  camera.setTarget(new Vector3(0, 1.4, 2.4));
  var light = new HemisphericLight("light1", new Vector3(0, 0.8, 0), scene);
  light.intensity = 1.5;
  loadModel6();

  if (DEBUGSCENE) {
    scene.debugLayer.show();
  }
};

const loadModel1 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/Aman/",
    "Aman.glb",
    SCENE,
    (meshes, particles, skeleton) => {
      var sphere = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE);
      console.log(skeleton[0].bones[1]);
      var head = skeleton[0].bones[1];
      var mesh = meshes[0];
      console.log(mesh);
      mesh.position.x = 1.8;

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[1],
        sphere.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere.position.z = -5;
        sphere.position.y = (event.clientY / window.innerHeight) * 4;
        sphere.position.x = (event.clientX / window.innerWidth) * 5.5;
        lookAtCtl.update();
      });

      SCENE.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};

const loadModel2 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/Lee/",
    "Lee.glb",
    SCENE2,
    (meshes, particles, skeleton) => {
      var sphere2 = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE2);
      console.log(skeleton[0]);
      var head = skeleton[0].bones[1];
      var mesh = meshes[0];
      console.log(mesh);
      mesh.position.x = 1.1;

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[1],
        sphere2.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere2.position.z = -6;
        sphere2.position.y = (event.clientY / window.innerHeight) * 5;
        sphere2.position.x = (event.clientX / window.innerWidth) * 6;
        lookAtCtl.update();
      });
      SCENE2.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};
const loadModel3 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/",
    "ZmanF.gltf",
    SCENE3,
    (meshes, particles, skeleton) => {
      var sphere2 = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE3);
      console.log(skeleton[0]);
      var head = skeleton[0].bones[1];
      var mesh = meshes[0];
      console.log(mesh);
      mesh.position.x = 0.4;

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[1],
        sphere2.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere2.position.z = -7;
        sphere2.position.y = (event.clientY / window.innerHeight) * 6;
        sphere2.position.x = (event.clientX / window.innerWidth) * 7;
        lookAtCtl.update();
      });
      SCENE3.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};
const loadModel4 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/",
    "ZetaFixedv4.gltf",
    SCENE4,
    (meshes, particles, skeleton) => {
      var sphere2 = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE4);
      console.log(skeleton[0]);
      var head = skeleton[0].bones[2];
      var mesh = meshes[0];
      console.log(mesh);
      mesh.position.x = -0.3;

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[2],
        sphere2.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere2.position.z = -9;
        sphere2.position.y = (event.clientY / window.innerHeight) * 5;
        sphere2.position.x = (event.clientX / window.innerWidth) * 5;
        lookAtCtl.update();
      });
      SCENE4.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};
const loadModel5 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/",
    "CmanFixedv4.gltf",
    SCENE5,
    (meshes, particles, skeleton) => {
      var sphere2 = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE5);
      console.log(skeleton[0]);
      var head = skeleton[0].bones[1];
      var mesh = meshes[0];
      console.log(mesh);
      mesh.position.x = -1.1;

      skeleton[0].bones[1].position.x = -7;

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[1],
        sphere2.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere2.position.z = -8;
        sphere2.position.y = (event.clientY / window.innerHeight) * 5;
        sphere2.position.x = (event.clientX / window.innerWidth) * 6;
        lookAtCtl.update();
      });
      SCENE5.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};
const loadModel6 = () => {
  SceneLoader.ImportMesh(
    "",
    "/assets/Zoro/",
    "zoro.gltf",
    SCENE6,
    (meshes, particles, skeleton) => {
      var sphere2 = MeshBuilder.CreateSphere("", { diameter: 0.001 }, SCENE6);
      console.log(skeleton[0]);
      var head = skeleton[0].bones[1];
      var mesh = meshes[0];

      var lookAtCtl = new BoneLookController(
        mesh,
        skeleton[0].bones[1],
        sphere2.position
      );
      document.addEventListener("mousemove", function (event) {
        sphere2.position.z = -3.5;
        sphere2.position.y = (event.clientY / window.innerHeight) * 2.5;
        sphere2.position.x = (event.clientX / window.innerWidth) * 4;
        lookAtCtl.update();
      });
      SCENE6.registerBeforeRender(() => {
        head.setYawPitchRoll(3, 5, 5, Space.WORLD, meshes[0]);
      });
    }
  );
};

export default function App() {
  const [activeRegion, setActiveRegion] = useState("");
  const reactCanvas = useRef(null);
  const registerActions = () => {
    ACTIONS["setActiveRegion"] = setActiveRegion;
  };

  registerActions();

  return (
    <>
      <SceneComponent
        antialias
        reactCanvas={reactCanvas}
        onScene1Ready={onScene1Ready}
        onScene2Ready={onScene2Ready}
        onScene3Ready={onScene3Ready}
        onScene4Ready={onScene4Ready}
        onScene5Ready={onScene5Ready}
        onScene6Ready={onScene6Ready}
        id="shelfCanvas"
      />
    </>
  );
}
