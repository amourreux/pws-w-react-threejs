import { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame,useThree } from '@react-three/fiber';
import { Trail, Float, Line, Sphere, Stars, SpotLight, useDepthBuffer } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls, Preload } from "@react-three/drei";
import * as THREE from 'three'
import { Vector3 } from 'three'

import CanvasLoader from '../Loader';

const AtomCanvas = () => {

    return (
        <Canvas
            camera={{ position: [0, 0, 10] }}
        >
            <Suspense fallback={<CanvasLoader />}>
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

            </Suspense>
            
        </Canvas>
    )
}


const Atom = (props) => {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])
    const depthBuffer = useDepthBuffer({ frames: 1 })

    return (
        <group {...props}>
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} />
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, 1]} />
            <Line worldUnits points={points} color="turquoise" lineWidth={0.3} rotation={[0, 0, -1]} />
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
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
            <Trail local width={5} length={6} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.25]} />
                    <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    )
}


export default AtomCanvas;