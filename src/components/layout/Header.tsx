"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { contableServices, juridicoServices } from "@/lib/data/services";

const navLinks = [
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        group: "Contable",
        items: contableServices.map((s) => ({
          label: s.shortName,
          href: `/servicios/${s.slug}`,
        })),
      },
      {
        group: "Jurídico",
        items: juridicoServices.map((s) => ({
          label: s.shortName,
          href: `/servicios/${s.slug}`,
        })),
      },
    ],
  },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-bg/95 shadow-sm backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold tracking-widest text-primary">
                BDM
              </span>
              <span className="text-[10px] tracking-[0.2em] text-muted uppercase font-medium">
                Abogados & Contadores
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                      pathname.startsWith("/servicios")
                        ? "text-accent"
                        : "text-ink hover:text-primary"
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-bg border border-border shadow-xl rounded-md overflow-hidden transition-all duration-200",
                      servicesOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {link.children.map((group) => (
                        <div key={group.group} className="p-4">
                          <p className="mb-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-accent">
                            {group.group}
                          </p>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block rounded px-2 py-1 text-sm text-ink hover:bg-surface hover:text-primary transition-colors duration-150"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border bg-surface px-4 py-2.5">
                      <Link
                        href="/servicios"
                        className="text-xs text-muted hover:text-primary transition-colors"
                      >
                        Ver todos los servicios →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-accent"
                      : "text-ink hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              href="/contacto"
              className="ml-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-light"
            >
              Consultar
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center text-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-bg border-t border-border overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
          <Link
            href="/nosotros"
            className="block px-3 py-2.5 text-sm font-medium text-ink hover:text-primary hover:bg-surface rounded"
          >
            Nosotros
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-ink hover:text-primary hover:bg-surface rounded"
            >
              Servicios
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>
            {servicesOpen && (
              <div className="mt-1 ml-3 grid grid-cols-2 gap-x-4 gap-y-0.5 pb-2">
                {navLinks[1].children!.map((group) => (
                  <div key={group.group}>
                    <p className="px-2 py-1.5 text-[10px] font-semibold tracking-widest uppercase text-accent">
                      {group.group}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-2 py-1.5 text-sm text-muted hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contacto"
            className="block px-3 py-2.5 text-sm font-medium text-ink hover:text-primary hover:bg-surface rounded"
          >
            Contacto
          </Link>

          <div className="pt-2">
            <Link
              href="/contacto"
              className="block w-full rounded-sm bg-primary px-4 py-3 text-center text-sm font-medium text-white"
            >
              Consultar ahora
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
