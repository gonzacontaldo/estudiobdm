export interface Office {
  id: string;
  city: string;
  shortLabel: string;
  zone: string;
  address: string;
  phone: string;
  tel: string;
  mapsQuery: string;
  hours: string;
}

export const offices: Office[] = [
  {
    id: "caba",
    city: "Buenos Aires",
    shortLabel: "CABA",
    zone: "C.A.B.A.",
    address: "Tucumán 1585, Piso 6º Dto. B",
    phone: "(11) 2125-0481",
    tel: "+541121250481",
    mapsQuery: "Tucumán 1585, C1050AAA Buenos Aires, Argentina",
    hours: "Lunes a viernes de 9 a 18 hs",
  },
  {
    id: "canuelas",
    city: "Cañuelas",
    shortLabel: "Cañuelas",
    zone: "Prov. de Buenos Aires",
    address: "Rivadavia 444, piso 1º Dto. A",
    phone: "(2226) 432739",
    tel: "+5422264327399",
    mapsQuery: "Rivadavia 444, Cañuelas, Buenos Aires, Argentina",
    hours: "Lunes a viernes de 9 a 17 hs",
  },
];

export function getOffice(id: string): Office {
  const office = offices.find((o) => o.id === id);
  if (!office) throw new Error(`Office not found: ${id}`);
  return office;
}
