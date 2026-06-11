import type { Metadata } from "next";
import ContactoContent from "./ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Estudio BDM. Sedes en CABA y Cañuelas. Escribinos por formulario, WhatsApp o teléfono y te respondemos a la brevedad.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
