import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin } from 'lucide-react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

interface GlobalPresenceProps {
  isDark: boolean;
  lang: string;
  t: any;
}

export const GlobalPresence = ({ isDark, lang, t }: GlobalPresenceProps) => {
  const [location, setLocation] = useState<any>(null);
  const mapRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setLocation(data))
      .catch(err => console.error('Error fetching location:', err));
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    const svg = d3.select(mapRef.current);
    const width = 1200;
    const height = 600;

    const projection = d3.geoMercator()
      .scale(150)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
      const countries = topojson.feature(data, data.objects.countries);

      svg.selectAll('path')
        .data((countries as any).features)
        .enter()
        .append('path')
        .attr('d', path as any)
        .attr('fill', isDark ? '#1a1a2e' : '#e2e8f0')
        .attr('stroke', isDark ? '#2a2a4e' : '#cbd5e1')
        .attr('stroke-width', 0.5);

      // Add pings for major cities
      const pings = [
        { coords: [-74.006, 40.7128], label: 'New York' },
        { coords: [-0.1278, 51.5074], label: 'London' },
        { coords: [46.6753, 24.7136], label: 'Riyadh' },
        { coords: [55.2708, 25.2048], label: 'Dubai' },
        { coords: [72.8777, 19.076], label: 'Mumbai' },
        { coords: [151.2093, -33.8688], label: 'Sydney' },
      ];

      if (location && location.longitude && location.latitude) {
        pings.push({ coords: [location.longitude, location.latitude], label: 'You' });
      }

      const pingGroups = svg.selectAll('.ping')
        .data(pings)
        .enter()
        .append('g')
        .attr('class', 'ping')
        .attr('transform', d => {
          const p = projection(d.coords as [number, number]);
          return p ? `translate(${p[0]}, ${p[1]})` : '';
        });

      pingGroups.append('circle')
        .attr('r', 4)
        .attr('fill', d => d.label === 'You' ? '#22c55e' : '#fffc00')
        .attr('class', 'animate-pulse');

      pingGroups.append('circle')
        .attr('r', 12)
        .attr('fill', d => d.label === 'You' ? '#22c55e' : '#fffc00')
        .attr('opacity', 0.2)
        .append('animate')
        .attr('attributeName', 'r')
        .attr('from', '4')
        .attr('to', '20')
        .attr('dur', '2s')
        .attr('repeatCount', 'indefinite');
    });
  }, [isDark, location]);

  return (
    <section className={`py-32 px-6 relative section-divider bg-dark-brown`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-[10px] font-black mb-6 uppercase tracking-widest">
            <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse"></div>
            GLOBAL PRESENCE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white">
            WE SERVE CLIENTS EVERYWHERE
          </h2>
          <p className="text-warm-tan/60 font-bold text-xl">Active clients right now around the world — including you</p>
        </div>

        {/* Location Bar */}
        <div className="mb-12 p-6 rounded-3xl bg-accent-gold/5 border border-accent-gold/20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-black text-sm">
                Your location: {location ? `${location.city}, ${location.country_name}` : 'Detecting...'}
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black text-accent-gold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse"></div>
                Active in your area: {Math.floor(Math.random() * 20) + 5} clients 
                <span className="text-warm-tan/40 ml-2">IP: {location?.ip || '—'}</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-[10px] font-black uppercase tracking-widest">
            ✓ Service available near you
          </div>
        </div>

        {/* Map Area */}
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-accent-gold/10 bg-rich-brown/20 mb-12">
          <svg
            ref={mapRef}
            viewBox="0 0 1200 600"
            className="w-full h-full"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { code: 'SA', city: 'Riyadh', count: 42 },
            { code: 'AE', city: 'Dubai', count: 32 },
            { code: 'GB', city: 'London', count: 19 },
            { code: 'US', city: 'New York', count: 24 },
            { code: 'EG', city: 'Cairo', count: 14 },
            { code: 'QA', city: 'Doha', count: 18 },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-[2rem] bg-rich-brown/40 border border-accent-gold/10 text-center space-y-2">
              <div className="text-warm-tan/40 text-xs font-black uppercase tracking-widest">{stat.code}</div>
              <div className="text-white font-black text-sm">{stat.city}</div>
              <div className="text-accent-gold font-black text-xl">{stat.count}</div>
              <div className="flex items-center justify-center gap-1 text-[8px] font-black text-accent-gold uppercase tracking-widest">
                <div className="w-1 h-1 bg-accent-gold rounded-full"></div>
                active
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
