import HeroSection from "@/components/modules/home/HeroSection";
import CategorySection from "@/components/modules/home/CategorySection";
import FeaturedServicesSection from "@/components/modules/home/FeaturedServicesSection";
import TopTechniciansSection from "@/components/modules/home/TopTechniciansSection";
import TestimonialsSection from "@/components/modules/home/TestimonialsSection";
import CTASection from "@/components/modules/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedServicesSection />
      <TopTechniciansSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}