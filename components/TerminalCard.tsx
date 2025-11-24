import React from 'react';

interface TerminalCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  glowing?: boolean;
}

const TerminalCard: React.FC<TerminalCardProps> = ({ 
  children, 
  title = "bash", 
  className = "",
  glowing = false
}) => {
  return (
    <div className={`
      relative bg-cyber-dark border border-cyber-dim rounded-lg overflow-hidden
      transition-all duration-300 group
      ${glowing ? 'border-cyber-neon shadow-[0_0_15px_rgba(57,255,20,0.15)]' : 'hover:border-cyber-neon hover:shadow-[0_0_10px_rgba(57,255,20,0.2)]'}
      ${className}
    `}>
      {/* Terminal Header */}
      <div className="bg-cyber-dim/30 border-b border-cyber-dim px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono select-none">
          {title}
        </div>
        <div className="w-8"></div> {/* Spacer for centering */}
      </div>

      {/* Terminal Body */}
      <div className="p-6 text-gray-300 font-mono text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default TerminalCard;