import React, { useState, useEffect } from 'react';

export const SystemConsole = () => {
  const [logs, setLogs] = useState<string[]>([]);
  
  const logMessages = [
    "Requesting Session Key... [GRANTED]",
    "Bypassing Snap-Auth v4... [SUCCESS]",
    "Score Injection Started... [+25,000]",
    "Establishing Secure Tunnel... [OK]",
    "Spoofing Device ID: iPhone 15 Pro... [DONE]",
    "Rotating IP via Residential Proxy... [SUCCESS]",
    "Syncing with Snap-Cloud... [PENDING]",
    "Injection Complete. Verifying Score... [VERIFIED]",
    "Cleaning Session Logs... [CLEAN]",
    "Session Terminated. Sandbox Burned... [OK]"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, logMessages[i % logMessages.length]].slice(-8));
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-green-500/30 rounded-xl p-4 font-mono text-[10px] h-48 overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)]">
      <div className="flex items-center gap-2 mb-3 border-b border-green-500/20 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-green-500/50 ml-2 uppercase tracking-widest">System Console v6.1</span>
      </div>
      <div className="space-y-1">
        {logs.map((log, idx) => (
          <div key={idx} className="text-green-400 flex gap-2">
            <span className="text-green-900">[{new Date().toLocaleTimeString()}]</span>
            <span className="animate-pulse">{log}</span>
          </div>
        ))}
        <div className="text-green-400 animate-pulse">_</div>
      </div>
    </div>
  );
};
