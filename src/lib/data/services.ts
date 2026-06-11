export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: "contable" | "juridico";
  description: string;
  items: string[];
  icon: string;
}

export const services: Service[] = [
  // CONTABLES
  {
    slug: "asesoramiento-impositivo-impuestos",
    name: "Asesoramiento Impositivo",
    shortName: "Impositivo",
    category: "contable",
    description:
      "Asesoramiento integral con flexibilidad y capacidad para anticiparse a necesidades, respondiendo inquietudes y brindando planeamiento tributario para acompañar decisiones eficientes.",
    items: [
      "Inscripción de entidades ante autoridades fiscales",
      "Confección de declaraciones juradas mensuales y anuales",
      "Gestión de certificados y constancias fiscales",
      "Trámites de exención impositiva",
      "Atención de inspecciones fiscales",
      "Auditoría fiscal y ajuste por inflación",
      "Due diligence impositivo",
    ],
    icon: "calculator",
  },
  {
    slug: "contabilidad-auditoria-externa",
    name: "Contabilidad y Auditoría Externa",
    shortName: "Contabilidad y Auditoría Externa",
    category: "contable",
    description:
      "Servicios de contabilidad y auditoría externa para empresas de todos los sectores, garantizando información financiera precisa y confiable.",
    items: [
      "Registración contable mensual",
      "Confección de estados contables",
      "Auditoría de estados financieros",
      "Informes especiales de auditoría",
      "Certificaciones contables",
      "Informes para entidades financieras",
    ],
    icon: "bar-chart",
  },
  {
    slug: "auditoria-interna",
    name: "Auditoría Interna",
    shortName: "Auditoría Interna",
    category: "contable",
    description:
      "Evaluación independiente y objetiva de los controles internos, procesos y sistemas de gestión de la organización.",
    items: [
      "Evaluación de controles internos",
      "Análisis de riesgos operativos",
      "Revisión de procesos y procedimientos",
      "Informes de mejora continua",
      "Seguimiento de recomendaciones",
    ],
    icon: "shield-check",
  },
  {
    slug: "sueldos-cargas-sociales",
    name: "Sueldos y Cargas Sociales",
    shortName: "Sueldos",
    category: "contable",
    description:
      "Gestión integral de liquidaciones de sueldos y cargas sociales, asegurando cumplimiento normativo y eficiencia operativa.",
    items: [
      "Liquidación de sueldos y jornales",
      "Confección de recibos de haberes",
      "Presentación de cargas sociales",
      "Gestión de altas y bajas en AFIP/ANSES",
      "Liquidaciones finales y vacaciones",
      "Certificados de trabajo",
    ],
    icon: "users",
  },
  {
    slug: "sociedades-comerciales",
    name: "Sociedades Comerciales",
    shortName: "Sociedades",
    category: "contable",
    description:
      "Asesoramiento integral en la constitución, reorganización y disolución de sociedades comerciales.",
    items: [
      "Constitución de SRL, SA y SAS",
      "Modificación de contratos sociales",
      "Aumentos y reducciones de capital",
      "Fusiones y escisiones",
      "Disolución y liquidación societaria",
    ],
    icon: "building",
  },
  {
    slug: "etica-compliance",
    name: "Ética & Compliance",
    shortName: "Compliance",
    category: "contable",
    description:
      "Programas de integridad y cumplimiento normativo para empresas que operan en entornos regulados.",
    items: [
      "Diseño e implementación de programas de compliance",
      "Prevención de lavado de activos (UIF)",
      "Políticas de integridad corporativa",
      "Capacitaciones al personal",
      "Canales de denuncia internos",
    ],
    icon: "check-circle",
  },

  // JURÍDICOS
  {
    slug: "inmobiliario-compraventa-usucapion",
    name: "Asesoramiento Inmobiliario",
    shortName: "Inmobiliario",
    category: "juridico",
    description:
      "Te asesoramos brindándote toda la información necesaria para que logres comprar, vender o alquilar tus propiedades con éxito. Trabajamos en colaboración con escribanos, martilleros, tasadores y agrimensores especializados.",
    items: [
      "Confección y negociación de contratos",
      "Regularizaciones dominiales y usucapión",
      "Estudio de títulos",
      "Procesos de desalojos",
      "Compraventa, comodato, locación y servidumbres",
    ],
    icon: "home",
  },
  {
    slug: "sucesiones",
    name: "Sucesiones",
    shortName: "Sucesiones",
    category: "juridico",
    description:
      "Asesoramiento en sucesiones y planificación hereditaria, con el objetivo de completar los trámites sucesorios de manera eficiente.",
    items: [
      "Análisis de requisitos documentales",
      "Gestión de partidas y títulos de propiedad",
      "Testamentos y cesiones de derechos hereditarios",
      "Honorarios flexibles con gastos mínimos de apertura",
      "Planificación hereditaria anticipada",
    ],
    icon: "scroll",
  },
  {
    slug: "laboral-recursos-humanos",
    name: "Laboral",
    shortName: "Laboral",
    category: "juridico",
    description:
      "Asesoramiento legal en materia laboral tanto para empleadores como para trabajadores, con foco en la prevención y resolución de conflictos.",
    items: [
      "Asesoramiento en relaciones laborales",
      "Defensa en juicios laborales",
      "Confección de contratos de trabajo",
      "Intimaciones y telegramas",
      "Acuerdos de desvinculación y homologaciones",
    ],
    icon: "briefcase",
  },
  {
    slug: "divorcios-familia-adopcion",
    name: "Familia",
    shortName: "Familia",
    category: "juridico",
    description:
      "Acompañamiento jurídico en procesos familiares con enfoque humano y profesional.",
    items: [
      "Divorcios vincular y por presentación conjunta",
      "Alimentos y régimen de visitas",
      "Adopciones",
      "Violencia familiar",
      "Filiación y reconocimiento",
    ],
    icon: "heart",
  },
  {
    slug: "previsional-jubilaciones",
    name: "Previsional",
    shortName: "Previsional",
    category: "juridico",
    description:
      "Gestión de trámites jubilatorios y previsionales ante ANSES y organismos relacionados.",
    items: [
      "Jubilaciones y pensiones",
      "Reconocimiento de servicios",
      "Moratorias previsionales",
      "Reajustes jubilatorios",
      "Pensiones por fallecimiento",
    ],
    icon: "clock",
  },
  {
    slug: "contratos-civiles-comerciales",
    name: "Contratos",
    shortName: "Contratos",
    category: "juridico",
    description:
      "Redacción, revisión y negociación de contratos civiles y comerciales adaptados a cada necesidad.",
    items: [
      "Contratos de compraventa",
      "Contratos de locación de servicios y obra",
      "Contratos de distribución y franquicia",
      "Convenios de confidencialidad (NDA)",
      "Revisión y análisis de contratos",
    ],
    icon: "file-text",
  },
  {
    slug: "gestoria-integral",
    name: "Gestoría Integral",
    shortName: "Gestoría",
    category: "juridico",
    description:
      "Gestión de trámites administrativos ante organismos públicos y privados.",
    items: [
      "Trámites ante AFIP, ANSES, Rentas",
      "Gestión de habilitaciones municipales",
      "Trámites registrales",
      "Legalizaciones y apostillas",
      "Trámites migratorios",
    ],
    icon: "clipboard",
  },
  {
    slug: "marcas-comerciales",
    name: "Marcas Comerciales",
    shortName: "Marcas",
    category: "juridico",
    description:
      "Registro y protección de marcas comerciales ante el INPI y en el exterior.",
    items: [
      "Búsqueda de antecedentes marcarios",
      "Solicitud de registro de marca",
      "Renovaciones y transferencias",
      "Oposiciones y nulidades",
      "Marcas internacionales (Protocolo de Madrid)",
    ],
    icon: "tag",
  },
];

export const contableServices = services.filter((s) => s.category === "contable");
export const juridicoServices = services.filter((s) => s.category === "juridico");
