import type { Metadata } from "next";
import ServiciosContent from "./ServiciosContent";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios contables y jurídicos integrales: impositivo, auditoría, sueldos, inmobiliario, sucesiones, laboral y más.",
};

export default function ServiciosPage() {
  return <ServiciosContent />;
}
