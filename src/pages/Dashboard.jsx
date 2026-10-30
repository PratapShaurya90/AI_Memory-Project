import React, { useState } from 'react';
import Chat from "../features/Dashboard/Chat"
import Sidebar from "../features/Dashboard/Sidebar"

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="w-full h-screen flex bg-[#090909] px-2 py-4 gap-2 relative">
            
            <div 
                className={`transition-all duration-300 ease-in-out h-full overflow-hidden shrink-0 ${
                    isSidebarOpen ? 'w-[260px] opacity-100' : 'w-0 opacity-0'
                }`}
            >
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            <div className="flex-1 transition-all duration-300 ease-in-out h-full bg-zinc-900 rounded-3xl border-2 border-white/5 relative overflow-hidden">
                
                {!isSidebarOpen && (
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute top-4 left-4 z-50 p-2 text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg transition-all"
                        title="Open Sidebar"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </button>
                )}

                <Chat />
            </div>
        </div>
    )
}

export default Dashboard;