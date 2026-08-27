"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { useContent } from "@/lib/use-content";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhotoSlot } from "@/components/ui/photo-slot";
import { buttonInteraction } from "@/lib/motion-presets";

const courseColors: Record<string, string> = {
  "accent-1": "bg-accent-1",
  "accent-2": "bg-accent-2",
  "accent-3": "bg-accent-3",
  "accent-4": "bg-accent-4",
  primary: "bg-primary",
};

export function About() {
  const { profile, aboutPhotos, highlights, relatedCourses, education, ui } =
    useContent();

  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={ui.about.eyebrow} title={ui.about.title} />

        <div className="mt-12 grid gap-10 md:grid-cols-5 md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <PhotoSlot
              src={aboutPhotos.bio}
              alt={profile.name}
              className="aspect-[4/5] w-full max-w-xs"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted">{profile.bio}</p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
              <MapPin size={16} />
              {profile.location}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={profile.resumeUrl}
                {...buttonInteraction}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-playful-sm"
              >
                {ui.about.cvLabel}
              </motion.a>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-card-border bg-card p-4"
                >
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt=""
                      width={28}
                      height={28}
                      className="h-7 w-auto object-contain"
                    />
                  ) : (
                    <BadgeCheck size={18} className="text-primary" />
                  )}
                  <h4 className="font-display mt-2 text-sm font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <div className="mt-16 grid gap-8 md:grid-cols-5 md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <PhotoSlot
              src={aboutPhotos.education}
              alt={profile.name}
              gradient="from-accent-4 to-primary"
              className="aspect-[4/5] w-full max-w-xs"
            />
          </motion.div>

          <div className="md:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4 }}
              className="font-display text-xl font-bold"
            >
              {ui.about.educationHeading}
            </motion.h3>
            <div className="mt-6 space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-4 rounded-2xl border-2 border-ink bg-card p-6 shadow-playful-sm"
                >
                  {edu.logo ? (
                    <Image
                      src={edu.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-xl border-2 border-ink object-contain"
                    />
                  ) : (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-4 border-2 border-ink">
                      <GraduationCap size={20} />
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h4 className="font-display font-bold">{edu.school}</h4>
                      <span className="text-xs font-semibold text-muted">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-primary">
                      {edu.program}
                    </p>
                    {edu.detail && (
                      <p className="mt-1 text-sm italic text-muted">
                        {edu.detail}
                      </p>
                    )}
                    <p className="mt-1 text-sm font-medium">{edu.grade}</p>
                    {edu.note && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {edu.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* My Related Course — wheel layout */}
        <div className="mt-20">
          <h3 className="font-display text-center text-xl font-bold">
            {ui.about.relatedCourseHeading}
          </h3>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="space-y-5">
              {relatedCourses
                .filter((_, i) => i % 2 === 0)
                .map((course, i) => (
                  <CourseCard
                    key={course.title}
                    course={course}
                    number={i * 2 + 1}
                    align="right"
                    delay={i * 0.1}
                  />
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-card text-center font-display text-sm font-extrabold leading-tight shadow-playful-sm lg:h-36 lg:w-36"
            >
              {ui.about.relatedCourseWheelLine1}
              <br />
              {ui.about.relatedCourseWheelLine2}
            </motion.div>

            <div className="space-y-5">
              {relatedCourses
                .filter((_, i) => i % 2 === 1)
                .map((course, i) => (
                  <CourseCard
                    key={course.title}
                    course={course}
                    number={i * 2 + 2}
                    align="left"
                    delay={i * 0.1 + 0.1}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseCard({
  course,
  number,
  align,
  delay,
}: {
  course: { title: string; description: string; color: string };
  number: number;
  align: "left" | "right";
  delay: number;
}) {
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
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink text-xs font-extrabold text-white ${
          courseColors[course.color] ?? "bg-primary"
        }`}
      >
        {number}
      </div>
      <div>
        <h4 className="font-display text-sm font-bold">{course.title}</h4>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {course.description}
        </p>
      </div>
    </motion.div>
  );
}
