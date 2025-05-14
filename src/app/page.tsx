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
          transition={{ 
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] // Custom easing for smoother motion
          }}
          className="relative"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-2 tracking-tight break-words leading-[1.15] overflow-visible text-transparent bg-clip-text bg-gradient-to-r from-[#e5e7eb] via-white to-[#a3a3a3]"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 30px rgba(255,255,255,0.15)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {["k", "i", "v", "o", ".", "g", "g"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 0.8,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.8, 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <p className="text-xl md:text-2xl text-white/80 mb-4">
            is under construction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2, 
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <p className="text-lg text-white/60">
            stay tuned for more
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-white/80 rounded-full"
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: [0.4, 0, 0.6, 1]
              }}
            />
          ))}
        </motion.div>
      </div>
    </BeamsBackground>
  );
}
