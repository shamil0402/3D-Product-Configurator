import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useGLTF, } from "@react-three/drei"
import useStore from "../../components/store";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { EffectComposer, Outline } from '@react-three/postprocessing';
import { Select, Selection } from '@react-three/postprocessing';

import { Html } from "@react-three/drei";

export function AuraFocus(props) {

    const [hoveredPart, setHoveredPart] = useState()
    const { nodes, materials } = useGLTF('models/AuraFocus.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    // const exteriorColor = useLoader(TextureLoader, texturesUrl.exterior.color);
    // const interiorColor = useLoader(TextureLoader, texturesUrl.interior.color);
    // const FurnitureColor = useLoader(TextureLoader, texturesUrl.seating.color);
    // materials.Exterior.map = exteriorColor;
    // materials.Interior.map = interiorColor;
    // materials.Furniture.map = FurnitureColor;

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Set3.map = t;
                materials['Set2-Static'].map = t;
                materials['Set2-Static'].map = t;
                materials['Set1-Static'].map = t;
                materials.Set1.map = t;
                materials.Set2.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    const handleOver = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            e.object.material.color.setHex(0x00FF00)
            setHoveredPart({
                name: e.object.material.name,
                pos: e.object.position,
            })
        }
    }, [])

    const handleOut = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            e.object.material.color.setHex(0xFFFFFF)
            setHoveredPart();
        }

    }, [])

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Box010_1.geometry}
                    material={materials.Varios}
                    position={[-72.874, 98.227, -49.41]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_1.geometry}
                    material={materials.Varios}
                    position={[-72.203, 109.983, -54.763]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent005_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, -44.672]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent004_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, -3.573]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent003_1.geometry}
                    material={materials.Varios}
                    position={[-50.847, 222.516, 37.427]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent002_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, -44.672]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent001_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, -3.573]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Box009_1.geometry}
                    material={materials.Varios}
                    position={[-72.852, 136.494, -49.41]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_1.geometry}
                    material={materials.Varios}
                    position={[-72.217, 148.25, -54.759]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Censor_1.geometry}
                    material={materials.Varios}
                    position={[0, 221.729, -42.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Vent_1.geometry}
                    material={materials.Varios}
                    position={[50.838, 222.516, 37.427]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Lamp_1.geometry}
                    material={materials.Varios}
                    position={[0.001, 221.735, -1.858]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorHandle_1.geometry}
                    material={materials.Varios}
                    position={[7.715, 110.902, 64.095]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[-73.794, 114.745, -1.836]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-WallsExterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.02, 114.75, -1.902]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    onPointerOver={handleOver}
                    onPointerOut={handleOut}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0.005, 6.938, -1.845]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-38.803, 114.741, -69.51]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />


                <Selection>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline
                            blur
                            visibleEdgeColor="white"
                            edgeStrength={10}
                            width={500}
                            height={500}
                            edgeThickness={0.5} // Adjust thickness to fit your needs
                            hiddenEdgeColor="transparent" // Ensures only visible edges are highlighted
                        />
                    </EffectComposer>
                    <Select enabled={hoveredPart?.name === "Set3"}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['V-Set3_1'].geometry}
                            material={materials.Set3}
                            position={[-9.614, 56.603, 0.773]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            onPointerOver={handleOver}
                            onPointerOut={handleOut}
                            userData={{ hover: false }}
                        // visible={false}
                        />
                    </Select>
                </Selection>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_1'].geometry}
                    material={materials['Set2-Static']}
                    position={[-42.142, 60.721, -25.81]}
                    rotation={[-Math.PI / 2, 0, 1.309]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1.geometry}
                    material={materials.Varios}
                    position={[-65.173, 110.77, 60.954]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-set1_1'].geometry}
                    material={materials['Set1-Static']}
                    position={[53.83, 51.473, -45.78]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set1_1'].geometry}
                    material={materials.Set1}
                    position={[53.83, 51.473, -45.78]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set2_1'].geometry}
                    material={materials.Set2}
                    position={[-42.142, 60.721, -25.81]}
                    rotation={[-Math.PI / 2, 0, 1.309]}
                    visible={false}
                />
            </group>
            {
                hoveredPart &&
                <Html
                    distanceFactor={10}
                // position={[hoveredPart.pos.x, hoveredPart.pos.y, hoveredPart.pos.z]}
                >
                    <div
                        style={{
                            paddingTop: "5px",
                            transform: "translate3d(calc(50 % + 40px), 0, 0)",
                            textAlign: "left",
                            background: "#202035",
                            color: "white",
                            padding: "5px 5px",
                            borderRadius: "2px",
                            fontSize: "12px",
                        }}
                    >
                        Information
                    </div>


                </Html>
            }

        </group >
    )
}

export function AuraGather(props) {
    const [hoveredPart, setHoveredPart] = useState()
    const { nodes, materials } = useGLTF('models/AuraGather.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                // materials.Furniture.map = t;
                materials[' Furniture-Set2'].map = t;
                materials.Sest1_FurnitureStatic.map = t;
                materials[' Furniture-Set4-Static'].map = t;
                materials[' Furniture-Set3'].map = t;
                materials['V-M-Sest1_Furniture'].map = t;
                materials[' Furniture-Set4'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    const handleOver = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            e.object.material.color.setHex(0x00FF00)
            console.log(e.object.material.name, "2222222222")
            setHoveredPart({
                name: e.object.material.name,
                pos: e.object.position,
            })
        }
    }, [])

    const handleOut = useCallback((e) => {
        e.stopPropagation();
        if (e.object.material.name !== "Exterior" && e.object.material.name !== "Interior") {
            e.object.material.color.setHex(0xFFFFFF)
            setHoveredPart();
        }

    }, [])

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB_Glass_1'].geometry}
                    material={materials.Glass}
                    position={[0, 114.75, -124.635]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[-0.278, 6.95, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-83.899, 114.608, 120.744]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Barios_1.geometry}
                    material={materials.Varios}
                    position={[38.551, 221.42, -7.76]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[-123.806, 114.746, 76.8]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_Furniture_1'].geometry}
                    material={materials[' Furniture-Set2']}
                    position={[45.269, 7.65, -47.695]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 114.7, -1.902]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Sest1_Furniture_1'].geometry}
                    material={materials.Sest1_FurnitureStatic}
                    position={[91.852, 44.744, -35.697]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 113.912, -156.247]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 113.912, -200.798]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set4_Furniture_1'].geometry}
                    material={materials[' Furniture-Set4-Static']}
                    position={[-0.278, 7.66, -111.01]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />

                <Selection>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline
                            blur
                            visibleEdgeColor="white"
                            edgeStrength={10}
                            width={500}
                            height={500}
                            edgeThickness={0.5} // Adjust thickness to fit your needs
                            hiddenEdgeColor="transparent" // Ensures only visible edges are highlighted
                        />
                    </EffectComposer>
                    <Select enabled={hoveredPart?.name === " Furniture-Set3"}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['V-Set3_Furniture_1'].geometry}
                            material={materials[' Furniture-Set3']}
                            position={[-0.278, 76.793, -1.86]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            onPointerOver={handleOver}
                            onPointerOut={handleOut}
                        //   visible={false}
                        />
                    </Select>
                </Selection>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Sest1_Furniture_1'].geometry}
                    material={materials['V-M-Sest1_Furniture']}
                    position={[91.852, 44.744, -35.697]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_1.geometry}
                    material={materials[' Furniture-Set4']}
                    position={[-0.278, 7.66, -111.01]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
            </group>
        </group>
    )
}

export function AuraHuddle(props) {
    const { nodes, materials } = useGLTF('models/AuraHuddle.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials["V-Sest3_Furniture"].map = t;
                materials["V-M-Sest1_Furniture"].map = t;
                materials.Sest1_FurnitureStatic.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[0, 222.55, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0, 6.95, -1.86]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.02, 114.71, -1.56]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[38.55, 221.562, -1.879]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_1'].geometry}
                    material={materials['Set2-Staic']}
                    position={[0, 82.662, -84.938]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set2_3'].geometry}
                    material={materials['Set2-Staic']}
                    position={[-97.922, 36.964, 32.321]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                //    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 113.953, -121.122]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 113.953, -165.673]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Set2_1.geometry}
                    material={materials['Set2-Staic']}
                    position={[0, 82.662, -84.938]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Sest1_Furniture_1'].geometry}
                    material={materials.Sest1_FurnitureStatic}
                    position={[77.034, 44.744, 3.742]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Sest1_Furniture_1'].geometry}
                    material={materials['V-M-Sest1_Furniture']}
                    position={[77.034, 44.744, 3.742]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-Set3_1'].geometry}
                    material={materials['V-Sest3_Furniture']}
                    position={[-18.237, 56.603, 0.773]}
                    rotation={[-Math.PI / 2, 0, -0.036]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-Set2_1'].geometry}
                    material={materials['M-Set2']}
                    position={[-97.922, 36.964, 32.321]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                //  visible={false}
                />
            </group>
        </group>
    )
}

export function AuraSolo(props) {

    const { nodes, materials } = useGLTF('models/AuraSolo.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });


    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Furniture.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials.Furniture]);

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.012}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Shape003_1.geometry}
                    material={materials['Empty material']}
                    position={[0, 6.8, -49.489]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionA_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 60.754, -7.11]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0, 6.943, -4.345]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Interior_1'].geometry}
                    material={materials.Interior}
                    position={[0, 114.75, -4.345]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[0, 114.825, 47.39]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 114.75, -49.481]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB-BenchTable_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionC_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 60.754, -7.11]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionB-Bench_1'].geometry}
                    material={materials.Furniture}
                    position={[0, 8.647, -20.349]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    visible={false}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[-46.184, 124.51, -61.13]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionC_1'].geometry}
                    material={materials.Furniture}
                    position={[32.091, 110.673, -2.756]}
                    rotation={[-Math.PI / 2, 0, 0]}
                // visible={false}
                />
            </group>
        </group>
    )
}

export function AuraMeet(props) {
    const { nodes, materials } = useGLTF('models/AuraMeet.glb')
    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                materials.Exterior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials.Exterior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Furniture.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials.Furniture]);

    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Furniture_1.geometry}
                    material={materials.Furniture}
                    position={[-99.454, 40.302, -1.903]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Furniture_1'].geometry}
                    material={materials.Furniture}
                    position={[-99.454, 40.302, -1.903]}
                    rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionA_PowerOutlet_1'].geometry}
                    material={materials.Varios}
                    position={[-30.167, 114.299, 47.502]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_InteriorWll_1'].geometry}
                    material={materials.Interior}
                    position={[0, 117.477, -82.338]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-OptionB-Glass_1'].geometry}
                    material={materials.Glass}
                    position={[-76.392, 6.606, -128.773]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-InteriorWalls_1'].geometry}
                    material={materials.Interior}
                    position={[-108.179, 64.506, -41.081]}
                    rotation={[0, -1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Carpet_1'].geometry}
                    material={materials.Carpet}
                    position={[0.132, 10.988, -41.203]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-76.392, 6.606, -128.773]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorGlass_1.geometry}
                    material={materials.Glass}
                    position={[0.008, 118.156, 47.452]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['V-M-OptionA_ExteriorWall_1'].geometry}
                    material={materials.Exterior}
                    position={[0, 117.477, -126.888]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['M-Exterior_1'].geometry}
                    material={materials.Exterior}
                    position={[0.008, 118.156, 40.703]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[-30.167, 114.299, 47.502]}
                />
            </group>
        </group>
    )
}


export function Elemetsolo(props) {
    const { nodes, materials } = useGLTF('models/Elemetsolo.glb');

    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                //materials.Exterior.map = t;
                materials['Exterior _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Sofa.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.025}
                position={[0, -1, 0]}
            >
                <group position={[0, 44.941, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Table_1.geometry}
                        material={materials['Table _1']}
                        position={[5.966, -10.645, 1.806]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Carpet_1.geometry}
                        material={materials.Carpet}
                        position={[-46.07, -24.92, -39.093]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Varios_1.geometry}
                        material={materials['Varios _1']}
                        position={[-46.07, -24.92, -39.802]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Structure_1.geometry}
                        material={materials.Struccture}
                        position={[0, 0.491, 1.343]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Interior_1.geometry}
                        material={materials.Interior}
                        position={[-18.137, -21.178, -45.194]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.DooreWindow_1.geometry}
                        material={materials.DoorWindows}
                        position={[-5.218, 19.929, 43.791]}
                        rotation={[Math.PI / 2, Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Elemet_Solo_035_1.geometry}
                        material={materials['Glass _1']}
                        position={[14.887, 20.371, -42.039]}
                        rotation={[Math.PI, 0, 0]}
                        scale={-0.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Exterior_1.geometry}
                        material={materials['Exterior _1']}
                        position={[-33.743, -22.751, -41.964]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Sofa_1.geometry}
                        material={materials.Sofa}
                        position={[-7.865, 2.519, -15.565]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Elemet_Solo_041_1.geometry}
                        material={materials['Glass _1']}
                        position={[14.904, -19.784, -42.049]}
                        rotation={[Math.PI, 0, 0]}
                        scale={-0.5}
                    />
                </group>
            </group>
        </group>
    )
}


export function ElemetMeet(props) {
    const { nodes, materials } = useGLTF('models/ElemetMeet.glb');

    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                //materials.Exterior.map = t;
                materials['Material _1320'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Sofa.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.025}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Carpet_1.geometry}
                    material={materials.Carpet}
                    position={[-46.078, 5.848, 34.331]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exterior_1.geometry}
                    material={materials['Material _1320']}
                    position={[-56.782, 2.977, 32.162]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Interior_1.geometry}
                    material={materials.Interior}
                    position={[40.86, -0.253, 63.24]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorsWindows_1.geometry}
                    material={materials.DoorWindows}
                    position={[-28.258, 88.732, -29.033]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials.Glass}
                    position={[-8.152, 2.902, -29.476]}
                    rotation={[1.571, 0, 0]}
                    scale={-0.5}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1.geometry}
                    material={materials.Struccture}
                    position={[-50.41, 4.553, 30.004]}
                    rotation={[-Math.PI, 1.571, 0]}
                    scale={-1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Furniture_1.geometry}
                    material={materials.Varios}
                    position={[-40.949, 12.39, 28.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.sofa_1.geometry}
                    material={materials.Sofa}
                    position={[-40.949, 12.39, 28.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table_1.geometry}
                    material={materials.Table}
                    position={[-40.949, 12.39, 28.003]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object001_1.geometry}
                    material={materials.DoorWindows}
                    position={[-40.949, 12.39, 28.003]}
                />
            </group>
        </group>
    )
}

export function ElemetHuddel(props) {
    const { nodes, materials } = useGLTF('models/ElemetHuddel.glb');

    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                //materials.Exterior.map = t;
                materials['Exterior _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Sofa.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Carpet_1.geometry}
                    material={materials.Carpet}
                    position={[-117.041, 14.853, 72.2]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemtHuddle_002_1.geometry}
                    material={materials.Varios}
                    position={[-117.041, 13.053, 72.2]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorWindows_1.geometry}
                    material={materials.DoorWindows}
                    position={[-71.769, 225.38, -58.686]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glass_1.geometry}
                    material={materials['Glass _1']}
                    position={[-20.7, 7.372, -59.81]}
                    rotation={[1.571, 0, 0]}
                    scale={-0.5}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Exterior_1.geometry}
                    material={materials['Exterior _1']}
                    position={[-144.221, 7.561, 66.69]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Interior_1.geometry}
                    material={materials.Interior}
                    position={[-58.514, 117.408, 7.67]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Structure_1.geometry}
                    material={materials.Struccture}
                    position={[-128.037, 11.566, 61.209]}
                    rotation={[-Math.PI, 1.571, 0]}
                    scale={-1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sofa_1.geometry}
                    material={materials.Sofa}
                    position={[-104.005, 31.471, 56.126]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table_1.geometry}
                    material={materials['Table _1']}
                    position={[0.061, 11.838, -20.469]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    )
}

export function Elemetfocus(props) {
    const { nodes, materials } = useGLTF('models/Elemetfocus.glb');

    const podFef = useRef();
    // const colors = useStore((s) => s.colors);

    const texturesUrl = useStore((s) => s.texturesUrl);

    useFrame(() => {
        if (podFef.current) {
            podFef.current.rotation.y += 0.002;
        }
    });

    const exteriorColor = texturesUrl.exterior.color;
    const interiorColor = texturesUrl.interior.color;
    const FurnitureColor = texturesUrl.seating.color;

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(exteriorColor, (t) => {
            if (isMounted) {
                //materials.Exterior.map = t;
                materials['Exterior _1'].map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [exteriorColor, materials]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(interiorColor, (t) => {
            if (isMounted) {
                materials.Interior.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [interiorColor, materials.Interior]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status
        const loader = new TextureLoader();
        loader.load(FurnitureColor, (t) => {
            if (isMounted) {
                materials.Sofa.map = t;
            }
        });

        // Cleanup function to avoid memory leaks and dangling references
        return () => {
            isMounted = false; // Cleanup flag on unmount
        };
    }, [FurnitureColor, materials]);


    return (
        <group {...props}
            dispose={null}
            ref={podFef}
        >
            <group
                scale={0.01}
                position={[0, -1, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemetFocus_036_1.geometry}
                    material={materials.Struccture}
                    position={[-72.385, 11.558, 52.291]}
                    rotation={[-Math.PI, 1.571, 0]}
                    scale={-1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Table_1.geometry}
                    material={materials['Table _1']}
                    position={[24.344, 88.986, 52.667]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.DoorWindow_1.geometry}
                    material={materials.DoorWindows}
                    position={[-29.668, 225.405, -59.12]}
                    rotation={[0, 1.571, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemetFocus_041_1.geometry}
                    material={materials['Exterior _1']}
                    position={[-81.186, 7.56, 58.782]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Varios_1.geometry}
                    material={materials.Varios}
                    position={[-74.886, 13.052, 52.597]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemetFocus_049_1.geometry}
                    material={materials.Carpet}
                    position={[-146.686, 14.852, 71.797]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Furniture_1.geometry}
                    material={materials.Sofa}
                    position={[6.789, 62.516, 0.054]}
                    rotation={[-Math.PI / 2, 0, 1.374]}
                    scale={100}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.ElemetFocus_055_1.geometry}
                    material={materials.Interior}
                    position={[74.937, -0.643, -56.258]}
                    rotation={[-Math.PI / 2, 0, Math.PI]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Clas_1.geometry}
                    material={materials['Glass _1']}
                    position={[-8.949, 7.397, -60.273]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.5}
                />
            </group>
        </group>
    )
}