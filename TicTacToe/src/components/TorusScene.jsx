import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';
import * as THREE from 'three';
import Star from './Star'
import Torus from './Torus';

function TorusScene() {
    return (
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={2} />
        <pointLight position={[10, 0, 10]} intensity={25} />
        <OrbitControls />
        <Torus />
        {Array.from({ length: 200 }).map((_, i) => (
          <Star key={i} />
        ))}
      </Canvas>
    );
  }

  export default TorusScene;