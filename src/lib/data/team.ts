export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  specialties: string[];
  education: string;
  matricula: string;
  bio: string;
  photo?: string;
}

export const team: TeamMember[] = [
  {
    id: "diego-baus",
    name: "Diego Alberto Baus",
    title: "Cdor.",
    role: "Socio Fundador",
    specialties: ["Impositivo", "Contabilidad", "Auditoría"],
    education: "Contador Público Nacional — UBA",
    matricula: "Matriculado CPCE desde 2005",
    bio: "Amplia experiencia en asesoramiento contable e impositivo a empresas comerciales, agropecuarias, financieras, exportadoras e industriales.",
  },
  {
    id: "victoria-duhalde",
    name: "María Victoria Duhalde",
    title: "Cra.",
    role: "Socia Fundadora",
    specialties: ["Auditoría Interna", "Ética & Compliance"],
    education: "Contadora Pública Nacional — UBA (Magna Cum Laude)",
    matricula: "Matriculada CPCE desde 2007",
    bio: "Especialista en auditoría interna. Certificado internacional en Ética y Compliance (Universidad del Cema, 2018).",
  },
  {
    id: "mercedes-del-valle",
    name: "María Mercedes del Valle",
    title: "Dra.",
    role: "Socia",
    specialties: ["Laboral", "Societario", "Previsional"],
    education: "Abogada — UBA",
    matricula: "Matriculada CALP desde 2008 · Fuero Federal desde 2016",
    bio: "Especialista en asesoría laboral, comercial, societaria, contractual y previsional. Asesora a empresas comerciales, agropecuarias, industriales y de servicios.",
  },
  {
    id: "marcelo-baus",
    name: "Marcelo Héctor Baus",
    title: "Cdor.",
    role: "Socio",
    specialties: ["Contabilidad", "Impositivo", "Sueldos"],
    education: "Contador Público Nacional — UBA",
    matricula: "Matriculado CPCE",
    bio: "Experiencia en asesoramiento contable e impositivo en múltiples sectores empresariales.",
  },
];
