import React from 'react';
import { 
  Send, 
  Sparkles,
  Phone,
  Video,
  ChevronLeft,
  MoreVertical,
  Flame,
  CheckCheck,
  Mic,
  Trash2,
  OctagonAlert,
  MoreHorizontal,
  ImagePlus,
  Camera,
  Share2,
  Info
} from 'lucide-react';

// Images
const MAIN_IMAGE = "https://images.unsplash.com/photo-1760264550811-91b2b668cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwYmxvbmRlJTIwcG9ueXRhaWwlMjBmYXNoaW9ufGVufDF8fHx8MTc2NzM2MDI0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PHOTO_1 = "https://images.unsplash.com/photo-1677070041822-eb487df50859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxpbmdlcmllJTIwZmFzaGlvbiUyMHNlbGZpZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjczNjA2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PHOTO_2 = "https://images.unsplash.com/photo-1678997638871-bb9dac3db20f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJlZHJvb20lMjBmYXNoaW9uJTIwcG9ydHJhaXQlMjBnbGFtb3JvdXN8ZW58MXx8fHwxNzY3MzYwNjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export interface Chat {
  id: number;
  name: string;
  avatar: string;
  isOnline?: boolean;
  role?: string;
  description?: string;
  imagesCount?: string;
  videosCount?: string;
  matchDate?: string;
}

export interface Message {
  id: string;
  text?: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  images?: string[];
  isSpicy?: boolean;
}

interface ChatMainProps {
  activeChat: Chat;
  messages: Message[];
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
  onBack?: () => void;
  onShowProfile?: () => void;
}

