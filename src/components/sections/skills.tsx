"use client";

import { motion } from "framer-motion";
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
import { skills, bnspActivities } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const softIcons = [Brain, Workflow, ClipboardList, UsersRound, LineChart, MessagesSquare];
const softColors = ["accent-3", "accent-4", "accent-1", "primary", "accent-2", "accent-4"];

const bnspIcons = [FileSearch, ShoppingBag, FileStack];
const bnspColors = ["bg-navy", "bg-navy", "bg-primary"];

export function Skills() {
  const left = skills.soft.filter((_, i) => i % 2 === 0);
  const right = skills.soft.filter((_, i) => i % 2 === 1);

  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="What I bring to the table" align="center" />

        {/* Soft skills — wheel layout */}
        <div className="mt-14">
          <h3 className="font-display text-center text-xl font-bold">
            My Soft Skill
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            Core abilities that support my work across people, business, and
            strategic initiatives.
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
              className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card font-display text-lg font-extrabold shadow-playful-sm lg:h-36 lg:w-36"
            >
              SKILLS
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
            My Hard Skill
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            Practical skills built across human capital, business
            development, and strategic project work.
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
                className="bg-navy flex items-center justify-center rounded-2xl border-2 border-ink px-5 py-7 text-center shadow-playful-sm"
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
            My Tools
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            Software and platforms I use to plan, execute, and present my
            work across projects.
          </p>
          <div className="mt-8 rounded-3xl border-2 border-card-border bg-card p-6 sm:p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-default rounded-2xl border-2 border-card-border bg-canvas px-5 py-2.5 text-sm font-semibold hover:border-primary hover:bg-primary/10"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* BNSP certification activities */}
        <div className="diagonal-dark mt-20 rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            News
          </span>
          <h3 className="font-display mt-2 text-2xl font-extrabold">
            BNSP Certification Project Activities
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            A showcase of my practical work in job analysis, HR
            administration, and recruitment procedures under BNSP
            certification.
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
                    className="flex gap-4 rounded-2xl bg-white/5 p-4"
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
              className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-black/30"
            >
              <Video size={32} className="text-white/30" />
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
      className={`flex items-start gap-3 rounded-2xl border-2 border-card-border bg-card p-4 ${
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
