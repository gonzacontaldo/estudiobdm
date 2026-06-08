"use client";

import { motion } from "framer-motion";
import { Scale, BarChart2, MapPin } from "lucide-react";

const props = [
  {
    icon: Scale,
    title: "Integralidad",
    description:
      "Contamos con especialistas en derecho y ciencias económicas bajo un mismo estudio, brindando asesoramiento coordinado y completo.",
  },
  {
    icon: BarChart2,
    title: "Experiencia",
    description:
      "Más de 20 años de trayectoria. Nuestros socios egresaron de la UBA y se especializaron en sus áreas desde sus inicios profesionales.",
  },
  {
    icon: MapPin,
    title: "Dos sedes",
    description:
      "Presencia en CABA y Cañuelas, atendiendo clientes de Buenos Aires y el interior de la Provincia.",
  },
];

export default function ValueProps() {
  return (
    <section className="bg-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-xl"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Por qué elegirnos
            </span>
          </div>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Un estudio integral para cada etapa de tu vida profesional.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {props.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-border bg-bg p-8 rounded-sm hover:border-accent/30 transition-colors duration-300"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-surface text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
