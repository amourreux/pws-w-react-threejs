import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { RGBELoader } from 'three-stdlib'
import CanvasLoader from "../Loader";
import { useControls, Leva } from 'leva'


function Diamond(props) {
  const ref = useRef()
  const { nodes } = useGLTF('/dflat.glb')
  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  // Optional config
  const config = useControls({
    number: 3,
    bounces: { value: 3, min: 0, max: 8, step: 1 },
    aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
    ior: { value: 2.75, min: 0, max: 10 },
    fresnel: { value: 1, min: 0, max: 1 },
    color: 'white',
    fastChroma: true,
  },)

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
      <mesh  ref={ref} geometry={nodes.Diamond_1_0.geometry} {...props}>
        <MeshRefractionMaterial envMap={texture} {...config} toneMapped={false} />
      </mesh>
      )}
    </CubeCamera>
  )
}

const DiamondCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Diamond scale={[1.5, 1.5, 1.5]} rotation={[0.7, 0, 0]} position={[0, -0.175 + 0.5, 0]} />
        <Preload all />
        <Leva hidden></Leva>
      </Suspense>
    </Canvas>
  );
};

export default DiamondCanvas;
