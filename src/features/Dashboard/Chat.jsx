import React, { useState } from 'react';
import Profile from '../profile/Profile';
import RobotLogo from '../../components/RobotLogo';
import CopyButton from '../utilities/CopyButton';

const Chat = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMsg = { id: Date.now(), role: 'user', content: inputValue };
        setMessages(prev => [...prev, newUserMsg]);
        setInputValue("");

        setTimeout(() => {
            const aiMsg = { 
                id: Date.now() + 1, 
                role: 'ai', 
                content: "I'm processing that right now. This is a mock response from the AI." 
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 800);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (inputValue.trim()) {
                handleSendMessage(e);
            }
        }
    };

    return (
        <div className="w-full h-full flex flex-col relative">
            
            <div className="w-full flex items-center justify-end p-4 bg-transparent shrink-0">
                <button 
                    onClick={() => setIsProfileOpen(true)}
                    className="w-9 h-9 rounded-full overflow-hidden border border-zinc-700 hover:border-zinc-400 transition-all focus:outline-none shadow-sm"
                >
                    <RobotLogo />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {messages.length === 0 ? (
                    <div className="m-auto flex flex-col items-center justify-center text-center px-4">
                        <h2 className="text-4xl font-semibold text-white mb-3 tracking-tight">Hey! How has your day been?</h2>
                        <p className="text-zinc-400 text-base">Let's start something productive!!</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto pb-4 pt-2">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex flex-col max-w-4xl ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                    <div className={`px-5 py-3.5 rounded-3xl ${msg.role === 'user' ? 'bg-[#2A2A2A] text-white rounded-br-sm' : 'bg-transparent text-zinc-200'}`}>
                                        <p className="text-base leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                    {msg.role === 'ai' && (
                                        <div className="mt-1 ml-2">
                                            <CopyButton text={msg.content} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-full p-4 shrink-0 pb-6">
                <form onSubmit={handleSendMessage} className="max-w-4xl w-full mx-auto relative flex items-end bg-[#202020] border border-zinc-700/50 rounded-[28px] focus-within:border-zinc-500 focus-within:bg-[#252525] transition-colors">
                    <textarea 
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            e.target.style.height = 'auto';
                            e.target.style.height = Math.min(e.target.scrollHeight, 200) + 'px';
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Message MemProject..." 
                        rows="1"
                        className="w-full bg-transparent text-white placeholder-zinc-500 rounded-[28px] pl-5 pr-14 py-4 focus:outline-none text-base resize-none min-h-[56px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    />
                    <button 
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="absolute right-3 bottom-3 p-2 rounded-full bg-white text-black disabled:bg-[#303030] disabled:text-zinc-500 transition-colors focus:outline-none"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </button>
                </form>
            </div>

            {isProfileOpen && (
                <Profile onClose={() => setIsProfileOpen(false)} />
            )}
            
        </div>
    )
}

export default Chat;