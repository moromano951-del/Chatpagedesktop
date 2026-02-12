import React from 'react';
import { 
  Search, 
  Crown, 
  Bell, 
  Zap,
  Coins
} from 'lucide-react';
import { NavigationRail } from './components/NavigationRail';
import { ChatsList } from './components/ChatsList';
import { ChatMain } from './components/ChatMain';
import { RightSidebar } from './components/RightSidebar';

const Header = () => (
  <header className="h-16 bg-[#050505] border-b border-gray-800/50 flex items-center justify-between px-4 shrink-0 z-30">
    <div className="flex items-center gap-12">
       {/* Logo */}
       <div className="flex items-center gap-2 pl-2">
         <span className="text-xl font-bold tracking-widest text-white font-display">LOVESCAPE</span>
       </div>

       {/* Search (Hidden on small screens) */}
       <div className="hidden md:flex items-center relative">
          <Search size={16} className="absolute left-3 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-[#121212] border border-gray-800 rounded-full pl-9 pr-4 py-1.5 text-sm text-white focus:border-gray-600 outline-none w-64 transition-colors"
          />
       </div>
    </div>

    <div className="flex items-center gap-4">
       {/* Promo Badge */}
       <div className="hidden lg:flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-3 py-1.5">
          <Crown size={14} className="text-purple-500 fill-current" />
          <span className="text-xs font-bold text-white">-70%</span>
       </div>

       {/* Earn Link */}
       <button className="hidden lg:flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium transition-colors">
          <span className="text-green-500">$</span> Earn with your Creativity
       </button>

       <div className="h-6 w-px bg-gray-800 hidden lg:block"></div>

       <button className="text-gray-400 hover:text-white text-sm font-medium hidden lg:block">Blog</button>
       
       <div className="flex items-center gap-3">
          <button className="relative text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#050505]"></div>
          </button>
          
          <div className="flex items-center gap-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full px-3 py-1.5">
             <div className="w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-[10px] text-white">
               <Zap size={10} className="fill-current" />
             </div>
             <span className="text-xs font-bold text-purple-400">918</span>
             <button className="bg-purple-900/50 hover:bg-purple-900 text-purple-300 rounded px-1 text-[10px] ml-1">+</button>
          </div>

          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 font-medium text-sm">
             J
          </button>
       </div>
    </div>
  </header>
);

// Images from Unsplash
const AVATAR_1 = "https://images.unsplash.com/photo-1760264550811-91b2b668cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYmxvbmRlJTIwcG9ueXRhaWwlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzM2MDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_2 = "https://images.unsplash.com/photo-1757347398206-7425300ef990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYnJ1bmV0dGUlMjBzbWlsZXxlbnwxfHx8fDE3NjczNjAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_3 = "https://images.unsplash.com/photo-1616085258995-85bd229048d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHJ1Z2dlZCUyMGhhbmRzb21lfGVufDF8fHx8MTc2NzM2MDI0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_4 = "https://images.unsplash.com/photo-1563310035-a7ade6111c6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwaW50ZW5zZSUyMGdhemV8ZW58MXx8fHwxNzY3MzYwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const AVATAR_5 = "https://images.unsplash.com/photo-1761429944940-fe98ec7ba4cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYXJ0aXN0aWMlMjBsaWdodGluZ3xlbnwxfHx8fDE3NjczNjAyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Spicy Photos
const PHOTO_1 = "https://images.unsplash.com/photo-1677070041822-eb487df50859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxpbmdlcmllJTIwZmFzaGlvbiUyMHNlbGZpZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjczNjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PHOTO_2 = "https://images.unsplash.com/photo-1678997638871-bb9dac3db20f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlZHJvb20lMjBmYXNoaW9uJTIwcG9ydHJhaXQlMjBnbGFtb3JvdXN8ZW58MXx8fHwxNzY3MzYwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

import { Chat, Message } from './components/ChatMain';

