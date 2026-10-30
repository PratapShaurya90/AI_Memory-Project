const Footer = () => {
    return (
        <footer className="w-full bg-black py-16 px-25 border-t border-zinc-900 flex flex-col gap-12">
            <div className="flex justify-between items-center">
                {/* Brand / Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-white rotate-45 transform origin-center shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                    <span className="text-white font-extrabold tracking-[0.2em] uppercase text-xl">Event</span>
                </div>
                
                {/* Links */}
                <div className="flex gap-8 text-sm text-zinc-500 font-medium">
                    <a href="#" className="hover:text-white transition-colors duration-300">Architecture</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Research</a>
                    <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
                </div>
            </div>

            <div className="w-full flex justify-between items-center text-xs text-zinc-600 border-t border-zinc-900 pt-6">
                <p>
                    &copy; {new Date().getFullYear()} Event Intelligence. 
                    <span className="ml-2">Made with <span className="text-[#EA4335]">❤️</span> by Shaurya.</span>
                </p>
                <div className="flex gap-6 items-center">
                    <a href="mailto:singhshauryapratap83@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <svg className="w-4 h-4 text-[#EA4335]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        singhshauryapratap83@gmail.com
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <svg className="w-4 h-4 text-[#0A66C2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
