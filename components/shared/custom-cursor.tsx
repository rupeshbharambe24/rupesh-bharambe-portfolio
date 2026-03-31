"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [trailDots, setTrailDots] = useState<{ id: number; x: number; y: number }[]>([]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useSpring(cursorX, { stiffness: 150, damping: 15 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 15 });

  let dotId = 0;

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);

      dotId++;
      const newDot = { id: dotId, x: e.clientX, y: e.clientY };
      setTrailDots((prev) => [...prev.slice(-12), newDot]);
    },
    [cursorX, cursorY]
  );

  useEffect(() => {
    // Only on desktop
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
    }, 80);
    return () => clearTimeout(timer);
  }, [trailDots]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Trail dots */}
      {trailDots.map((dot, i) => {
        const opacity = ((i + 1) / trailDots.length) * 0.4;
        const size = 3 + ((i + 1) / trailDots.length) * 3;
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
              background: `rgb(var(--primary))`,
              transition: "opacity 0.3s ease-out",
            }}
          />
        );
      })}

      {/* Inner dot */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: -4,
          top: -4,
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          background: `rgb(var(--primary))`,
          mixBlendMode: "difference",
        }}
        animate={{
          scale: clicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Outer ring — follows with spring delay */}
      <motion.div
        className="absolute rounded-full border-2"
        style={{
          left: -20,
          top: -20,
          x: ringX,
          y: ringY,
          width: 40,
          height: 40,
          borderColor: `rgb(var(--primary) / 0.5)`,
        }}
        animate={{
          scale: hovering ? 1.8 : clicking ? 0.8 : 1,
          borderColor: hovering
            ? `rgb(var(--secondary) / 0.8)`
            : `rgb(var(--primary) / 0.5)`,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
