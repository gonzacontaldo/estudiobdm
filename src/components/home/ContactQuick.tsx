"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const offices = [
  {
    city: "Buenos Aires",
    address: "Tucumán 1585, Piso 6º Dto. B",
    phone: "(11) 2125-0481",
    tel: "+541121250481",
    zone: "CABA",
  },
  {
    city: "Cañuelas",
    address: "Cnel. Brandsen 938",
    phone: "(2226) 432739",
    tel: "+5422264327399",
    zone: "Prov. Buenos Aires",
  },
];

export default function ContactQuick() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Contacto
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-primary sm:text-4xl">
              Estamos cerca,
              <br />
              donde nos necesités.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-muted">
              Dos sedes para atenderte mejor. Concertá una consulta o
              acercate directamente a cualquiera de nuestras oficinas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              Ir a contacto completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Offices */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {offices.map((office) => (
              <div
                key={office.city}
                className="flex gap-5 rounded-sm border border-border bg-bg p-6 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-surface">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-primary">{office.city}</p>
                      <p className="text-xs text-muted">{office.zone}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-ink">{office.address}</p>
                  <a
                    href={`tel:${office.tel}`}
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
