import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import * as THREE from "three";

// === Cube Cluster Component ===
function CubeCluster() {
  const group = useRef();
  const meshRefs = useRef([]);
  const [draggedMesh, setDraggedMesh] = useState(null);
  const velocities = useRef(new Map());
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useMemo(() => new THREE.Vector2(), []);
  const dragPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
  const dragPoint = useMemo(() => new THREE.Vector3(), []);

  // Generate random cube positions
  const cubes = useMemo(() => {
    const temp = [];
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          if (Math.random() > 0.7) continue;
          temp.push([x * 1.2, y * 1.2, z * 1.2]);
        }
      }
    }
    return temp;
  }, []);

  // Slow rotation animation with physics
  useFrame(({ camera, gl }) => {
    if (group.current && !draggedMesh) {
      group.current.rotation.x += 0.0015;
      group.current.rotation.y += 0.002;
    }

    // Update dragged cube position and apply repulsion
    if (draggedMesh) {
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(dragPlane, dragPoint);
      draggedMesh.position.copy(dragPoint);

      // Repulsion effect: push other cubes away with more force
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh !== draggedMesh) {
          const direction = new THREE.Vector3()
            .subVectors(mesh.position, draggedMesh.position)
            .normalize();
          const distance = draggedMesh.position.distanceTo(mesh.position);
          const repulsionRadius = 5; // Increased radius

          if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * 0.8; // Much stronger force
            
            if (!velocities.current.has(mesh.uuid)) {
              velocities.current.set(mesh.uuid, new THREE.Vector3());
            }
            
            const vel = velocities.current.get(mesh.uuid);
            vel.addScaledVector(direction, force);
            mesh.position.addScaledVector(vel, 1.2); // Faster movement
            vel.multiplyScalar(0.85); // Less damping for more spread
          }
        }
      });
    }
  });

  const handlePointerDown = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, e.camera);
    const intersects = raycaster.intersectObjects(meshRefs.current);

    if (intersects.length > 0) {
      const mesh = intersects[0].object;
      setDraggedMesh(mesh);
      dragPlane.setFromNormalAndCoplanarPoint(
        e.camera.getWorldDirection(new THREE.Vector3()),
        mesh.position
      );
    }
  };

  const handlePointerMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  const handlePointerUp = () => {
    setDraggedMesh(null);
  };

  return (
    <group
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {cubes.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
        >
          <boxGeometry args={[1, 1, 1]} />
          <MeshTransmissionMaterial
            color="#007bff"
            thickness={1.2}
            roughness={0.2}
            transmission={0.9}
            ior={1.2}
            clearcoat={1}
            metalness={0.1}
            chromaticAberration={0.02}
          />
        </mesh>
      ))}
    </group>
  );
}

// === Main Scene ===
export default function Video() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "linear-gradient(to bottom right, #eaf3ff, #c7e0ff)" }}>
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 5, 10]} fov={60} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 7]} intensity={0.6} />
        <CubeCluster />
        <OrbitControls enableDamping dampingFactor={0.05} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}