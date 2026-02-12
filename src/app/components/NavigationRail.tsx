import React from 'react';
import { 
  Compass, 
  MessageCircle, 
  Plus, 
  Image as ImageIcon,
  User,
  Settings,
  LogOut,
  Home
} from 'lucide-react';

export const NavigationRail: React.FC = () => {
  const navItems = [
    { icon: Compass, label: 'Explore' },
    { icon: MessageCircle, label: 'Chats', active: true },
    { icon: ImageIcon, label: 'Gallery' },
  ];

  return (
    <div className="flex flex-col items-center py-4 bg-[#050505] border-r border-gray-800/50 w-[72px] h-full shrink-0 z-20">
      
      {/* Main Nav */}
      <div className="flex-1 flex flex-col items-center gap-6 w-full pt-4">
        {navItems.map((item, index) => (
          <button 
            key={index}
            className={`relative group p-3 rounded-xl transition-all duration-200 ${
              item.active 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <item.icon size={24} strokeWidth={item.active ? 2.5 : 2} />
            
            {/* Tooltip (Simple) */}
            <div className="absolute left-full ml-4 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
              {item.label}
            </div>

            {/* Active Indicator */}
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-r-full" />
            )}
          </button>
        ))}

        {/* Create Button */}
        <button className="mt-4 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-orange-500/20">
          <Plus size={24} strokeWidth={3} />
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col items-center gap-6 mb-4">
        <button className="text-gray-400 hover:text-white transition-colors">
          <User size={24} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
};
