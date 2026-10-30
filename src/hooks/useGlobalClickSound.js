import { useEffect } from 'react';
import { playHoverSound, initAudio } from '../utils/audio';

/**
 * Custom hook to attach global hover sound ONLY.
 */
export const useGlobalClickSound = () => {
    useEffect(() => {
        // We MUST silently initialize the audio engine on the first click, 
        // otherwise hover sounds will be blocked by the browser permanently!
        const handleMouseDown = () => {
            initAudio();
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest('button, a, [role="button"]');
            if (target) {
                playHoverSound();
            }
        };

        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseover', handleMouseOver);
        
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);
};
