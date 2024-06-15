/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
// import { Lights } from '../../components/elements/common';
import {
    OrbitControls, Stage,
} from "@react-three/drei";
import useStore from "../../components/store";
import { POD_TYPE } from "../../components/utils";


// import * as THREE from "three";
import { AuraFocus, AuraGather, AuraHuddle, AuraSolo, AuraMeet, Elemetsolo, ElemetMeet, ElemetHuddel, Elemetfocus } from '../../components/models/common';

import { Html } from "@react-three/drei";

import {
    CircularProgress,
} from "@mui/material";


const Loader = () => {
    return (
        <Html
            center
            position={[0, 0, 0]}
        >
            <CircularProgress color="inherit" size={40} />
        </Html>
    );
};


const ViewSystem = () => {

    return (
        <>
            <OrbitControls
                enableDamping={true}
                enableZoom={true}
                enablePan={false}
                enabled={true}
                // minPolarAngle={Math.PI / 12}
                // maxPolarAngle={7 * Math.PI / 16}
                // minAzimuthAngle={-4 * Math.PI / 12}
                // maxAzimuthAngle={4 * Math.PI / 12}
                minDistance={0.01}
                maxDistance={100}
            />
        </>
    )
}


const Scene = () => {

    const type = useStore((s) => s.type);
    const setType = useStore((s) => s.setType);

    const texturesUrl = useStore((s) => s.texturesUrl);

    const setTexureUrl = useStore((s) => s.setTexureUrl);

    useEffect(() => {
        const handleMessage = (event) => {
            console.log(event, event.data, "check here")
            if (event.data && event.data.type === 'From Wix to 3D') {
                const updates = event.data.update;
                const key = Object.keys(updates)[0];
                console.log(key, updates);
                const current = { ...texturesUrl };
                switch (key) {
                    case "style":
                        setType(updates[key]);
                        break;
                    case "exterior":
                        current.exterior.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "interior":
                        current.interior.color = updates[key];
                        setTexureUrl(current);
                        break;
                    case "seating":
                        current.seating.color = updates[key];
                        setTexureUrl(current);
                        break;
                    default:
                        break;
                }
                // setTexureUrl(newTexture);
            }
        };
        console.log("iframe load success")
        // window.addEventListener('message', handleMessage);
        window.onmessage = (event) => {
            handleMessage(event)
        }

        return () => {
            window.removeEventListener('message', handleMessage);
        };
        // eslint-disable-next-line
    }, []);

    return (

        <Stage environment={'city'} shadows={'contact'} intensity={1.5}>
            <Suspense fallback={null}>
                <spotLight position={[0.0, 2.2, 0.0]} angle={1.5} penumbra={.45} />

                <ViewSystem />
                {/* <Lights /> */}

                <group dispose={null}  >
                    <Suspense  fallback={<Loader />}
                    >
                        {
                            type === POD_TYPE.A && (
                                <AuraFocus />
                            )
                        }
                        {
                            type === POD_TYPE.B && (
                                <AuraGather />
                            )
                        }
                        {
                            type === POD_TYPE.C && (
                                <AuraHuddle />
                            )
                        }
                        {
                            type === POD_TYPE.D && (
                                <AuraSolo />
                            )
                        }
                        {
                            type === POD_TYPE.E && (
                                <AuraMeet />
                            )
                        }
                        {
                            type === POD_TYPE.F && (
                                <Elemetsolo />
                            )
                        }
                        {
                            type === POD_TYPE.G && (
                                <ElemetMeet />
                            )
                        }
                        {
                            type === POD_TYPE.H && (
                                <ElemetHuddel />
                            )
                        }
                        {
                            type === POD_TYPE.I && (
                                <Elemetfocus />
                            )
                        }
                    </Suspense>
                </group>
            </Suspense>
            <OrbitControls />
        </Stage>

    )
}




const CanvasLayout = () => {
    return (
        <Canvas
            // shadows
            // gl={{
            //     preserveDrawingBuffer: true,
            //     outputEncoding: 3000, // THREE.sRGBEncoding
            //     toneMappingExposure: 1.6,
            //     // toneMapping: THREE.ACESFilmicToneMapping,
            //     toneMapping: THREE.NeutralToneMapping,
            // }}
            camera={{ position: [1, 1.5, 3], fov: 45, near: 0.001, far: 1000 }}
        >
            <color attach="background" args={["#ffffff"]} />
            <Scene />
        </Canvas>
    )
}

export default CanvasLayout;
