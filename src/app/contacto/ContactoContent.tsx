"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { offices } from "@/lib/data/offices";
import ContactForm from "./ContactForm";

const WHATSAPP_NUMBER = "5491121250481";
const WHATSAPP_MESSAGE = "Hola, quisiera hacer una consulta.";

export default function ContactoContent() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
                Contacto
              </span>
            </div>
            <h1 className="mb-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              Hablemos de tu consulta.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Escribinos por el medio que prefieras y un asesor de nuestro
              equipo se va a poner en contacto a la brevedad para ayudarte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-8 bg-accent" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                    Escribinos
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  Contanos en qué te podemos ayudar
                </h2>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
                  Completá el formulario con tu consulta y te respondemos por
                  email a la brevedad. Cuanto más detalle nos des, más rápido
                  vamos a poder orientarte.
                </p>
              </div>

              <ContactForm />
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* WhatsApp CTA */}
              <div className="rounded-sm border border-border bg-surface p-6">
                <p className="mb-2 text-xs font-semibold tracking-widest uppercase text-accent">
                  ¿Preferís hablar ahora?
                </p>
                <h3 className="mb-4 text-lg font-bold text-primary">
                  Escribinos por WhatsApp
                </h3>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" fill="white" strokeWidth={0} />
                  Iniciar conversación
                </a>
              </div>

              {/* Office cards */}
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="overflow-hidden rounded-sm border border-border bg-bg hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="p-6">
                    <p className="mb-1 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                      {office.zone}
                    </p>
                    <h3 className="mb-4 text-lg font-bold text-primary">
                      {office.city}
                    </h3>

                    <div className="space-y-2.5 text-sm">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                        <span className="text-ink">{office.address}</span>
                      </div>
                      <a
                        href={`tel:${office.tel}`}
                        className="flex items-center gap-2.5 text-muted hover:text-accent transition-colors"
                      >
                        <Phone className="h-4 w-4 shrink-0" />
                        {office.phone}
                      </a>
                      <div className="flex items-center gap-2.5 text-muted">
                        <Clock className="h-4 w-4 shrink-0" />
                        {office.hours}
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
                    >
                      Cómo llegar
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapsQuery)}&output=embed`}
                    className="h-44 w-full border-0 grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de la oficina en ${office.city}`}
                  />
                </div>
              ))}
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
