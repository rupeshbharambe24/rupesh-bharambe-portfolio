"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypingText({
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const textIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndex.current];

    if (!isDeleting) {
      // Typing forward
      charIndex.current += 1;
      setDisplayText(currentFullText.slice(0, charIndex.current));

      if (charIndex.current === currentFullText.length) {
        // Finished typing — pause then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
        return;
      }

      timeoutRef.current = setTimeout(tick, typingSpeed);
    } else {
      // Deleting
      charIndex.current -= 1;
      setDisplayText(currentFullText.slice(0, charIndex.current));

      if (charIndex.current === 0) {
        setIsDeleting(false);
        textIndex.current = (textIndex.current + 1) % texts.length;
        timeoutRef.current = setTimeout(tick, typingSpeed);
        return;
      }

      timeoutRef.current = setTimeout(tick, deletingSpeed);
    }
  }, [isDeleting, texts, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [tick, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
