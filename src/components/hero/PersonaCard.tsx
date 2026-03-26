// src/components/hero/PersonaCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PersonaCardProps {
  image: string;
  label: string;
}

export default function PersonaCard({ image, label }: PersonaCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 w-56"
    >
      {/* Image */}
      <div className="relative aspect-[4/9] w-full">
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, 30vw"
        />
      </div>

      {/* Blue Label Button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-4">
        <div className="bg-[#0088FF] hover:bg-[#0070D9] text-white text-sm font-medium py-2.5 rounded-full shadow-lg transition-colors text-center w-full">
          {label}
        </div>
      </div>
    </motion.div>
  );
}