import { useMemo, useRef, Suspense,useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Trail, Float, Line, Sphere, Stars, useDepthBuffer, Points, PointMaterial, } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { Vector3, EllipseCurve } from 'three';

import CanvasLoader from '../Loader';

const AtomCanvas = () => {

    return (
        <Canvas
            camera={{ position: [0, 0, 10] }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <color attach="background" args={['black']} />
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                    <Atom />
                </Float>
                <Stars saturation={0} count={400} speed={0.5} />
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
                </EffectComposer>
                <Intro />
            </Suspense>
        </Canvas>
    )
}

const StarsManuel = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 30.2 }));
  
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };

function Intro() {
    const [vec] = useState(() => new Vector3())
    return useFrame((state) => {
      state.camera.position.lerp(vec.set(state.mouse.x * 5, 3 + state.mouse.y * 2, 14), 0.05)
      state.camera.lookAt(0, 0, 0)
    })
  }

const Atom = (props) => {
    const points = useMemo(() => new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    const depthBuffer = useDepthBuffer({ frames: 1 })

    return (
        <group {...props}>
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
            <Electron position={[1, 1, 0.5]} rotation={[1, 0, -Math.PI / 3]} speed={7} />
            <Electron position={[0, 1, 0.5]} rotation={[1, 0, Math.PI / 3]} speed={10} />
            <Electron position={[0, 1, 0.5]} rotation={[1, 0, -Math.PI / 3]} speed={10} />
            <Electron position={[5, 5, 5]} rotation={[1, 0, -Math.PI / 3]} speed={1} />
            <Electron position={[-3, -3, -3]} rotation={[1, 0, -Math.PI / 3]} speed={3} />

            <Sphere args={[0.55, 64, 64]}>
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    )
}

const Electron = ({ radius = 2.75, speed = 6, ...props }) => {
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed
        ref.current.position.set(Math.sin(t) * radius, (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25, 0)
    })
    return (
        <group {...props}>
            <mesh ref={ref}>
                <sphereGeometry args={[0.25]} />
                <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
            </mesh>
        </group>
    )
}


export default AtomCanvas;