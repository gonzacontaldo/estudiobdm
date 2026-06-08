"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { contableServices, juridicoServices } from "@/lib/data/services";

export default function ServicesPreview() {
  return (
    <section className="bg-surface py-20 lg:py-28">
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
                Servicios
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Todo lo que necesitás,
              <br />
              en un solo estudio.
            </h2>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors shrink-0"
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Contable */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-sm bg-bg border border-border p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-1">
                  Área
                </p>
                <h3 className="text-xl font-bold text-primary">Contable</h3>
              </div>
              <div className="h-10 w-px bg-border" />
              <p className="text-sm text-muted">{contableServices.length} servicios</p>
            </div>

            <ul className="space-y-2.5">
              {contableServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex items-center justify-between rounded-sm px-3 py-2.5 text-sm text-ink hover:bg-surface hover:text-primary transition-colors duration-150"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                href="/servicios?area=contable"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Ver área contable
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Jurídico */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-sm bg-primary border border-primary p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-accent mb-1">
                  Área
                </p>
                <h3 className="text-xl font-bold text-white">Jurídico</h3>
              </div>
              <div className="h-10 w-px bg-white/10" />
              <p className="text-sm text-white/50">{juridicoServices.length} servicios</p>
            </div>

            <ul className="space-y-2.5">
              {juridicoServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex items-center justify-between rounded-sm px-3 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors duration-150"
                  >
                    <span>{s.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/servicios?area=juridico"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-accent transition-colors"
              >
                Ver área jurídica
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
