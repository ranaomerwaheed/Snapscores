import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export const ActivityFeed = ({ lang }: { lang: 'en' | 'ar' }) => {
  const [logs, setLogs] = useState([
    { time: '20:19:42', msg: 'Session established for user_829...', status: 'SUCCESS' },
    { time: '20:19:38', msg: 'Batch snap delivery (50) completed.', status: 'SUCCESS' },
    { time: '20:19:35', msg: 'Streak Guardian active for 12 accounts.', status: 'ACTIVE' },
    { time: '20:19:30', msg: 'Story engagement cycle initiated.', status: 'PENDING' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        msg: `Automation task ${Math.floor(Math.random() * 1000)} initiated...`,
        status: Math.random() > 0.3 ? 'SUCCESS' : 'PENDING'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 3)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8 rounded-[2.5rem] glass border-white/10 relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
          <Activity className="w-5 h-5 text-snap-yellow animate-pulse" />
          {lang === 'ar' ? 'تغذية الأتمتة المباشرة' : 'Live Automation Feed'}
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
          <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Live</span>
        </div>
      </div>
      <div className="space-y-4 font-mono text-xs">
        <AnimatePresence initial={false}>
          {logs.map((log, i) => (
            <motion.div 
              key={log.time + i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5"
            >
              <span className="text-gray-500">[{log.time}]</span>
              <span className="text-gray-300 flex-1">{log.msg}</span>
              <span className={`font-bold ${log.status === 'SUCCESS' ? 'text-green-400' : log.status === 'ACTIVE' ? 'text-blue-400' : 'text-snap-yellow'}`}>{log.status}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
