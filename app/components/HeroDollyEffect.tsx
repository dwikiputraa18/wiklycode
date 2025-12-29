'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const HeroDollyEffect: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: imageRef.current,
      start: 'top top',
      end: '+=100% top',
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        gsap.to(imageRef.current!, {
          scale: 1 - progress * 0.5,
          ease: 'none',
          duration: 0.5,
        });

        gsap.to(textRef.current!, {
          scale: 1 + progress * 0.5,
          opacity: 1 - progress,
          ease: 'none',
          duration: 0.5,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/logo-white2.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        ref={textRef}
        className="relative z-10 flex items-center justify-center h-full text-white text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          WiklyCode.dev
        </h1>
      </div>
    </div>
  );
};

export default HeroDollyEffect;
