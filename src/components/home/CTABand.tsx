"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5491121250481";
const WHATSAPP_MESSAGE = "Hola, quisiera consultar sobre sus servicios.";

export default function CTABand() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
            ¿Tenés una consulta?
          </p>
          <h2 className="mb-6 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Tomá la decisión correcta
            <br />
            con el asesoramiento adecuado.
          </h2>
          <p className="mb-10 max-w-lg text-base text-white/70">
            Nuestro equipo de abogados y contadores está disponible para
            orientarte en cada paso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-all duration-200 hover:bg-white/90"
            >
              Escribinos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/70 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
