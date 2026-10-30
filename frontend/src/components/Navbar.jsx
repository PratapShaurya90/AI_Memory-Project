import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-100 backdrop-blur-lg bg-[#090909] border-b border-[#252525]">
            <div className="px-25 py-5 flex justify-between items-center">
                <div>
                    <Link
                        to="/"
                        className="flex items-center gap-3 text-2xl font-semibold tracking-wider text-white"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        {/* Premium Geometric Triangle (Core Memory) Logo */}
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            <path d="M12 3L3 19h18L12 3z" />
                        </svg>
                        Event
                    </Link>
                </div>
                <div className="w-129 py-3 ml-4 flex items-center relative overflow-visible">
                    <div className="w-full h-5 relative overflow-visible">
                        <div className="absolute inset-0 w-full h-full bg-zinc-800/50 overflow-hidden">
                            <div className="absolute left-0 h-full bg-gradient-to-r from-purple-600 to-purple-400 anim-fill-right shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                            <div className="absolute right-0 h-full bg-gradient-to-l from-cyan-600 to-cyan-400 anim-fill-left shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                        </div>
                        
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,1)] anim-drop-right z-10"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)] anim-drop-left z-10"></div>
                    </div>
                </div>
                <div className="flex items-center gap-10 commmon">
                    <div className="hidden md:flex items-center font-medium  md:text-md  text-[#9D9E9E]">
                        <Link to="/" className="hover:text-white hover:bg-zinc-800 rounded-3xl py-2 px-5 transition">
                            Product
                        </Link>
                        <Link to="/about" className="hover:text-white hover:bg-zinc-800 rounded-3xl p-2 px-4 transition">
                            Resources
                        </Link>
                        <Link to="/services" className="hover:text-white transition hover:bg-zinc-800 rounded-3xl p-2 px-4 transition">
                            Intuition
                        </Link>
                        <Link to="/contact" className="hover:text-white transition hover:bg-zinc-800 rounded-3xl p-2 px-4 transition">
                            Coummunity
                        </Link>
                        <Link to="/meet-the-team" className="hover:text-white transition hover:bg-zinc-800 rounded-3xl p-2 px-4 transition">
                            Developer
                        </Link>
                    </div>
                    <div className="h-6 w-[0.1rem] bg-zinc-800 "></div>

                    <div className="flex items-center gap-5 text-sm">
                        <Link to="/login" className="text-white transition font-medium">
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="px-4 py-2 rounded-lg bg-white text-black font-medium  transition active:scale-[0.98]"
                        >
                            Ready To Launch
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
