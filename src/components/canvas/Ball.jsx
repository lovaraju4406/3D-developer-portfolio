import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  /*
   * Fix: WebGL "texSubImage2D: bad image data" and "Texture is immutable"
   * These errors occur when a texture (especially .svg) is uploaded to the GPU
   * before it is fully decoded, or when Three.js tries to re-upload an already
   * immutable texture. Setting colorSpace + needsUpdate after load resolves this.
   */
  decal.colorSpace = THREE.SRGBColorSpace;
  decal.minFilter  = THREE.LinearFilter;
  decal.magFilter  = THREE.LinearFilter;
  decal.needsUpdate = true;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#EDE9FE'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        /*
         * Fix: antialias + failIfMajorPerformanceCaveat=false prevents
         * ANGLE/WebGL from switching to a limited context that causes
         * the "Texture is immutable" GL_INVALID_OPERATION error.
         */
        antialias: true,
        failIfMajorPerformanceCaveat: false,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;