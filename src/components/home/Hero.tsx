"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-primary">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Estudio BDM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Asesoramiento
            <br />
            <span className="font-serif font-normal italic text-accent">
              contable y jurídico
            </span>
            <br />
            que acompaña
            <br />
            cada decisión.
          </motion.h1>

          {/* Subtagline */}
          <motion.p
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Asesoramos integralmente a personas, empresas y profesionales para
            tomar las decisiones correctas en el momento adecuado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-light"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              Consultar ahora
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-10"
          >
            {[
              { value: "+20", label: "años de experiencia" },
              { value: "5", label: "socios especializados" },
              { value: "2", label: "sedes en Buenos Aires" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-0.5 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
