"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { TypingText } from "@/components/shared/typing-text";
import { MagneticButton } from "@/components/shared/magnetic-button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-20 text-center">
      {/* Photo / Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="relative mx-auto flex h-32 w-32 items-center justify-center rounded-full gradient-primary p-[3px] md:h-36 md:w-36">
          <div className="h-full w-full overflow-hidden rounded-full">
            <Image
              src="/images/profile.png"
              alt="Rupesh Bharambe"
              width={144}
              height={144}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="mb-4 text-3xl font-black text-theme-fg md:text-5xl"
      >
        {profile.name}
      </motion.h1>

      {/* Typing tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="mb-3 text-lg font-medium text-theme-fg md:text-xl"
      >
        I build{" "}
        <TypingText
          texts={profile.taglines}
          className="text-theme-secondary font-semibold"
        />
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
        className="mb-8 max-w-xl text-sm text-theme-muted md:text-base"
      >
        {profile.subtitle}
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Link href="/projects">
          <MagneticButton className="rounded-lg gradient-primary px-6 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-[rgb(var(--theme-primary))/0.3]">
            View Projects
          </MagneticButton>
        </Link>
        <MagneticButton
          as="a"
          href="/resume.pdf"
          className="rounded-lg border border-theme bg-theme-card px-6 py-3 text-sm font-semibold text-theme-fg transition-colors hover:bg-[rgb(var(--theme-muted))]"
        >
          Download Resume
        </MagneticButton>
      </motion.div>
    </section>
  );
}
