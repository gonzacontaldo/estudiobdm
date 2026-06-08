"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contableServices, juridicoServices, type Service } from "@/lib/data/services";
import CTABand from "@/components/home/CTABand";

type Tab = "contable" | "juridico";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link
        href={`/servicios/${service.slug}`}
        className="group flex flex-col h-full rounded-sm border border-border bg-bg p-6 hover:border-accent/40 hover:shadow-sm transition-all duration-200"
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-base font-semibold text-primary leading-snug group-hover:text-accent transition-colors duration-200">
            {service.name}
          </h3>
          <ArrowRight className="h-4 w-4 text-muted shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
        </div>

        <p className="text-sm leading-relaxed text-muted flex-1 mb-5 line-clamp-3">
          {service.description}
        </p>

        <ul className="space-y-1.5">
          {service.items.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-accent" />
              <span className="text-xs text-muted">{item}</span>
            </li>
          ))}
          {service.items.length > 3 && (
            <li className="text-xs text-accent pl-5.5 font-medium">
              +{service.items.length - 3} más
            </li>
          )}
        </ul>
      </Link>
    </motion.div>
  );
}

export default function ServiciosContent() {
  const [activeTab, setActiveTab] = useState<Tab>("contable");

  const services = activeTab === "contable" ? contableServices : juridicoServices;

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Nuestros servicios
              </span>
            </div>
            <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              Todo lo que necesitás,
              <br />
              bajo un mismo estudio.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Combinamos expertise contable y jurídico para darte una visión
              integral de cada situación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs + Grid */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Tab switcher */}
          <motion.div
            initial={{ y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-10 flex items-center gap-1 rounded-sm border border-border bg-bg p-1 w-fit"
          >
            {(["contable", "juridico"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-sm px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                {tab === "contable" ? "Contable" : "Jurídico"}
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-accent rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Count label */}
          <motion.p
            key={activeTab + "-label"}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-xs font-medium text-muted uppercase tracking-widest"
          >
            {services.length} servicios — Área {activeTab === "contable" ? "Contable" : "Jurídica"}
          </motion.p>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTABand />
    </>
  );
}
