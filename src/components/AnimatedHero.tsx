'use client';

import { useEffect, useState, useRef } from 'react';

/*----------------------------------------
Animated Hero Text Component
Types out the tagline with special effects
for Design, Build, and Nurture words
----------------------------------------*/
export default function AnimatedHero()
{
    const [displayedText, setDisplayedText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'complete'>('typing');
    const [showDesign, setShowDesign] = useState(false);
    const [showBuild, setShowBuild] = useState(false);
    const [showNurture, setShowNurture] = useState(false);
    const [designEffect, setDesignEffect] = useState(false);
    const [buildEffect, setBuildEffect] = useState(false);
    const [nurtureEffect, setNurtureEffect] = useState(false);
    
    const fullText = 'We ';
    const cursorRef = useRef<HTMLSpanElement>(null);

    useEffect(() =>
    {
        /* Type out "We " first */
        let index = 0;
        const typeInterval = setInterval(() =>
        {
            if (index < fullText.length)
            {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
            }
            else
            {
                clearInterval(typeInterval);
                /* Show Design with effect */
                setTimeout(() =>
                {
                    setShowDesign(true);
                    setTimeout(() => setDesignEffect(true), 100);
                }, 200);
                
                /* Show Build with effect */
                setTimeout(() =>
                {
                    setShowBuild(true);
                    setTimeout(() => setBuildEffect(true), 100);
                }, 800);
                
                /* Show Nurture with effect */
                setTimeout(() =>
                {
                    setShowNurture(true);
                    setTimeout(() => setNurtureEffect(true), 100);
                }, 1400);
                
                /* Complete phase */
                setTimeout(() =>
                {
                    setPhase('complete');
                }, 2200);
            }
        }, 80);

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <h1 className="hero-title mb-6">
            <span className="inline">{displayedText}</span>
            
            {/* Design - Paint/brush effect with gradient reveal */}
            <span className={`inline-block transition-all duration-500 ${showDesign ? 'opacity-100' : 'opacity-0'}`}>
                <span className={`relative inline-block text-[var(--primary)] ${designEffect ? 'animate-design-reveal' : ''}`}>
                    <span className="relative z-10">Design</span>
                    {designEffect && (
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 opacity-20 blur-sm animate-pulse" />
                    )}
                </span>
            </span>
            
            <span className={`inline transition-opacity duration-300 ${showDesign ? 'opacity-100' : 'opacity-0'}`}>, </span>
            
            {/* Build - Block/constructing effect */}
            <span className={`inline-block transition-all duration-500 ${showBuild ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className={`relative inline-block text-[var(--primary)] ${buildEffect ? 'animate-build-reveal' : ''}`}>
                    <span className="relative z-10">Build</span>
                    {buildEffect && (
                        <span className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary)] animate-build-underline" />
                    )}
                </span>
            </span>
            
            <span className={`inline transition-opacity duration-300 ${showBuild ? 'opacity-100' : 'opacity-0'}`}>, and</span>
            <br />
            
            {/* Nurture - Growing/organic effect */}
            <span className={`inline-block transition-all duration-700 ${showNurture ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <span className={`relative inline-block text-[var(--primary)] ${nurtureEffect ? 'animate-nurture-reveal' : ''}`}>
                    <span className="relative z-10">Nurture</span>
                    {nurtureEffect && (
                        <>
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-sparkle-1" />
                            <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-sparkle-2" />
                            <span className="absolute top-0 -left-2 w-1 h-1 bg-teal-400 rounded-full animate-sparkle-3" />
                        </>
                    )}
                </span>
            </span>
            
            <span className={`inline transition-opacity duration-500 ${showNurture ? 'opacity-100' : 'opacity-0'}`}> Digital Experiences.</span>
            
            {/* Typing cursor */}
            {phase === 'typing' && (
                <span 
                    ref={cursorRef}
                    className="inline-block w-0.5 h-[1em] bg-[var(--primary)] ml-1 animate-blink"
                />
            )}
        </h1>
    );
}
