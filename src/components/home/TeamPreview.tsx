"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/data/team";

export default function TeamPreview() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                El equipo
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Profesionales con
              <br />
              trayectoria comprobada.
            </h2>
          </div>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors shrink-0"
          >
            Conocer al equipo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              {/* Photo placeholder */}
              <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-sm bg-surface">
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-primary/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center text-xs font-medium text-white">
                    {member.specialties.slice(0, 2).join(" · ")}
                  </p>
                </div>
                {/* Initials placeholder — swap for <Image> when photos arrive */}
                <div className="flex h-full w-full items-center justify-center bg-surface">
                  <span className="text-3xl font-light text-muted/40 select-none">
                    {member.name
                      .split(" ")
                      .filter((_, i) => i < 2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-0.5">
                  {member.role}
                </p>
                <p className="text-sm font-semibold text-primary leading-snug">
                  {member.title} {member.name.split(" ").slice(0, 2).join(" ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Ver trayectoria completa
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
