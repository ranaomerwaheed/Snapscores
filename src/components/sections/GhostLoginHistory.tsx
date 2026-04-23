import React from 'react';
import { motion } from 'motion/react';
import { Shield, Clock, Globe, Smartphone, CheckCircle2, AlertCircle } from 'lucide-react';

interface Session {
  id: string;
  time: string;
  location: string;
  device: string;
  ip: string;
  status: 'secure' | 'warning' | 'blocked';
}

export const GhostLoginHistory = ({ isDark, lang }: { isDark: boolean; lang: string }) => {
  const sessions: Session[] = [
    { id: 'SESS-9821', time: '2 mins ago', location: 'Riyadh, SA', device: 'iPhone 15 Pro', ip: '94.23.12.***', status: 'secure' },
    { id: 'SESS-9815', time: '14 mins ago', location: 'Dubai, UAE', device: 'Samsung S24 Ultra', ip: '188.42.10.***', status: 'secure' },
    { id: 'SESS-9799', time: '1 hour ago', location: 'London, UK', device: 'Google Pixel 8', ip: '82.161.44.***', status: 'secure' },
    { id: 'SESS-9742', time: '3 hours ago', location: 'New York, US', device: 'iPhone 14', ip: '104.28.19.***', status: 'secure' },
  ];

  const t = ({
    en: {
      title: "Ghost Login History",
      subtitle: "Recent secure sessions and device spoofing logs",
      id: "Session ID",
      time: "Time",
      location: "Location",
      device: "Device",
      ip: "IP Address",
      status: "Status",
      secure: "Secure",
      warning: "Warning",
      blocked: "Blocked"
    },
    ar: {
      title: "سجل تسجيل الدخول الشبح",
      subtitle: "الجلسات الآمنة الأخيرة وسجلات انتحال الجهاز",
      id: "معرف الجلسة",
      time: "الوقت",
      location: "الموقع",
      device: "الجهاز",
      ip: "عنوان IP",
      status: "الحالة",
      secure: "آمن",
      warning: "تحذير",
      blocked: "محظور"
    }
  }[lang as 'en' | 'ar']) || {
    title: "Ghost Login History",
    subtitle: "Recent secure sessions and device spoofing logs",
    id: "Session ID",
    time: "Time",
    location: "Location",
    device: "Device",
    ip: "IP Address",
    status: "Status",
    secure: "Secure",
    warning: "Warning",
    blocked: "Blocked"
  };

  return (
    <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-2xl bg-snap-yellow/20 flex items-center justify-center text-snap-yellow">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tight">{t.title}</h3>
          <p className="text-gray-400 text-sm">{t.subtitle}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-4 px-4 text-xs font-black text-gray-500 uppercase tracking-widest">{t.id}</th>
              <th className="py-4 px-4 text-xs font-black text-gray-500 uppercase tracking-widest">{t.time}</th>
              <th className="py-4 px-4 text-xs font-black text-gray-500 uppercase tracking-widest">{t.location}</th>
              <th className="py-4 px-4 text-xs font-black text-gray-500 uppercase tracking-widest">{t.device}</th>
              <th className="py-4 px-4 text-xs font-black text-gray-500 uppercase tracking-widest">{t.status}</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((s, i) => (
              <motion.tr 
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <td className="py-4 px-4 font-mono text-xs text-snap-yellow">{s.id}</td>
                <td className="py-4 px-4 text-sm text-gray-400 flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {s.time}
                </td>
                <td className="py-4 px-4 text-sm text-gray-300 flex items-center gap-2">
                  <Globe className="w-3 h-3 text-blue-400" />
                  {s.location}
                </td>
                <td className="py-4 px-4 text-sm text-gray-300 flex items-center gap-2">
                  <Smartphone className="w-3 h-3 text-purple-400" />
                  {s.device}
                </td>
                <td className="py-4 px-4">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    s.status === 'secure' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                    s.status === 'warning' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {s.status === 'secure' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                    {t[s.status]}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
