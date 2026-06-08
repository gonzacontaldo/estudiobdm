import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { contableServices, juridicoServices } from "@/lib/data/services";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-2xl font-bold tracking-widest text-white">
                BDM
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-accent-light font-medium">
                Abogados & Contadores
              </p>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Asesoramiento integral a personas, empresas y profesionales en
              materia contable y jurídica.
            </p>
          </div>

          {/* Servicios contables */}
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              Contable
            </p>
            <ul className="space-y-2">
              {contableServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios jurídicos */}
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              Jurídico
            </p>
            <ul className="space-y-2">
              {juridicoServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
              Contacto
            </p>
            <div className="space-y-4">
              <div className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium text-white/90">CABA</p>
                  <p className="text-sm text-white/60">
                    Tucumán 1585, Piso 6º Dto. B
                  </p>
                  <a
                    href="tel:+541121250481"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    (11) 2125-0481
                  </a>
                </div>
              </div>
              <div className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-xs font-medium text-white/90">Cañuelas</p>
                  <p className="text-sm text-white/60">Cnel. Brandsen 938</p>
                  <a
                    href="tel:+5422264327399"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    (2226) 432739
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-5 sm:flex-row">
          <p className="text-xs text-white/40">
            © {YEAR} BDM Abogados & Contadores. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/nosotros"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
