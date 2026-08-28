"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart, Users } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/lib/use-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { iconButtonInteraction, pillInteraction } from "@/lib/motion-presets";

const orgColors = ["bg-accent-1", "bg-accent-4", "bg-accent-3", "bg-primary"];
const proGradients = [
  "from-primary to-accent-2",
  "from-accent-4 to-primary",
  "from-accent-3 to-accent-4",
  "from-accent-2 to-primary",
  "from-primary to-accent-4",
];

export function Experience() {
  const { profile, experiences, experienceIntro, experiencePhotos, ui } =
    useContent();
  const orgs = experiences.organizational;
  const left = orgs.filter((_, i) => i % 2 === 0);
  const right = orgs.filter((_, i) => i % 2 === 1);

  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={ui.experience.eyebrow} title={ui.experience.title} align="center" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base">
          {experienceIntro}
        </p>

        {/* Intro photo + connect badge */}
        <div className="mt-10 grid gap-6 sm:grid-cols-[1.5fr_1fr] sm:items-center">
          <PhotoSlot
            src={experiencePhotos.intro}
            alt={profile.name}
            gradient="from-accent-4 to-primary"
            className="aspect-video w-full sm:aspect-[4/3]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-3 rounded-[2.5rem] border-2 border-ink bg-navy px-6 py-8 text-center text-white shadow-playful"
          >
            <h3 className="font-display text-lg font-extrabold sm:text-xl">
              {ui.experience.connectHeading}
            </h3>
            <p className="text-xs text-white/80 sm:text-sm">
              {ui.experience.connectSubtitle}
            </p>
            <motion.a
              href={`mailto:${profile.email}`}
              {...iconButtonInteraction}
              className="mt-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-white/10"
              aria-label={ui.experience.emailAria}
            >
              <MessageCircleHeart size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Professional experience — horizontal photo grid */}
        <div className="diagonal-dark mt-16 rounded-3xl border-2 border-ink px-6 py-12 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.professional.map((exp, i) => (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col"
              >
                <PhotoSlot
                  src={exp.photo}
                  alt={exp.role}
                  gradient={proGradients[i % proGradients.length]}
                  className="aspect-square w-full"
                />
                <span className="mt-3 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                  {exp.role}
                </span>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-medium text-white/50">
                  <span>{exp.org}</span>
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-xs leading-relaxed text-white/70"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-primary px-5 py-2 text-sm font-bold">
                {ui.experience.experienceBadge}
              </span>
              <motion.a
                href={`mailto:${profile.email}`}
                {...pillInteraction}
                className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                {ui.experience.hireMe}
              </motion.a>
            </div>
            <h3 className="font-display text-xl font-extrabold sm:text-2xl">
              {ui.experience.professionalHeading}
            </h3>
          </div>
        </div>

        {/* Organizational experience */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            {ui.experience.organizationalPrefix}
            <span className="text-primary">{ui.experience.organizationalAccent}</span>
            {ui.experience.organizationalSuffix}
          </h3>

          {/* Hub layout */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="space-y-5">
              {left.map((exp, i) => (
                <OrgHubCard
                  key={exp.org}
                  exp={exp}
                  color={orgColors[i * 2]}
                  align="right"
                  delay={i * 0.1}
                />
              ))}
            </div>

            <PhotoSlot
              src={experiencePhotos.orgHub}
              alt={profile.name}
              gradient="from-primary to-accent-2"
              fit="contain"
              className="mx-auto aspect-square w-48 lg:w-56"
            />

            <div className="space-y-5">
              {right.map((exp, i) => (
                <OrgHubCard
                  key={exp.org}
                  exp={exp}
                  color={orgColors[i * 2 + 1]}
                  align="left"
                  delay={i * 0.1 + 0.1}
                />
              ))}
            </div>
          </div>

          {/* Per-organization detail */}
          <div className="mt-16 space-y-16">
            {orgs.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-2xl border-2 border-ink object-contain"
                    />
                  ) : (
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-ink ${orgColors[i % orgColors.length]}`}
                    >
                      <Users size={22} className="text-white" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-display text-lg font-extrabold sm:text-xl">
                      {exp.org}
                    </h4>
                    <p className="text-sm font-semibold text-primary">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                  {exp.gallery ? (
                    <div className="grid gap-4 sm:grid-cols-3">
                      {exp.gallery.map((photo) => (
                        <div key={photo.tag + photo.date} className="flex flex-col">
                          <PhotoSlot
                            src={photo.photo}
                            alt={`${photo.tag} — ${photo.caption}`}
                            gradient="from-accent-2 to-primary"
                            className="aspect-[4/3] w-full"
                          />
                          <span className="mt-2 inline-block w-fit rounded-full border border-card-border bg-card px-3 py-1 text-xs font-bold">
                            {photo.tag}
                          </span>
                          <p className="mt-1 text-xs font-semibold text-muted">
                            {photo.caption}
                          </p>
                          <p className="text-[11px] text-muted">
                            {photo.location} · {photo.date}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : exp.podcastEpisodes ? (
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {exp.podcastEpisodes.map((episode) => (
                        <div
                          key={episode.title}
                          className="flex w-40 shrink-0 flex-col gap-2"
                        >
                          <PhotoSlot
                            src={episode.photo}
                            alt={episode.title}
                            gradient="from-accent-1 to-accent-3"
                            className="aspect-square w-full"
                          />
                          <span className="text-xs font-bold text-primary">
                            {episode.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-4" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OrgHubCard({
  exp,
  color,
  align,
  delay,
}: {
  exp: { shortName: string; role: string; period: string; logo: string };
  color: string;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
      className={`flex items-center gap-3 rounded-2xl border-2 border-card-border bg-card p-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink ${color}`}
      >
        <Users size={18} className="text-white" />
      </div>
      <div>
        <h4 className="font-display text-sm font-extrabold">
          {exp.shortName}
        </h4>
        <p className="text-xs font-semibold text-muted">{exp.role}</p>
        <p className="text-[11px] text-muted">{exp.period}</p>
      </div>
    </motion.div>
  );
}
