import React, { useState } from 'react';
import { 
  X, 
  Lock,
  Image as ImageIcon, 
  Video, 
  User,
  Maximize2,
  Settings,
  Sparkles,
  Play,
  ChevronLeft,
  ChevronRight,
  Phone,
  Plus,
  Calendar,
  Globe,
  MessageCircle,
  Heart,
  Briefcase,
  Palette,
  Brain
} from 'lucide-react';

const MAIN_IMAGE = "https://images.unsplash.com/photo-1760264550811-91b2b668cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYmxvbmRlJTIwcG9ueXRhaWwlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzM2MDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Curly arrow SVG component
const CurlyArrow = () => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-600 rotate-12 opacity-80">
    <path d="M25 5C25 5 20 25 35 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 38L35 35L38 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EXTRA_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop"
];

interface RightSidebarProps {
  activeChat: {
    name: string;
    avatar: string;
    description?: string;
    imagesCount?: string;
    videosCount?: string;
    matchDate?: string;
    role?: string;
    age?: number;
    body?: string;
    ethnicity?: string;
    language?: string;
    relationship?: string;
    occupation?: string;
    hobbies?: string;
    personality?: string;
  };
  onClose?: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ activeChat, onClose }) => {
  const [activeTab, setActiveTab] = useState<'Gallery' | 'About'>('About');
  const [filter, setFilter] = useState<'All' | 'Images' | 'Videos'>('All');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine avatar with extra images for the carousel
  const galleryImages = [activeChat.avatar, ...EXTRA_IMAGES];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="flex flex-col h-full w-[380px] bg-[#0a0a0a] border-l border-gray-800/50 shrink-0">
      {/* Header Tabs */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2 border-b border-gray-800/50 shrink-0">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setActiveTab('Gallery')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'Gallery' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            Gallery
            {activeTab === 'Gallery' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('About')}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === 'About' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            About
            {activeTab === 'About' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-t-full" />
            )}
          </button>
        </div>
        
        {onClose && (
           <button onClick={onClose} className="p-2 -mr-2 text-gray-400 hover:text-white transition-colors">
              <X size={20} />
           </button>
        )}
      </div>

      {activeTab === 'Gallery' ? (
        <>
          {/* Gallery Filters */}
          <div className="flex items-center gap-2 px-6 py-4 shrink-0">
            <button 
              onClick={() => setFilter('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filter === 'All' 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600'
              }`}
            >
              All media
            </button>
            <button 
              onClick={() => setFilter('Images')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filter === 'Images' 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600'
              }`}
            >
              <ImageIcon size={12} />
              Images
            </button>
            <button 
              onClick={() => setFilter('Videos')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                filter === 'Videos' 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-gray-800 hover:border-gray-600'
              }`}
            >
              <Video size={12} />
              Videos
            </button>
          </div>

          {/* Gallery Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-0">
            <div className="relative w-24 h-32 mb-4 rounded-lg overflow-hidden border border-gray-800 shadow-2xl rotate-3 bg-[#1a1a1a]">
              <img src={activeChat.avatar} alt={activeChat.name} className="w-full h-full object-cover opacity-80" />
            </div>

            <h3 className="text-white font-medium text-base mb-1 max-w-[240px] leading-snug">
              Generate an image with {activeChat.name.split(' ')[0]}
            </h3>
            
            <p className="text-gray-500 text-xs max-w-[240px] mb-4">
              Try out different image styles...
            </p>

            <div className="mb-4">
              <CurlyArrow />
            </div>
          </div>

          {/* Generate Button Footer */}
          <div className="p-6 pt-0 shrink-0">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-b from-orange-500 to-orange-600 text-white font-bold py-3 rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Sparkles size={16} className="text-white" />
              Generate media
            </button>
          </div>
        </>
      ) : (
        /* About Tab Content */
        <div className="flex-1 overflow-y-auto p-6 flex flex-col min-h-0 [&::-webkit-scrollbar]:hidden">
          {/* Main Carousel Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-4 group shrink-0 w-full shadow-2xl shadow-black/50 border border-gray-800/50 bg-[#1a1a1a]">
             <img 
               src={galleryImages[currentImageIndex]} 
               alt={activeChat.name} 
               className={`w-full h-full object-cover transition-all duration-500 ${currentImageIndex > 3 ? 'blur-xl' : ''}`} 
             />
             
             {currentImageIndex > 3 && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 p-4 text-center backdrop-blur-sm">
                   <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-3 text-white border border-white/20 shadow-xl">
                      <Lock size={24} />
                   </div>
                   <h3 className="text-white font-bold text-lg mb-1">Private Photo</h3>
                   <p className="text-gray-300 text-xs mb-4 max-w-[200px]">Reach Level 5 to unlock this spicy memory.</p>
                   <button className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl text-white text-xs font-bold shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform">
                      Unlock Now
                   </button>
                </div>
             )}
             
             {/* Navigation Arrows */}
             <button 
               onClick={(e) => { e.stopPropagation(); prevImage(); }}
               className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
             >
                <ChevronLeft size={20} />
             </button>
             <button 
               onClick={(e) => { e.stopPropagation(); nextImage(); }}
               className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
             >
                <ChevronRight size={20} />
             </button>

             {/* Counter */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
               {currentImageIndex + 1} / {galleryImages.length}
             </div>

             {/* Top Icon */}
             <div className="absolute top-3 left-3">
                <div className="p-2 bg-black/30 backdrop-blur-md rounded-lg text-white">
                   <ImageIcon size={16} />
                </div>
             </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {galleryImages.map((img, idx) => {
              const isLocked = idx > 3;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === idx 
                      ? 'border-orange-500 opacity-100' 
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className={`w-full h-full object-cover ${isLocked ? 'blur-[2px]' : ''}`} />
                  {isLocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                       <Lock size={12} className="text-white/90 drop-shadow-md" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-orange-500/50 text-orange-500 bg-orange-500/5 hover:bg-orange-500/10 transition-colors font-medium">
                <ImageIcon size={18} />
                View Media
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition-colors font-medium">
                <Phone size={18} />
                Call Me
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1a1a1a] border border-gray-800 text-white hover:bg-[#252525] transition-colors font-medium text-sm uppercase tracking-wide">
              <Plus size={18} />
              New Chat
            </button>
          </div>

          {/* Name & Age */}
          <div className="mb-2">
             <h1 className="text-2xl font-bold text-white flex items-center gap-2">
               {activeChat.name} 
               <span className="text-gray-500 text-xl font-normal">• 24</span>
             </h1>
          </div>

          {/* Description */}
          <div className="mb-6">
             <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
               {activeChat.description || "Your new stepsister, forced to share a room with you. Rae lies awake at 1 AM..."} 
               <span className="text-gray-500 cursor-pointer hover:text-white ml-1 text-xs">show more</span>
             </p>
          </div>

          {/* About Me Grid */}
          <div className="mb-8">
            <h3 className="text-white font-bold mb-3">About me:</h3>
            <div className="grid grid-cols-2 gap-x-2 gap-y-4">
               {/* Age */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Calendar size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">AGE</p>
                   <p className="text-xs font-bold text-gray-200 truncate">{activeChat.age || '23'}</p>
                 </div>
               </div>

               {/* Body */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <User size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">BODY</p>
                   <p className="text-xs font-bold text-gray-200 truncate">{activeChat.body || 'Petite'}</p>
                 </div>
               </div>

               {/* Ethnicity */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Globe size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">ETHNICITY</p>
                   <p className="text-xs font-bold text-gray-200 truncate">{activeChat.ethnicity || 'American'}</p>
                 </div>
               </div>

               {/* Language */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <MessageCircle size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">LANGUAGE</p>
                   <p className="text-xs font-bold text-gray-200 truncate flex items-center gap-1">
                     🇺🇸 {activeChat.language || 'English'}
                   </p>
                 </div>
               </div>

               {/* Relationship */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Heart size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">RELATIONSHIP</p>
                   <p className="text-xs font-bold text-gray-200 truncate">{activeChat.relationship || 'Single AF'}</p>
                 </div>
               </div>

               {/* Occupation */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Briefcase size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">OCCUPATION</p>
                   <p className="text-xs font-bold text-gray-200 leading-tight">{activeChat.occupation || 'Freelance Illustrator'}</p>
                 </div>
               </div>

               {/* Hobbies */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Palette size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">HOBBIES</p>
                   <p className="text-xs font-bold text-gray-200 leading-tight">{activeChat.hobbies || 'Art, adventure, daydreaming, and flirting.'}</p>
                 </div>
               </div>

               {/* Personality */}
               <div className="flex items-center gap-2.5">
                 <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-gray-800">
                   <Brain size={14} className="text-gray-400" />
                 </div>
                 <div className="min-w-0">
                   <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">PERSONALITY</p>
                   <p className="text-xs font-bold text-gray-200 leading-tight">{activeChat.personality || 'Playful, spontaneous, imaginative, and charming.'}</p>
                 </div>
               </div>
            </div>
          </div>


        </div>
      )}
    </div>
  );
};
