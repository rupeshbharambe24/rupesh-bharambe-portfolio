"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const RAINBOW = [
  "#ff0000",
  "#ff5500",
  "#ffaa00",
  "#ffff00",
  "#aaff00",
  "#00ff00",
  "#00ffaa",
  "#00ffff",
  "#00aaff",
  "#0055ff",
  "#5500ff",
  "#aa00ff",
  "#ff00ff",
  "#ff00aa",
];

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trailDots, setTrailDots] = useState<{ id: number; x: number; y: number }[]>([]);
  const dotIdRef = useRef(0);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { stiffness: 180, damping: 18 });
  const ringY = useSpring(cursorY, { stiffness: 180, damping: 18 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      dotIdRef.current++;
      const newDot = { id: dotIdRef.current, x: e.clientX, y: e.clientY };
      setTrailDots((prev) => [...prev.slice(-18), newDot]);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const handleDown = () => setClicking(true);
    const handleUp = () => setClicking(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const handleHoverIn = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select")
      ) {
        setHovering(true);
      }
    };
    const handleHoverOut = () => setHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
      document.body.style.cursor = "";
    };
  }, [handleMouseMove]);

  // Clean up old trail dots
  useEffect(() => {
    if (trailDots.length === 0) return;
    const timer = setTimeout(() => {
      setTrailDots((prev) => prev.slice(1));
    }, 60);
    return () => clearTimeout(timer);
  }, [trailDots]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Rainbow trail dots */}
      {trailDots.map((dot, i) => {
        const progress = (i + 1) / trailDots.length;
        const opacity = progress * 0.6;
        const size = 2 + progress * 4;
        const colorIndex = Math.floor((dot.id * 0.7) % RAINBOW.length);
        return (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: dot.x - size / 2,
              top: dot.y - size / 2,
              width: size,
              height: size,
              opacity,
              background: RAINBOW[colorIndex],
              boxShadow: `0 0 ${size + 2}px ${RAINBOW[colorIndex]}40`,
              transition: "opacity 0.2s ease-out",
            }}
          />
        );
      })}

      {/* Inner dot — small */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: -3,
          top: -3,
          x: cursorX,
          y: cursorY,
          width: 6,
          height: 6,
          background: "white",
          mixBlendMode: "difference",
        }}
        animate={{
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Outer ring — smaller, follows with spring */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          left: -12,
          top: -12,
          x: ringX,
          y: ringY,
          width: 24,
          height: 24,
          borderColor: `rgb(var(--primary) / 0.4)`,
        }}
        animate={{
          scale: hovering ? 1.6 : clicking ? 0.7 : 1,
          borderColor: hovering
            ? `rgb(var(--secondary) / 0.8)`
            : `rgb(var(--primary) / 0.4)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
