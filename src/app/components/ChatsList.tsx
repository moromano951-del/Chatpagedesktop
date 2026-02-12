import React from 'react';
import { Search, MoreHorizontal, Pin } from 'lucide-react';

// Images from Unsplash
const AVATAR_1 = "https://images.unsplash.com/photo-1760264550811-91b2b668cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYmxvbmRlJTIwcG9ueXRhaWwlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzM2MDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_2 = "https://images.unsplash.com/photo-1757347398206-7425300ef990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYnJ1bmV0dGUlMjBzbWlsZXxlbnwxfHx8fDE3NjczNjAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_3 = "https://images.unsplash.com/photo-1616085258995-85bd229048d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHJ1Z2dlZCUyMGhhbmRzb21lfGVufDF8fHx8MTc2NzM2MDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_4 = "https://images.unsplash.com/photo-1563310035-a7ade6111c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwaW50ZW5zZSUyMGdhemV8ZW58MXx8fHwxNzY3MzYwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_5 = "https://images.unsplash.com/photo-1761429944940-fe98ec7ba4cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYXJ0aXN0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjczNjAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  active?: boolean;
  unread?: boolean;
  pinned?: boolean;
  isPhoto?: boolean;
}

interface ChatsListProps {
  chats: Chat[];
  activeChatId: number;
  onSelectChat: (id: number) => void;
}

export const ChatsList: React.FC<ChatsListProps> = ({ chats, activeChatId, onSelectChat }) => {
  const [activeTab, setActiveTab] = React.useState<'All' | 'Favorite'>('All');

  return (
    <div className="flex flex-col h-full w-full md:w-[320px] bg-[#0a0a0a] border-r border-gray-800/50 shrink-0">
      {/* Header */}
      <div className="p-4 pt-6">
        <h2 className="text-2xl font-bold text-white mb-6 font-display tracking-tight">CHATS</h2>
        
        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-800 mb-2">
          <button 
            onClick={() => setActiveTab('All')}
            className={`pb-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'All' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
          >
            All chats
          </button>
          <button 
            onClick={() => setActiveTab('Favorite')}
            className={`pb-3 font-medium text-sm transition-colors border-b-2 ${activeTab === 'Favorite' ? 'text-white border-white' : 'text-gray-500 border-transparent hover:text-gray-300'}`}
          >
            My favorite
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-800 [&::-webkit-scrollbar-track]:bg-transparent">
        {chats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`group relative flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent ${
              activeChatId === chat.id 
                ? 'bg-[#1a1a1a] shadow-lg border-gray-800/50' 
                : 'hover:bg-[#1a1a1a]/50 hover:border-gray-800/30'
            }`}
          >
            {/* Active Indicator Strip */}
            {activeChatId === chat.id && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-orange-500 rounded-r-full shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
            )}

            <div className="relative shrink-0">
              <img 
                src={chat.avatar} 
                alt={chat.name} 
                className={`w-12 h-12 rounded-2xl object-cover transition-transform duration-500 ${activeChatId === chat.id ? 'scale-105' : 'group-hover:scale-105'}`}
              />
              {chat.unread && (
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-orange-500 rounded-full border-[3px] border-[#0a0a0a] flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
              <div className="flex items-center justify-between">
                <h3 className={`font-bold text-sm truncate flex items-center gap-1.5 ${activeChatId === chat.id ? 'text-white' : 'text-gray-200 group-hover:text-white transition-colors'}`}>
                  {chat.name}
                  {chat.pinned && <Pin size={12} className="text-orange-500 rotate-45 fill-orange-500/20" />}
                </h3>
                <span className={`text-[10px] font-medium ${chat.unread ? 'text-orange-500' : 'text-gray-600'}`}>
                  {chat.time}
                </span>
              </div>
              
              <div className="flex items-center justify-between gap-2">
                <p className={`text-xs truncate leading-relaxed ${
                    chat.unread 
                      ? 'text-gray-100 font-medium' 
                      : activeChatId === chat.id ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                  {chat.message}
                </p>
                
                {chat.unread && (
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
