import type { Metadata } from "next";
import NosotrosContent from "./NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé al equipo de BDM. Cinco socios especialistas en derecho y ciencias económicas con más de 20 años de trayectoria en Buenos Aires.",
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
