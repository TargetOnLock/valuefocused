"use client";

import { useMemo } from 'react';

interface TokenomicsData {
  name: string;
  value: number;
  color: string;
}

const data: TokenomicsData[] = [
  { name: 'LP Tokens + $25,000 (Solana)', value: 5, color: '#8B5CF6' },
  { name: 'Rewards (Staking, Bridge, Farming, Holder)', value: 10, color: '#6366F1' },
  { name: 'CEX', value: 8, color: '#06B6D4' },
  { name: 'Marketing', value: 10, color: '#14B8A6' },
  { name: 'Initial Burn', value: 10, color: '#10B981' },
  { name: 'Held Back/Alt pairing/bridge/mm/future LP & More', value: 34, color: '#34D399' },
  { name: 'Presale (Airdrops)', value: 23, color: '#FB923C' },
];

export default function TokenomicsChart() {
  const segments = useMemo(() => {
    let currentAngle = 0;
    const total = data.reduce((acc, item) => acc + item.value, 0);
    
    return data.map(item => {
      const angle = (item.value / total) * 360;
      const startAngle = currentAngle;
      currentAngle += angle;
      
      return {
        ...item,
        startAngle,
        angle
      };
    });
  }, []);

  const generatePieSlice = (startAngle: number, angle: number, color: string, size: number) => {
    const radius = size / 2.5; // Adjust radius based on container size
    const centerX = size / 2;
    const centerY = size / 2;
    
    // Convert angles to radians
    const startRad = (startAngle - 90) * Math.PI / 180;
    const endRad = (startAngle + angle - 90) * Math.PI / 180;
    
    // Calculate points
    const x1 = centerX + radius * Math.cos(startRad);
    const y1 = centerY + radius * Math.sin(startRad);
    const x2 = centerX + radius * Math.cos(endRad);
    const y2 = centerY + radius * Math.sin(endRad);
    
    // Generate arc flag
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    // Create SVG path
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-8 border border-white/20 hover:border-purple-500/50 transition-all">
      <h2 className="text-2xl font-semibold mb-6">Supply Distribution</h2>
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8">
        {/* Responsive container for the pie chart */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 500"
            className="w-full h-full"
          >
            {segments.map((segment, index) => (
              <path
                key={index}
                d={generatePieSlice(segment.startAngle, segment.angle, segment.color, 500)}
                fill={segment.color}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                className="transition-all hover:opacity-80"
              >
                <title>{`${segment.name}: ${segment.value}%`}</title>
              </path>
            ))}
          </svg>
        </div>
        
        {/* Legend */}
        <div className="flex flex-col gap-2 w-full lg:w-auto">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-sm" 
                style={{ backgroundColor: segment.color }}
              />
              <span className="text-sm">
                {segment.name} ({segment.value}%)
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-300">
        <p className="mb-2">Total Supply: 100M tokens</p>
        <p className="mb-2">* LP includes $25,000 (Solana)</p>
        <p className="mb-2">* Burned tokens on Solana are completely removed from circulation</p>
        <p>* Unused reward tokens may be burned or used to top up rewards as the token grows</p>
      </div>
    </div>
  );
} 