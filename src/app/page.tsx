import Hero from "@/components/home/Hero";
import ValueProps from "@/components/home/ValueProps";
import ServicesPreview from "@/components/home/ServicesPreview";
import TeamPreview from "@/components/home/TeamPreview";
import CTABand from "@/components/home/CTABand";
import ContactQuick from "@/components/home/ContactQuick";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <TeamPreview />
      <CTABand />
      <ContactQuick />
    </>
  );
}
