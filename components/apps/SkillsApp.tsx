
import React, { useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Stars, Float } from '@react-three/drei';
import { SKILLS_LIST } from '../../constants';
import * as THREE from 'three';

// Fix for React Three Fiber intrinsic elements that are not recognized by the compiler
// We define these as uppercase constants to bypass JSX intrinsic element type checking
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const SphereGeometry = 'sphereGeometry' as any;
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const Fog = 'fog' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

interface WordProps {
  text: string;
  position: [number, number, number];
}

const Word: React.FC<WordProps> = ({ text, position }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Html
        position={position}
        center
        distanceFactor={15}
        className="pointer-events-none"
      >
        <div className="group cursor-default select-none whitespace-nowrap">
          <div className="bg-blue-500/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-300 font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all hover:bg-blue-500/30 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
            {text}
          </div>
        </div>
      </Html>
    </Float>
  );
};

const Cloud = ({ radius = 22 }) => {
  const words = useMemo(() => {
    const temp: { pos: [number, number, number]; word: string }[] = [];
    const count = SKILLS_LIST.length;
    
    for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        const pos = new THREE.Vector3();
        pos.setFromSphericalCoords(radius, phi, theta);
        temp.push({ 
          pos: [pos.x, pos.y, pos.z] as [number, number, number], 
          word: SKILLS_LIST[i] 
        });
    }
    return temp;
  }, [radius]);

  return (
    <Group>
      {words.map(({ pos, word }, index) => (
        <Word key={index} position={pos} text={word} />
      ))}
      <Mesh>
        <SphereGeometry args={[2, 32, 32]} />
        <MeshStandardMaterial 
          color="#3b82f6" 
          emissive="#3b82f6" 
          emissiveIntensity={2} 
          transparent 
          opacity={0.3} 
        />
      </Mesh>
    </Group>
  );
};

export const SkillsApp: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#020617] relative">
      <div className="absolute top-6 left-6 z-10 bg-white/5 p-5 rounded-2xl backdrop-blur-xl text-white max-w-xs pointer-events-none border border-white/10 shadow-2xl">
        <h2 className="font-black text-xl text-blue-400 uppercase tracking-tighter">Skill Universe</h2>
        <p className="text-xs text-blue-200/60 mt-1">Interactive 3D field of expertise. Drag to rotate, scroll to zoom.</p>
        <div className="flex gap-2 mt-4">
           <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
           <span className="text-[10px] text-gray-400 font-medium">Neural Engine Active</span>
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <Suspense fallback={null}>
            <Fog attach="fog" args={['#020617', 30, 90]} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <AmbientLight intensity={0.5} />
            <PointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
            <Cloud radius={22} />
            <OrbitControls 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5} 
              minDistance={15} 
              maxDistance={70} 
            />
        </Suspense>
      </Canvas>
    </div>
  );
};