export const ChatMain: React.FC<ChatMainProps> = ({ activeChat, messages, onSendMessage, onClearChat, onBack, onShowProfile }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showMediaMenu, setShowMediaMenu] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
    const lastMsg = messages[messages.length - 1];
    if (lastMsg?.sender === 'bot') {
      setIsTyping(false);
    }
  }, [messages]);

  React.useEffect(() => {
    setIsTyping(false);
  }, [activeChat.id]);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
      setIsTyping(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Pre-defined initial state logic - removed isBarbara restriction
  const showIntro = messages.length <= 2; // Show intro if chat is just starting
  const showSuggestions = messages.length < 5;

  return (
    <div className="flex flex-col h-full flex-1 min-w-0 bg-[#0a0a0a] relative">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800/30 bg-[#0a0a0a] z-10">
         <div className="flex items-center gap-4">
           {onBack && (
             <button 
               onClick={onBack}
               className="md:hidden text-gray-400 hover:text-white transition-colors"
             >
               <ChevronLeft size={24} />
             </button>
           )}
           <div className="hidden md:block">
             {/* Desktop placeholder for alignment if needed, or remove ChevronLeft for desktop if not used */}
           </div>
           <div className="relative">
             <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-800" />
             <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a0a] ${activeChat.isOnline !== false ? 'bg-green-500' : 'bg-gray-500'}`}></div>
           </div>
           <div>
             <h3 className="text-white font-bold text-sm">{activeChat.name}</h3>
             <div className="flex items-center gap-2 mt-0.5">
               <div className="w-16 md:w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 w-[65%] shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
               </div>
               <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wide">Flirting</span>
             </div>
           </div>
         </div>

         <div className="flex items-center gap-2 md:gap-3">
           <button 
             onClick={onShowProfile}
             className="xl:hidden w-10 h-10 rounded-full bg-[#1a1a1a] text-gray-400 hover:text-white flex items-center justify-center transition-all"
           >
             <Info size={20} />
           </button>

           <button className="w-10 h-10 rounded-full bg-[#1a2e1f] text-green-500 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all">
             <Phone size={20} className="fill-current" />
           </button>
           <button className="w-10 h-10 rounded-full bg-[#2e1f1a] text-orange-500 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-all">
             <Video size={20} className="fill-current" />
           </button>

           <div className="relative ml-1">
             <button 
               onClick={() => setShowMenu(!showMenu)}
               className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${showMenu ? 'bg-[#1a1a1a] text-white' : 'bg-transparent text-gray-400 hover:bg-[#1a1a1a] hover:text-white'}`}
             >
               <MoreHorizontal size={20} />
             </button>

             {showMenu && (
               <>
                 <div className="fixed inset-0 z-40" onClick={() => setShowMenu(false)} />
                 <div className="absolute right-0 top-full mt-2 w-52 bg-[#1e1e1e] border border-gray-800 rounded-xl shadow-2xl z-50 overflow-hidden py-1">
                   <button 
                     onClick={() => {
                       if (navigator.share) {
                         navigator.share({
                           title: `Chat with ${activeChat.name}`,
                           text: `Check out ${activeChat.name} on Lovescape!`,
                           url: window.location.href,
                         }).catch(() => {});
                       } else {
                         alert(`Share ${activeChat.name}`);
                       }
                       setShowMenu(false);
                     }}
                     className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#2a2a2a] transition-colors text-left group"
                   >
                     <Share2 size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                     <span className="text-sm font-medium text-gray-200 group-hover:text-white">Share profile</span>
                   </button>
                   <div className="h-px bg-gray-800 mx-0" />
                   <button 
                     onClick={() => {
                       onClearChat();
                       setShowMenu(false);
                     }}
                     className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#2a2a2a] transition-colors text-left group"
                   >
                     <Trash2 size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                     <span className="text-sm font-medium text-gray-200 group-hover:text-white">Clear chat history</span>
                   </button>
                   <div className="h-px bg-gray-800 mx-0" />
                   <button 
                    onClick={() => {
                      alert("Reported user.");
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#2a2a2a] transition-colors text-left group"
                   >
                     <OctagonAlert size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                     <span className="text-sm font-medium text-gray-200 group-hover:text-white">Report</span>
                   </button>
                 </div>
               </>
             )}
           </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col no-scrollbar">
        
        <div className="flex-1 flex flex-col justify-end min-h-0 pb-2">
          {/* Intro Section - Dynamic for all chats */}
          {showIntro && (
            <div className="flex flex-col items-center justify-center mb-2 mt-auto">
               <div className="relative p-1 rounded-2xl bg-gradient-to-b from-orange-500 to-pink-500 mb-2 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                 <div className="relative w-16 md:w-32 aspect-[3/4] rounded-xl overflow-hidden bg-[#1a1a1a]">
                   <img src={activeChat.avatar} alt="Intro" className="w-full h-full object-cover object-top" />
                 </div>
               </div>
               
               <div className="text-center space-y-0.5">
                 <p className="text-gray-200 text-xs md:text-lg font-bold">Meet {activeChat.name}, an AI {activeChat.role || "Girlfriend"}</p>
                 <p className="text-gray-200 text-xs md:text-lg font-bold">with no filter.</p>
                 <p className="text-gray-400 text-[10px] md:text-base font-medium mt-0.5">Dare to ask anything?</p>
               </div>
            </div>
          )}

          {/* Render Messages */}
          {messages.map((msg, index) => (
             <div key={msg.id} className={`flex flex-col mb-4 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.sender === 'bot' && msg.text && (
                  <div className="flex items-end gap-3 px-2">
                     <img src={activeChat.avatar} alt="Avatar" className="w-6 h-6 rounded-full object-cover mb-1 shrink-0" />
                     <div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-bl-none max-w-md text-gray-200 text-sm leading-relaxed">
                       {msg.text}
                     </div>
                     {/* Show Mic for the first message of the conversation */}
                     {index === 0 && (
                        <button className="w-7 h-7 rounded-full bg-orange-600 text-white flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20 shrink-0">
                          <Mic size={12} className="fill-current" />
                        </button>
                     )}
                  </div>
                )}
                
                {msg.sender === 'user' && (
                  <div className="bg-blue-600 p-3 rounded-2xl rounded-br-none max-w-md text-white text-sm leading-relaxed">
                    {msg.text}
                  </div>
                )}

                {/* Images */}
                {msg.images && (
                  <div className="flex gap-2 mt-2 pl-11 px-2">
                     {msg.images.map((img, idx) => (
                       <div key={idx} className="relative w-48 h-64 rounded-xl overflow-hidden group border border-gray-800/50">
                         <img src={img} alt="Media" className="w-full h-full object-cover" />
                         {msg.isSpicy && idx === 0 && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                              <button 
                                onClick={() => onSendMessage("Send me spicy photos")}
                                className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white text-[9px] font-bold py-1.5 rounded-lg shadow-lg hover:scale-105 transition-transform backdrop-blur-sm"
                              >
                                <Flame size={10} className="fill-current" />
                                Send me spicy photos
                              </button>
                            </>
                         )}
                         {/* Show checkmark on the last image if it's the bot's initial message */}
                         {idx === msg.images.length - 1 && index === 0 && msg.sender === 'bot' && (
                            <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[9px] text-white/90 font-medium drop-shadow-md bg-black/20 px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                              <span>12:58 PM</span>
                              <CheckCheck size={10} />
                            </div>
                         )}
                       </div>
                     ))}
                  </div>
                )}
             </div>
          ))}
          
          {isTyping && (
             <div className="flex items-end gap-3 px-2 mb-4 animate-in fade-in slide-in-from-bottom-2">
                <img src={activeChat.avatar} className="w-6 h-6 rounded-full object-cover mb-1 shrink-0" />
                <div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1 h-4 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                  </div>
                </div>
             </div>
          )}

          <div ref={messagesEndRef} />
        </div>

      </div>

      {/* Footer / Input Area */}
      <div className="p-6 pt-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
        
        {/* Quick Suggestions - Dynamic */}
        {showSuggestions && (
          <div className="mb-3">
            <p className="text-gray-500 text-xs mb-2 pl-1">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
               <button 
                onClick={() => onSendMessage("Continue")}
                className="whitespace-nowrap px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-xl text-gray-300 text-xs transition-colors"
               >
                 Continue
               </button>
               <button 
                onClick={() => onSendMessage("Send me nudes")}
                className="whitespace-nowrap px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-xl text-gray-300 text-xs transition-colors"
               >
                 Send me nudes
               </button>
               <button 
                onClick={() => onSendMessage("*Eyes lock tight.* Craving something filthy? Let's play!")}
                className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-xl text-gray-300 text-xs transition-colors italic text-left"
               >
                 *Eyes lock tight.* Craving something filthy? Let's play!
               </button>
               <button 
                onClick={() => onSendMessage("*Smirking hard.* What's your hottest sin? Tell me!")}
                className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-gray-800 rounded-xl text-gray-300 text-xs transition-colors italic text-left"
               >
                 *Smirking hard.* What's your hottest sin? Tell me!
               </button>
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div className="relative">
           {/* Media Menu Button */}
           <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20">
              <button 
                onClick={() => setShowMediaMenu(!showMediaMenu)}
                className={`p-2 rounded-xl transition-all ${showMediaMenu ? 'bg-orange-500/20 text-orange-500' : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'}`}
              >
                <ImagePlus size={20} />
              </button>

              {/* Media Popup Menu */}
              {showMediaMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowMediaMenu(false)} />
                  <div className="absolute bottom-full left-0 mb-3 w-48 bg-[#1e1e1e]/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl z-30 overflow-hidden p-1.5 animate-in fade-in slide-in-from-bottom-2">
                    <button 
                      onClick={() => {
                        onSendMessage("Send me a video");
                        setShowMediaMenu(false);
                      }}
                      className="w-full px-3 py-2.5 flex items-center gap-3 hover:bg-white/10 rounded-xl transition-colors text-left group"
                    >
                      <Video size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">Send me a video</span>
                    </button>
                    <button 
                      onClick={() => {
                        onSendMessage("Send me a photo");
                        setShowMediaMenu(false);
                      }}
                      className="w-full px-3 py-2.5 flex items-center gap-3 hover:bg-white/10 rounded-xl transition-colors text-left group mt-0.5"
                    >
                      <ImagePlus size={18} className="text-gray-300 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white">Send me a photo</span>
                    </button>
                  </div>
                </>
              )}
           </div>

           <input 
             type="text" 
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             onKeyDown={handleKeyDown}
             placeholder={`Message ${activeChat.name}...`}
             className="w-full bg-[#121212] border border-gray-800 rounded-2xl pl-12 pr-32 py-4 text-white placeholder-gray-600 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 transition-all outline-none text-sm"
           />
           
           <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button 
                onClick={() => onSendMessage("Ask: " + inputValue)}
                className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] rounded-xl text-gray-400 hover:text-white transition-colors text-xs font-medium border border-gray-800"
              >
                <Sparkles size={14} />
                Ask
              </button>
              <button 
                onClick={handleSend}
                className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors shadow-lg shadow-blue-600/20"
              >
                <Send size={16} className="fill-current" />
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};
