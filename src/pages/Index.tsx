import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

const parallaxContent = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    text: "גלה את הקול הייחודי שלך",
    buttonText: "התחל את המסע",
    buttonType: "contact" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    text: "הפוך את החלום למציאות",
    buttonText: "צור קשר בוואטסאפ",
    buttonType: "whatsapp" as const,
    whatsappLink: "https://wa.me/your-number",
  },
  {
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    text: "שחרר את הפוטנציאל הקולי שלך",
    buttonText: "קבע שיעור ניסיון",
    buttonType: "contact" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main className="pt-[180px]">
        <ParallaxSection {...parallaxContent[0]} />
        <AboutSection />
        <ParallaxSection {...parallaxContent[1]} />
        <PricingSection />
        <ParallaxSection {...parallaxContent[2]} />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;