/**
 * Utility for synthesizing UI sound effects.
 */

let audioCtx = null;

// Unlock the audio engine silently on the first click!
export const initAudio = () => {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    } catch (e) {}
};

// 🌬️ A very quiet, soft sine-wave tick for when you hover over things
export const playHoverSound = () => {
    try {
        // Only play if the user has clicked at least once and unlocked the engine!
        if (!audioCtx || audioCtx.state !== 'running') return;
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine'; 
        osc.frequency.setValueAtTime(800, audioCtx.currentTime); 
        osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.04);

        gain.gain.setValueAtTime(0.05, audioCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {}
};
