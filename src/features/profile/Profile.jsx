import React from 'react';
import RobotLogo from '../../components/RobotLogo';

const Profile = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-zinc-900 border border-zinc-800 w-288 h-153 rounded-2xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex ">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border border-zinc-700/50 mb-4">
                        <RobotLogo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
