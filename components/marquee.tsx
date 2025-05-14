'use client';

import type React from 'react';
import { useRef, useState, useEffect, createContext, useContext } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

// Create a context to share the pause/resume functionality with children
type MarqueeContextType = {
  pauseAnimation: () => void;
  resumeAnimation: () => void;
};

const MarqueeContext = createContext<MarqueeContextType | null>(null);

export function useMarquee() {
  const context = useContext(MarqueeContext);
  if (!context) {
    throw new Error('useMarquee must be used within a Marquee component');
  }
  return context;
}

export interface MarqueeProps {
  /**
   * The content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * The direction of the marquee animation
   * @default "left"
   */
  direction?: 'left' | 'right';
  /**
   * The speed of the marquee animation (lower is faster)
   * @default 20
   */
  speed?: number;
  /**
   * Whether to pause the animation on hover
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Additional CSS classes to apply to the marquee container
   */
  className?: string;
}

export function Marquee({
  children,
  direction = 'left',
  speed = 20,
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [duration, setDuration] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the animation duration based on content width and speed
  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const contentWidth = contentRef.current.scrollWidth / 2; // Divide by 2 because we duplicate content
      const containerWidth = containerRef.current.clientWidth;

      setContentWidth(contentWidth);
      setContainerWidth(containerWidth);

      // Calculate duration based on content width and speed
      // We need at least one full content width plus container width to ensure smooth looping
      const calculatedDuration = (contentWidth + containerWidth) / speed;
      setDuration(calculatedDuration);
    }
  }, [children, speed]);

  // Pause and resume functions to be passed to children
  const pauseAnimation = () => {
    if (pauseOnHover) {
      setIsPaused(true);
      controls.stop();
    }
  };

  const resumeAnimation = () => {
    if (pauseOnHover) {
      setIsPaused(false);
      controls.start('animate');
    }
  };

  // Set up the animation variants
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -contentWidth] : [-contentWidth, 0],
      transition: {
        x: {
          duration,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'loop' as const,
        },
      },
    },
  };

  // Start the animation when the component mounts and duration is calculated
  useEffect(() => {
    if (duration > 0 && !isPaused) {
      controls.start('animate');
    }
  }, [controls, duration, isPaused]);

  return (
    <MarqueeContext.Provider value={{ pauseAnimation, resumeAnimation }}>
      <div
        ref={containerRef}
        className={`relative overflow-hidden ${className}`}
      >
        <motion.div
          ref={contentRef}
          className="flex whitespace-nowrap"
          animate={controls}
          variants={marqueeVariants}
          initial={false}
        >
          {children}
          {/* Duplicate the children to create a seamless loop */}
          {children}
        </motion.div>
      </div>
    </MarqueeContext.Provider>
  );
}

export interface MarqueeItemProps {
  children: React.ReactNode;
  className?: string;
}

export function MarqueeItem({ children, className = '' }: MarqueeItemProps) {
  const { pauseAnimation, resumeAnimation } = useMarquee();

  return (
    <div
      className={className}
      onMouseEnter={pauseAnimation}
      onMouseLeave={resumeAnimation}
    >
      {children}
    </div>
  );
}
