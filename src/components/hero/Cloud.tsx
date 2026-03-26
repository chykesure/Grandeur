// src/components/hero/Cloud.tsx
'use client';

import { motion } from 'framer-motion';

type CloudProps = {
  top: string;
  duration: number;
  delay: number;
  scale: number;
  opacity?: number;
};

export default function Cloud({ top, duration, delay, scale, opacity = 0.65 }: CloudProps) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        top,
        left: '-600px',
        zIndex: 1,
        width: '1200px',
        height: '400px',
      }}
      initial={{ x: '-600px', opacity: 0 }}
      animate={{
        x: '140vw',
        opacity: opacity,
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
        delay,
      }}
    >
      {/* Optional: soft white cloud overlay or leave empty if you just want subtle movement */}
      <div
        className="w-full h-full bg-white/10 rounded-full blur-xl"
        style={{ transform: `scale(${scale})` }}
      />
    </motion.div>
  );
}