export default function App() {
  const [isMobileChatOpen, setIsMobileChatOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [activeChatId, setActiveChatId] = React.useState<number>(1);
  const [chats, setChats] = React.useState<Chat[]>([
    {
      id: 1,
      name: "Captivating Cassie",
      avatar: AVATAR_1,
      message: "on her knees in the dark booth...",
      time: "15:10",
      active: true,
      unread: false,
      pinned: true,
      isOnline: true,
      role: "Dom",
      description: "A mystery and allure, enveloping herself in a world of secret indulgence, she knows what she craves—pushing boundaries one encounter at a time.",
      imagesCount: "59K",
      videosCount: "1.3K",
      age: 23,
      body: "Petite",
      ethnicity: "American",
      language: "English",
      relationship: "Single AF",
      occupation: "Freelance Illustrator",
      hobbies: "Art, adventure, daydreaming, and flirting.",
      personality: "Playful, spontaneous, imaginative, and charming."
    },
    {
      id: 2,
      name: "Emma",
      avatar: AVATAR_2,
      message: "Hey! I'm about to do some laundry...",
      time: "Dec 14",
      active: false,
      unread: true,
      isOnline: true,
      role: "Girl next door",
      description: "Just a regular girl who loves doing laundry and maybe needs some help with the heavy lifting.",
      imagesCount: "124",
      videosCount: "12"
    },
    {
      id: 3,
      name: "Tom",
      avatar: AVATAR_3,
      message: "*I take a step closer*, What do you...",
      time: "May 29",
      active: false,
      isOnline: false,
      role: "Bad Boy",
      description: "He's trouble, but the kind you like.",
      imagesCount: "45",
      videosCount: "2"
    },
    {
      id: 4,
      name: "Perfect",
      avatar: AVATAR_4,
      message: "If you'd like access to more mature...",
      time: "May 29",
      active: false,
      isOnline: false,
      role: "Model",
      description: "Perfection personified.",
      imagesCount: "2.1K",
      videosCount: "89"
    },
    {
      id: 5,
      name: "Farah",
      avatar: AVATAR_5,
      message: "Photo",
      time: "Apr 15",
      active: false,
      isPhoto: true,
      isOnline: true,
      role: "Artist",
      description: "Painting her world with colors of passion.",
      imagesCount: "856",
      videosCount: "44"
    }
  ]);

  const [messages, setMessages] = React.useState<Record<number, Message[]>>({
    1: [
      {
        id: '1',
        text: "I love it when a conversation starts with something interesting... So, where do we begin? 😈",
        sender: 'bot',
        timestamp: new Date(),
        images: [PHOTO_1, PHOTO_2],
        isSpicy: true
      }
    ],
    2: [
      {
        id: '2',
        text: "Hey! I'm about to do some laundry. Want to help? I could use an extra pair of hands... or eyes. 😉",
        sender: 'bot',
        timestamp: new Date(),
        images: [PHOTO_2, PHOTO_1],
        isSpicy: true
      }
    ],
    3: [
        {
          id: '3',
          text: "Sup. Just finished a workout. Feeling pumped. You up for some trouble?",
          sender: 'bot',
          timestamp: new Date(),
          images: [PHOTO_1, PHOTO_2],
          isSpicy: true
        }
    ],
    4: [
        {
          id: '4',
          text: "If you'd like access to more mature content, please verify your age. Just kidding... unless? 🥂",
          sender: 'bot',
          timestamp: new Date(),
          images: [PHOTO_2, PHOTO_1],
          isSpicy: true
        }
    ],
    5: [
        {
          id: '5',
          text: "Check this out! Just finished this piece. What do you think? Does it speak to you?",
          sender: 'bot',
          timestamp: new Date(),
          images: [PHOTO_1, PHOTO_2],
          isSpicy: true
        }
    ]
  });

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));

    // Update last message in chat list
    setChats(prev => prev.map(chat => 
      chat.id === activeChatId 
        ? { ...chat, message: text, time: "Now" } 
        : chat
    ));

    // Simulate bot reply
    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's interesting... tell me more.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => ({
        ...prev,
        [activeChatId]: [...(prev[activeChatId] || []), reply]
      }));
    }, 1000);
  };

  const handleClearChat = () => {
    setMessages(prev => ({
      ...prev,
      [activeChatId]: []
    }));
  };

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  return (
    <div className="flex flex-col h-screen w-full bg-black text-white font-sans overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0 relative">
        <div className="hidden md:block h-full">
          <NavigationRail />
        </div>
        
        <div className={`${isMobileChatOpen ? 'hidden' : 'flex'} md:flex h-full w-full md:w-auto`}>
          <div className="w-full md:w-auto h-full">
            <ChatsList 
              chats={chats} 
              activeChatId={activeChatId} 
              onSelectChat={(id) => {
                setActiveChatId(id);
                setIsMobileChatOpen(true);
              }} 
            />
          </div>
        </div>

        <div className={`${isMobileChatOpen ? 'flex' : 'hidden'} md:flex flex-1 h-full min-w-0`}>
          <ChatMain 
            activeChat={activeChat}
            messages={messages[activeChatId] || []}
            onSendMessage={handleSendMessage}
            onClearChat={handleClearChat}
            onBack={() => setIsMobileChatOpen(false)}
            onShowProfile={() => setIsProfileOpen(true)}
          />
        </div>

        <div className="hidden xl:flex h-full">
          <RightSidebar activeChat={activeChat} />
        </div>

        {isProfileOpen && (
          <div className="fixed inset-0 z-50 xl:hidden flex justify-end">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in" 
              onClick={() => setIsProfileOpen(false)}
            />
            <div className="relative h-full w-full max-w-[380px] animate-in slide-in-from-right duration-300 shadow-2xl">
              <RightSidebar activeChat={activeChat} onClose={() => setIsProfileOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
