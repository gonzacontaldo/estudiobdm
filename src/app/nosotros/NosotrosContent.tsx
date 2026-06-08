"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/data/team";
import CTABand from "@/components/home/CTABand";

export default function NosotrosContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                El estudio
              </span>
            </div>
            <h1 className="mb-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl">
              Abogados y contadores
              <br />
              bajo un mismo estudio.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/60">
              Desde hace más de 20 años, asesoramos integralmente a personas,
              empresas y profesionales para tomar decisiones correctas en el
              momento adecuado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="bg-bg py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
                Integralidad como valor diferencial
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted">
                <p>
                  BDM nació de la convicción de que las decisiones más
                  importantes de una empresa o persona requieren una visión
                  simultánea del plano jurídico y el contable.
                </p>
                <p>
                  Nuestro equipo reúne abogados y contadores con formación en
                  la UBA y especializaciones reconocidas, que trabajan de
                  manera coordinada para brindar respuestas completas a cada
                  consulta.
                </p>
                <p>
                  Con sedes en CABA y Cañuelas, atendemos tanto a clientes de
                  Buenos Aires como del interior de la provincia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: "+20", label: "años de experiencia" },
                { value: "5", label: "socios especializados" },
                { value: "2", label: "sedes en Buenos Aires" },
                { value: "14", label: "servicios especializados" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-sm border border-border p-6"
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Socios
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Conocé al equipo
            </h2>
          </motion.div>

          <div className="space-y-6">
            {team.map((member, i) => (
              <motion.article
                key={member.id}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group flex gap-6 rounded-sm border border-border bg-bg p-6 hover:border-accent/30 transition-colors duration-300 sm:gap-8 sm:p-8"
              >
                {/* Photo placeholder */}
                <div className="h-20 w-20 shrink-0 rounded-sm bg-surface flex items-center justify-center sm:h-24 sm:w-24">
                  <span className="text-2xl font-light text-muted/40 select-none">
                    {member.name
                      .split(" ")
                      .filter((_, i) => i < 2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                        {member.role}
                      </p>
                      <h3 className="text-lg font-bold text-primary">
                        {member.title} {member.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted mb-3">{member.education}</p>

                  <p className="text-sm leading-relaxed text-muted mb-4">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-muted/70">{member.matricula}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sedes */}
      <section className="bg-bg py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Dónde encontrarnos
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary sm:text-4xl">
              Nuestras sedes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                city: "Buenos Aires",
                zone: "C.A.B.A.",
                address: "Tucumán 1585, Piso 6º Dto. B",
                phone: "(11) 2125-0481",
                tel: "+541121250481",
              },
              {
                city: "Cañuelas",
                zone: "Prov. Buenos Aires",
                address: "Cnel. Brandsen 938",
                phone: "(2226) 432739 / 433545",
                tel: "+5422264327399",
              },
            ].map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-sm border border-border bg-bg p-8 hover:border-accent/30 transition-colors duration-300"
              >
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-1">
                  {office.zone}
                </p>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {office.city}
                </h3>
                <p className="text-sm text-ink mb-2">{office.address}</p>
                <a
                  href={`tel:${office.tel}`}
                  className="text-sm text-muted hover:text-primary transition-colors"
                >
                  Tel. {office.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
