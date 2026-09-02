"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 20, y: 30, w: 150, h: 46, label: "ISP Partner" },
  { x: 20, y: 100, w: 150, h: 46, label: "FTTH Open Access" },
  { x: 20, y: 170, w: 150, h: 46, label: "Corporate Client" },
  { x: 20, y: 240, w: 150, h: 46, label: "Government Client" },
  { x: 20, y: 310, w: 150, h: 46, label: "Office Building Area" },
];

const connections = [
  "M170,53 L240,120",
  "M170,123 L240,145",
  "M170,193 L260,280",
  "M170,263 L260,300",
  "M170,333 L260,310",
  "M420,160 L470,205",
  "M400,290 L470,240",
  "M470,153 L410,150",
  "M590,235 L670,235",
];

export default function NetworkDiagram() {
  return (
    <div className="mt-12 border border-line bg-white p-5">
      <svg viewBox="0 0 1000 460" className="w-full h-auto block">
        <defs>
          <marker
            id="arrow"
            markerWidth={8}
            markerHeight={8}
            refX={6}
            refY={3}
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="#8890c2" />
          </marker>
        </defs>

        <g fontFamily="IBM Plex Mono" fontSize={11} fill="#33364f">
          {nodes.map((n) => (
            <g key={n.label}>
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                fill="#fff"
                stroke="#c7cbe0"
              />
              <text
                x={n.x + n.w / 2}
                y={n.y + n.h / 2 + 4}
                textAnchor="middle"
              >
                {n.label}
              </text>
            </g>
          ))}

          <circle cx={330} cy={160} r={90} fill="none" stroke="#5B3B9E" strokeWidth={1.4} />
          <text x={330} y={158} textAnchor="middle" fontSize={10.5} fill="#5B3B9E">
            MULTI OPERATOR
          </text>
          <text x={330} y={172} textAnchor="middle" fontSize={10.5} fill="#5B3B9E">
            METRO ETHERNET 100G
          </text>

          <circle cx={330} cy={290} r={70} fill="none" stroke="#2F79D6" strokeWidth={1.4} />
          <text x={330} y={285} textAnchor="middle" fontSize={10.5} fill="#2F79D6">
            DWDM NETWORK
          </text>
          <text x={330} y={298} textAnchor="middle" fontSize={10.5} fill="#2F79D6">
            100G
          </text>

          <rect x={470} y={215} width={120} height={40} fill="#0B0E23" />
          <text x={530} y={240} textAnchor="middle" fill="#fff" fontSize={10.5}>
            EXATEL NODE
          </text>

          <rect x={470} y={130} width={120} height={46} fill="#fff" stroke="#c7cbe0" />
          <text x={530} y={150} textAnchor="middle">Exatel Data</text>
          <text x={530} y={163} textAnchor="middle">Center</text>

          <ellipse cx={800} cy={235} rx={130} ry={60} fill="#0B0E23" />
          <text x={800} y={230} textAnchor="middle" fill="#fff" fontSize={13} fontFamily="var(--font-space-grotesk)">
            INTERNET
          </text>
          <text x={800} y={248} textAnchor="middle" fill="#26C7D9" fontSize={13} fontFamily="var(--font-space-grotesk)">
            GLOBAL
          </text>

          <g stroke="#8890c2" strokeWidth={1.2} fill="none" markerEnd="url(#arrow)">
            {connections.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: "easeInOut" }}
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
