'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BeamsBackground from '@/components/BeamsBackground';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <BeamsBackground intensity="medium">
      <div className="text-center px-4 max-w-2xl w-full flex flex-col items-center gap-4 py-24 md:py-48 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-2 tracking-tight break-words leading-[1.15] overflow-visible text-transparent bg-clip-text bg-gradient-to-r from-[#e5e7eb] via-white to-[#a3a3a3]"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {["k", "i", "v", "o", ".", "g", "g"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-white/80 mb-4">
            is under construction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-lg text-white/60">
            stay tuned for more
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </BeamsBackground>
  );
}
