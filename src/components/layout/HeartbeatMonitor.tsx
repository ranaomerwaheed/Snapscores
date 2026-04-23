import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export const HeartbeatMonitor = () => {
  const [points, setPoints] = useState<number[]>([60,62,58,65,63,70,68,72,69,75,71,74,68,73,70,77,74,79,76,80]);
  const [uptime] = useState('99.98%');
  const [tunnels, setTunnels] = useState(4135);

  useEffect(() => {
    const t = setInterval(() => {
      setPoints(prev => {
        const next = [...prev.slice(1), 55 + Math.random() * 35];
        return next;
      });
      setTunnels(t => t + Math.floor(Math.random() * 5 - 2));
    }, 800);
    return () => clearInterval(t);
  }, []);

  const maxPt = Math.max(...points);
  const minPt = Math.min(...points);
  const range = maxPt - minPt || 1;
  const H = 48, W = 280;
  const pts = points.map((p, i) => `${(i / (points.length - 1)) * W},${H - ((p - minPt) / range) * (H - 8)}`).join(' ');

  return (
    <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left — Engine info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-snap-yellow flex items-center justify-center shadow-[0_0_20px_rgba(255,252,0,0.3)]">
          <Zap className="w-8 h-8 text-black fill-current" />
        </div>
        <div>
          <div className="text-white font-black text-lg tracking-tighter">Snapify-Core v6.1</div>
          <div className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Distributed Processing Engine</div>
        </div>
      </div>

      {/* Center — Heartbeat SVG */}
      <div className="flex flex-col items-center gap-2">
        <div className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-black">System Heartbeat</div>
        <svg width={W} height={H} className="overflow-visible">
          <defs>
            <linearGradient id="hbGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#facc15" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#facc15" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polyline
            points={`0,${H} ${pts} ${W},${H}`}
            fill="url(#hbGrad)" stroke="none"
          />
          <motion.polyline
            points={pts}
            fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ filter: 'drop-shadow(0 0 8px rgba(255,252,0,0.6))' }}
          />
        </svg>
      </div>

      {/* Right — Stats */}
      <div className="flex gap-12">
        {[
          { label: 'Uptime', value: uptime, color: 'text-green-400' },
          { label: 'Active Tunnels', value: tunnels.toLocaleString(), color: 'text-white' },
          { label: 'Response', value: '< 1ms', color: 'text-purple-400' },
        ].map((s, i) => (
          <div key={i} className="text-right">
            <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-[9px] text-gray-600 uppercase tracking-widest font-black">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
