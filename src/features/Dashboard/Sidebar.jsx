import React, { useState } from 'react';

const Sidebar = ({ onClose }) => {
    const [chats, setChats] = useState([]); 
    const [chatsExpanded, setChatsExpanded] = useState(true);

    return (
        <div className="w-full h-full flex flex-col bg-[#090909] text-zinc-300 font-sans p-2">
            
            <div className="flex items-center justify-between mb-4 px-3 pt-2">
                <div className="font-semibold text-white text-[15px] tracking-tight">MemProject</div>
                <div className="flex items-center gap-3 text-zinc-400">
                    <button className="hover:text-white transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button onClick={onClose} className="hover:text-white transition-colors" title="Close sidebar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="px-1 mb-5">
                <button className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-[#202020] transition-colors text-[14px] font-medium text-zinc-200 group">
                    <svg className="text-zinc-400 group-hover:text-zinc-200 transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    New chat
                </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 px-1">
                
                <div className="space-y-0.5">
                    <h3 className="px-2.5 text-xs font-semibold text-zinc-500 mb-1.5 tracking-wide">Memory</h3>
                    
                    <button className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-[#202020] transition-colors text-[14px] text-zinc-300">
                        <svg className="text-zinc-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="truncate">Short term memory</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-[#202020] transition-colors text-[14px] text-zinc-300">
                        <svg className="text-zinc-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg>
                        <span className="truncate">Long term memory</span>
                    </button>
                </div>

                {/* Chats Collapsible Section */}
                <div className="space-y-0.5">
                    <button 
                        onClick={() => setChatsExpanded(!chatsExpanded)}
                        className="w-full flex items-center justify-between px-2.5 py-1 text-xs font-semibold text-zinc-500 hover:text-zinc-300 transition-colors group"
                    >
                        <span className="tracking-wide">Chats</span>
                        <svg className={`transition-transform duration-200 ${chatsExpanded ? 'rotate-90' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                    
                    {chatsExpanded && (
                        <div className="pt-1">
                            {chats.length > 0 ? (
                                chats.map((chat) => (
                                    <button key={chat.id} className="w-full flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-[#202020] transition-colors text-[14px] text-zinc-300 text-left">
                                        <svg className="text-zinc-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <span className="truncate">{chat.title}</span>
                                    </button>
                                ))
                            ) : (
                                <div className="px-2.5 py-3 flex flex-col gap-1.5">
                                    <p className="text-[13px] text-zinc-500">No chats yet.</p>
                                    <p className="text-[13px] text-zinc-400 hover:text-white cursor-pointer transition-colors">
                                        Start a new chat
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Sidebar;