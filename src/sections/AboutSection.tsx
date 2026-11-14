"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import cv from "@/assets/images/cv.png";
import Image from "next/image";
import { FaReact, FaJs, FaHtml5, FaNode } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import MapImage from "@/assets/images/map.png";
import avatar from "@/assets/images/avatar.gif";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { PinContainer } from "@/components/3d-pin";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

export const AboutSection = () => {
  const [isCvOpen, setIsCvOpen] = useState(false); // State for CV modal

  const toolBoxItems = [
    { title: "React", iconType: FaReact },
    { title: "JS", iconType: FaJs },
    { title: "NextJS", iconType: RiNextjsLine },
    { title: "Html", iconType: FaHtml5 },
    { title: "Tailwind", iconType: RiTailwindCssFill },
    { title: "NodeJS", iconType: FaNode },
  ];

  const hobbies = [
    { title: "Painting", emoji: "🎨" },
    { title: "Photography", emoji: "📸" },
    { title: "Gaming", emoji: "🎮" },
    { title: "Hiking", emoji: "🥾" },
    { title: "Music", emoji: "🎶" },
    { title: "Fitness", emoji: "💪" },
    { title: "Reading", emoji: "📚" },
  ];

  return (
    <div className="pb-20 lg:py-28 mt-8 overflow-x-clip" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />

        <div className="mt-20 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* CV Card */}
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -10, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
              style={{ willChange: 'transform, opacity' }}
            >
              <Card className="h-[320px] cursor-pointer">
                <div onClick={() => setIsCvOpen(true)}>
                  <PinContainer
                    title="View my CV"
                    className="h-[320px] w-[320px]"
                  >
                    <CardHeader
                      title="My CV"
                      description="Click to view my CV."
                    />
                    <div className="w-40 mx-auto mt-2 md:mt-0">
                      <Image src={cv} alt="cv" />
                    </div>
                  </PinContainer>
                </div>
              </Card>
            </motion.div>

            {/* Toolbox */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 10, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
              style={{ willChange: 'transform, opacity' }}
            >
              <Card>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools used to craft exceptional digital experiences."
                />
                <ToolBoxItems
                  toolboxItems={toolBoxItems}
                  className="m-6 animate-move-left [animation-duration:15s]"
                />
                <ToolBoxItems
                  toolboxItems={toolBoxItems}
                  className="m-6 animate-move-right [animation-duration:15s]"
                />
              </Card>
            </motion.div>
          </div>

          {/* Hobbies & Map */}
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[320px] md:col-span-3 lg:col-span-2"
              style={{ willChange: 'transform, opacity' }}
            >
              <Card>
                <CardHeader
                  title="Beyond The Code"
                  description="Explore my interests and hobbies in the tech realm."
                />
                <ToolBoxItems
                  toolboxItems={hobbies}
                  className="m-6 animate-move-left [animation-duration:15s]"
                />
                <ToolBoxItems
                  toolboxItems={hobbies}
                  className="m-6 animate-move-right [animation-duration:15s]"
                  itemsWrapperClassName=""
                />
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 5, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-2 lg:col-span-1"
              style={{ willChange: 'transform, opacity' }}
            >
              <Card className="h-[320px] p-0 relative">
                <PinContainer
                  title="I live in India"
                  className="h-[320px] w-[280px] sm:w-[320px] md:w-[280px] lg:w-[320px] mb-8"
                >
                  <Image
                    src={MapImage}
                    alt="Map"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400">
                    <Image
                      src={avatar}
                      alt="Avatar"
                      className="size-10 rounded-full"
                    />
                  </div>
                </PinContainer>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {isCvOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-fade-in">
          <Card className="relative w-full max-w-4xl h-[88vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl p-0 ring-1 ring-white/10 bg-gray-950">
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gray-950/90 z-20">
              <div>
                <h3 className="font-bold text-white text-base sm:text-lg">My CV / Resume</h3>
                <p className="text-white/50 text-xs">Ankit Kumar Nayak • PDF Document</p>
              </div>
              <button
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setIsCvOpen(false)}
                aria-label="Close modal"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            {/* Scrollable CV Preview Area */}
            <div className="flex-1 w-full p-4 sm:p-6 overflow-y-auto flex justify-center items-start bg-gray-900/50">
              <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-white/10">
                <Image
                  src={cv}
                  alt="CV"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Bottom Actions Bar - Solid contrast, non-overlapping */}
            <div className="px-6 py-4 border-t border-white/10 bg-gray-950/95 flex flex-wrap items-center justify-center sm:justify-between gap-3 z-20">
              <span className="text-xs text-white/50 hidden sm:inline-block">
                File: <span className="text-purple-400 font-mono">Ankit_Kumar_Nayak_Resume.pdf</span> (114 KB)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="/Ankit_Kumar_Nayak_Resume.pdf"
                  download="Ankit_Kumar_Nayak_Resume.pdf"
                  className="relative inline-flex h-11 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-xl"
                >
                  <span
                    className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#7e22ce_50%,#c084fc_100%)]"
                    style={{ animation: "spin 4s linear infinite" }}
                  />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold tracking-wide text-white backdrop-blur-md">
                    Download PDF ↓
                  </span>
                </a>
                <a
                  href="/Ankit_Kumar_Nayak_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition"
                >
                  Open in Tab ↗
                </a>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
