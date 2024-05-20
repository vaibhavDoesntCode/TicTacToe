import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import * as THREE from 'three';


function Torus() {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.001;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z += 0.003;
  });

  return (
    <mesh ref={mesh} geometry={new THREE.TorusGeometry(10, 3, 16, 100)}>
      <meshStandardMaterial color={0xFF6347} />
    </mesh>
  );
}

export default Torus