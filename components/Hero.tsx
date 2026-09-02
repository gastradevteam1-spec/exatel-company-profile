"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";

const fiberPaths = [
  "M -50 480 C 250 380, 450 460, 700 300 S 1100 120, 1300 60",
  "M -50 520 C 300 440, 500 500, 780 360 S 1150 180, 1300 120",
  "M -50 420 C 220 300, 470 380, 650 220 S 1050 40, 1300 -20",
  "M -50 560 C 350 500, 560 540, 850 420 S 1200 240, 1350 180",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper pt-24 pb-20">
      <svg
        className="absolute inset-0 z-10 opacity-60"
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2F79D6" />
            <stop offset="55%" stopColor="#5B3B9E" />
            <stop offset="100%" stopColor="#D8207C" />
          </linearGradient>
        </defs>
        <g stroke="url(#heroGradient)" strokeWidth={1} fill="none">
          {fiberPaths.map((d, i) => (
            <motion.path
              key={d}
              d={d}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{
                duration: 2.2,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>
        <motion.g
          fill="#26C7D9"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <circle cx={700} cy={300} r={3} />
          <circle cx={650} cy={220} r={3} />
          <circle cx={850} cy={420} r={3} />
        </motion.g>
      </svg>

      <div className="section-wrap relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2.5 font-mono text-xs text-[#a9b0e0] mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.4rem,5.4vw,4.1rem)] leading-[1.04] max-w-3xl text-white"
        >
          Connecting{" "}
          <span className="grad-text">{hero.gradientWord}</span> across
          Indonesia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-[1.06rem] text-[#c4c8ea]"
        >
          {hero.sub}
        </motion.p>
      </div>
    </section>
  );
}
