/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Model(props: any) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/3d/pistekortti4.gltf');
  console.log(nodes, materials);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.39, 0, -0.21]}>
        <group position={[-1.58, 0, 0]} rotation={[-1.35, 0, -Math.PI / 2]}>
          <group position={[0, 0.68, 0]} rotation={[0.07, -0.18, -1.04]}>
            <group position={[0, 0.62, 0]} rotation={[-0.46, -0.45, 2.18]}>
              <group position={[0, 0.59, 0]} rotation={[0.88, -0.86, -1.65]} />
            </group>
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.kortti_etu.geometry}
          material={materials.Material}
          position={[-0.38, 0, 0.23]}
          rotation={[Math.PI / 2, 0, 1.3]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/pistekortti.gltf');
