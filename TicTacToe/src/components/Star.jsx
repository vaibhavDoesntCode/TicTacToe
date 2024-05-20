import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';



function Star() {
    const starRef = useRef();
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(100));
  
    return (
      <mesh ref={starRef} position={[x, y, z]} geometry={new THREE.SphereGeometry(0.25, 24, 24)}>
        <meshStandardMaterial color={0xffffff} />
      </mesh>
    );
  }
  
  export default Star