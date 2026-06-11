"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

const AREAS = [
  "Consulta general",
  "Asesoramiento contable / impositivo",
  "Asesoramiento jurídico",
  "Sociedades y trámites societarios",
  "Sucesiones y herencias",
  "Laboral y recursos humanos",
  "Otro",
];

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-sm border border-border bg-bg px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      area: String(formData.get("area") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          json.error ||
            "Ocurrió un error al enviar el mensaje. Probá de nuevo en unos minutos."
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Ocurrió un error al enviar el mensaje. Probá de nuevo en unos minutos."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start gap-4 rounded-sm border border-border bg-surface p-8 sm:p-10"
      >
        <CheckCircle2 className="h-9 w-9 text-accent" />
        <div>
          <h3 className="text-lg font-bold text-primary">¡Mensaje enviado!</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            Gracias por escribirnos. Recibimos tu consulta y te vamos a
            responder a la brevedad.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
        >
          Enviar otro mensaje
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Nombre y apellido *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(011) 1234-5678"
          />
        </div>
        <div>
          <label htmlFor="area" className="mb-1.5 block text-sm font-medium text-ink">
            Área de interés
          </label>
          <select id="area" name="area" defaultValue={AREAS[0]} className={inputClass}>
            {AREAS.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Contanos brevemente tu consulta..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-sm border border-accent/30 bg-accent/5 p-4 text-sm text-accent">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <p className="text-xs text-muted">
          * Campos obligatorios. No compartimos tu información con terceros.
        </p>
      </div>
    </form>
  );
}
