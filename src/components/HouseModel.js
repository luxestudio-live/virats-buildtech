import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, ContactShadows, Html } from "@react-three/drei";

export default function HouseModel() {
  const drag = useRef({ isDragging: false, x: 0, startX: 0 });

  // Mouse/touch handlers for drag-to-rotate
  const handlePointerDown = (e) => {
    drag.current.isDragging = true;
    drag.current.startX = e.clientX;
    document.body.style.cursor = 'grabbing';
  };
  const handlePointerUp = () => {
    drag.current.isDragging = false;
    document.body.style.cursor = '';
  };
  // Only allow horizontal dragging
  const handlePointerMove = (e) => {
    if (drag.current.isDragging) {
      const dx = (e.clientX - drag.current.startX) / 200;
      drag.current.x += dx;
      drag.current.startX = e.clientX;
    }
  };

  return (
    <div
      style={{
        cursor: drag.current.isDragging ? 'grabbing' : 'grab',
        width: "100%",
        height: "100%",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <Canvas
        camera={{ position: [4, 2.5, 6], fov: 32 }}
        shadows
        gl={{ alpha: true, preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<Html center><div style={{color:'white',fontSize:24}}>Loading 3D Model...</div></Html>}>
          <CameraController />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <directionalLight position={[-5, 4, -5]} intensity={0.4} />
          <House drag={drag} />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.35} scale={10} blur={2.5} far={2.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}



function House({ drag }) {
  const group = useRef();
  const { scene } = useGLTF("/house.glb");
  // Move left, above, and make bigger
  const xPos = -1.5; // More left
  const yPos = 0.5;  // Higher
  const scale = 6.2; // Slightly bigger

  useEffect(() => {
    if (group.current) {
      group.current.rotation.set(-Math.PI / 2, 0, 0); // Front faces up
      group.current.position.set(xPos, yPos, 0);
    }
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.position.x = xPos;
      group.current.position.y = yPos;
      group.current.position.z = 0;
      group.current.rotation.x = -Math.PI / 2;
      if (drag.current.isDragging) {
        group.current.rotation.y = drag.current.x * 0.8;
      }
    }
  });

  return <primitive ref={group} object={scene} scale={scale} />;
}

// Preload the GLB
useGLTF.preload("/house.glb");

// CameraController to set lookAt
function CameraController() {
  const { camera } = useThree();
  useEffect(() => {
    camera.lookAt(0, 1, 0);
  }, [camera]);
  return null;
}
