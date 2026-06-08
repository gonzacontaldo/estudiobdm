"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { type Service } from "@/lib/data/services";

const WHATSAPP_NUMBER = "5491121250481";

interface Props {
  service: Service;
  related: Service[];
}

export default function ServicePageContent({ service, related }: Props) {
  const waMessage = `Hola, quisiera consultar sobre el servicio de ${service.name}.`;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const categoryLabel = service.category === "contable" ? "Contable" : "Jurídico";

  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex items-center gap-2 text-xs text-white/40"
          >
            <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-white/70 transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-white/70">{service.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Área {categoryLabel}
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              {service.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-bg py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

            {/* Left: main content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="mb-10 text-lg leading-relaxed text-muted">
                  {service.description}
                </p>

                <h2 className="mb-6 text-xl font-bold text-primary">
                  ¿En qué te ayudamos?
                </h2>

                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.07 }}
                      className="flex items-start gap-3 rounded-sm border border-border bg-bg p-4 hover:border-accent/30 transition-colors duration-200"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                      <span className="text-sm leading-relaxed text-ink">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right: sticky sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-28 space-y-4 self-start"
            >
              {/* CTA card */}
              <div className="rounded-sm border border-border bg-surface p-6">
                <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-accent">
                  ¿Necesitás este servicio?
                </p>
                <h3 className="mb-3 text-lg font-bold text-primary">
                  Consultanos sin compromiso
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">
                  Respondemos a la brevedad. Podés escribirnos por WhatsApp o
                  completar el formulario de contacto.
                </p>

                <div className="space-y-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
                    WhatsApp
                  </a>

                  <Link
                    href="/contacto"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
                  >
                    Formulario de contacto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Office contacts */}
              <div className="rounded-sm border border-border bg-bg p-6 space-y-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted">
                  Nuestras sedes
                </p>
                {[
                  { city: "CABA", phone: "(11) 2125-0481", tel: "+541121250481" },
                  { city: "Cañuelas", phone: "(2226) 432739", tel: "+5422264327399" },
                ].map((office) => (
                  <div key={office.city} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-ink">{office.city}</span>
                    <a
                      href={`tel:${office.tel}`}
                      className="flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* Back link */}
              <Link
                href="/servicios"
                className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Ver todos los servicios
              </Link>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-xl font-bold text-primary">
              Otros servicios del área {categoryLabel.toLowerCase()}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {related.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="group flex items-center justify-between rounded-sm border border-border bg-bg p-5 hover:border-accent/40 transition-all duration-200"
                  >
                    <span className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">
                      {s.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
