"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Brain,
  ClipboardList,
  LineChart,
  MessagesSquare,
  UsersRound,
  Workflow,
  FileSearch,
  ShoppingBag,
  FileStack,
  Video,
} from "lucide-react";
import { useContent } from "@/lib/use-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { handleChameleonMove } from "@/lib/chameleon";

const softIcons = [Brain, Workflow, ClipboardList, UsersRound, LineChart, MessagesSquare];
const softColors = ["accent-3", "accent-4", "accent-1", "primary", "accent-2", "accent-4"];

const bnspIcons = [FileSearch, ShoppingBag, FileStack];
const bnspColors = ["bg-navy", "bg-navy", "bg-primary"];

export function Skills() {
  const { skills, toolLogos, bnspActivities, bnspThumbnail, ui } = useContent();
  const left = skills.soft.filter((_, i) => i % 2 === 0);
  const right = skills.soft.filter((_, i) => i % 2 === 1);

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={ui.skills.eyebrow} title={ui.skills.title} align="center" />

        {/* Soft skills — wheel layout */}
        <div className="mt-14">
          <h3 className="font-display text-center text-xl font-bold">
            {ui.skills.softHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            {ui.skills.softSubtitle}
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="space-y-5">
              {left.map((skill, i) => {
                const Icon = softIcons[i * 2];
                return (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    Icon={Icon}
                    color={softColors[i * 2]}
                    align="right"
                    delay={i * 0.1}
                  />
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              onPointerMove={handleChameleonMove}
              className="chameleon mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card font-display text-lg font-extrabold shadow-playful-sm lg:h-36 lg:w-36"
            >
              {ui.skills.wheelCenter}
            </motion.div>

            <div className="space-y-5">
              {right.map((skill, i) => {
                const Icon = softIcons[i * 2 + 1];
                return (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    Icon={Icon}
                    color={softColors[i * 2 + 1]}
                    align="left"
                    delay={i * 0.1 + 0.1}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Hard skills — navy tiles */}
        <div className="mt-20">
          <h3 className="font-display text-center text-xl font-bold">
            {ui.skills.hardHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            {ui.skills.hardSubtitle}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.hard.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                onPointerMove={handleChameleonMove}
                className="chameleon bg-navy flex items-center justify-center rounded-2xl border-2 border-ink px-5 py-7 text-center shadow-playful-sm"
              >
                <span className="font-display text-sm font-bold text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-20">
          <h3 className="font-display text-center text-xl font-bold">
            {ui.skills.toolsHeading}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            {ui.skills.toolsSubtitle}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
            {toolLogos.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                onPointerMove={handleChameleonMove}
                className="chameleon flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-card-border bg-canvas p-5"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
                <span className="text-center text-xs font-semibold">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BNSP certification activities */}
        <div className="diagonal-dark mt-20 rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {ui.skills.bnspEyebrow}
          </span>
          <h3 className="font-display mt-2 text-2xl font-extrabold">
            {ui.skills.bnspHeading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            {ui.skills.bnspSubtitle}
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-4">
              {bnspActivities.map((item, i) => {
                const Icon = bnspIcons[i];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    onPointerMove={handleChameleonMove}
                    className="chameleon flex gap-4 rounded-2xl bg-white/5 p-4"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bnspColors[i]}`}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{item.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              onPointerMove={handleChameleonMove}
              className="chameleon relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            >
              {bnspThumbnail ? (
                <Image
                  src={bnspThumbnail}
                  alt="BNSP certification activity"
                  fill
                  className="object-cover"
                />
              ) : (
                <Video size={32} className="text-white/30" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  Icon,
  color,
  align,
  delay,
}: {
  skill: { name: string; description: string };
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  align: "left" | "right";
  delay: number;
}) {
  const colorClass: Record<string, string> = {
    "accent-1": "bg-accent-1",
    "accent-2": "bg-accent-2",
    "accent-3": "bg-accent-3",
    "accent-4": "bg-accent-4",
    primary: "bg-primary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      onPointerMove={handleChameleonMove}
      className={`chameleon flex items-start gap-3 rounded-2xl border-2 border-card-border bg-card p-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-ink ${colorClass[color] ?? "bg-primary"}`}
      >
        <Icon size={18} />
      </div>
      <div>
        <h4 className="font-display text-sm font-bold">{skill.name}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
}
