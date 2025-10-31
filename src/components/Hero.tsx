import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Suspense } from 'react';

const Building = () => {
  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      {/* Main tower */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 8, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9} 
          roughness={0.1} 
          transparent 
          opacity={0.6}
        />
      </mesh>
      
      {/* Glass panels */}
      <mesh position={[0, 2, 1.01]} castShadow>
        <boxGeometry args={[1.8, 7.8, 0.02]} />
        <meshStandardMaterial 
          color="#88ccff" 
          metalness={0.95} 
          roughness={0.05} 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      <mesh position={[0, 2, -1.01]} castShadow>
        <boxGeometry args={[1.8, 7.8, 0.02]} />
        <meshStandardMaterial 
          color="#88ccff" 
          metalness={0.95} 
          roughness={0.05} 
          transparent 
          opacity={0.3}
        />
      </mesh>
      
      {/* Side building */}
      <mesh position={[3, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 6, 1.5]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
      
      {/* Base platform */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Accent elements */}
      <mesh position={[0, 6.5, 0]}>
        <boxGeometry args={[2.2, 0.3, 2.2]} />
        <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-background via-background to-secondary">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas shadows>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[8, 5, 8]} />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            <pointLight position={[-10, 5, -10]} intensity={0.5} color="#d4af37" />
            <Environment preset="city" />
            <Building />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="mb-4 text-6xl font-bold tracking-tight text-foreground md:text-8xl">
            ARCHIVISION
          </h1>
          <p className="text-xl font-light text-muted-foreground md:text-2xl">
            Designing Tomorrow's Spaces Today
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-sm font-light text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
