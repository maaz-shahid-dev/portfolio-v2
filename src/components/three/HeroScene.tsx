import { Float, Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

function Core() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.25;
    mesh.current.rotation.y += delta * 0.35;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          emissive="#312e81"
          emissiveIntensity={0.45}
          metalness={0.85}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.15}
        />
      </mesh>
      <mesh scale={1.45}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function OrbitingRings() {
  const group = useRef<Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.18;
  });
  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.2, 0.2, 0]}>
        <torusGeometry args={[2.15, 0.03, 16, 140]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.7} />
      </mesh>
      <mesh rotation={[Math.PI / 1.7, 0.7, 0.4]}>
        <torusGeometry args={[2.55, 0.025, 16, 140]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.55} />
      </mesh>
      <mesh rotation={[Math.PI / 3, -0.4, 0.8]}>
        <torusGeometry args={[1.8, 0.02, 16, 120]} />
        <meshStandardMaterial color="#a78bfa" emissive="#8b5cf6" emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}

function OrbitNodes({ reduced }: { reduced: boolean }) {
  const ref = useRef<Group>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.1 + (i % 2) * 0.35;
        return { x: Math.cos(angle) * radius, y: Math.sin(angle * 1.3) * 0.6, z: Math.sin(angle) * radius };
      }),
    [],
  );
  useFrame((state) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.22;
  });
  return (
    <group ref={ref}>
      {nodes.map((n, i) => (
        <mesh key={i} position={[n.x, n.y, n.z]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}
            emissive={i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene({ reducedMotion }: { reducedMotion: boolean }) {
  const rig = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!rig.current) return;
    if (reducedMotion) {
      rig.current.rotation.y += delta * 0.05;
      return;
    }
    const tx = state.pointer.y * 0.25;
    const ty = state.pointer.x * 0.35;
    rig.current.rotation.x += (tx - rig.current.rotation.x) * 0.05;
    rig.current.rotation.y += (ty - rig.current.rotation.y) * 0.05;
  });

  return (
    <>
      <color attach="background" args={["#070b17"]} />
      <fog attach="fog" args={["#070b17", 7, 14]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-4, -2, 3]} intensity={18} color="#8b5cf6" />
      <pointLight position={[4, 2, -2]} intensity={14} color="#22d3ee" />
      <pointLight position={[0, 3, 2]} intensity={8} color="#6366f1" />
      <group ref={rig}>
        <Core />
        <OrbitingRings />
        <OrbitNodes reduced={reducedMotion} />
      </group>
      <Sparkles
        count={reducedMotion ? 20 : 60}
        scale={[8, 5, 6]}
        size={1.6}
        speed={reducedMotion ? 0 : 0.22}
        opacity={0.42}
        color="#a5f3fc"
      />
    </>
  );
}
