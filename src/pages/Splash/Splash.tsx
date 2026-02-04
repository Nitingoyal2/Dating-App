import { useEffect, useState } from 'react';
import { ProstoLogo } from '@svg';
import type { SplashProps } from '@interfaces';
import './Splash.css';

const Splash = ({ onFinish, duration = 2500 }: SplashProps) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, duration - 500);

        const finishTimer = setTimeout(() => {
            onFinish();
        }, duration);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [duration, onFinish]);

    return (
        <div className={`splash-screen ${fadeOut ? 'fade-out' : ''}`}>
            <div className="splash-bg-hearts">
                <div className="bg-heart bg-heart-1">💜</div>
                <div className="bg-heart bg-heart-2">💜</div>
                <div className="bg-heart bg-heart-3">💜</div>
            </div>

            <div className="splash-content">
                <div className="splash-logo">
                    <ProstoLogo size={120} color="#6C5CE7" />
                </div>
                <h1 className="splash-title">Prosto</h1>
                <p className="splash-tagline">Love Made Simple</p>
            </div>
        </div>
    );
};

export default Splash;
