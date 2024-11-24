import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import PhotoshootCalculator from "@/components/PhotoshootCalculator";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyModelcodeSection } from "@/components/sections/WhyModelcodeSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen relative">
      {/* Background Images */}
      <div 
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: "url('/lovable-uploads/1368a7a7-6eeb-41bd-9e03-6cf54f44b5bb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          height: "100vh",
          width: "100vw"
        }}
      />
      <div 
        className="absolute inset-0 z-0 block md:hidden"
        style={{
          backgroundImage: "url('/lovable-uploads/899b484d-7aa9-418a-bed0-3d4fe1029897.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          height: "100vh",
          width: "100vw"
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <WhyModelcodeSection />
        <FeaturedWorkSection />
        
        {/* Calculator Section */}
        <section id="calculator-section" className="bg-white">
          <div className="container py-20">
            <PhotoshootCalculator />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;