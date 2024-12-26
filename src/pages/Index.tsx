import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

const parallaxContent = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    text: "Find Your Voice, Express Your Soul",
    buttonText: "Start Your Journey",
    buttonType: "contact" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    text: "Transform Your Voice Today",
    buttonText: "Chat on WhatsApp",
    buttonType: "whatsapp" as const,
    whatsappLink: "https://wa.me/your-number",
  },
  {
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    text: "Unlock Your Vocal Potential",
    buttonText: "Book a Free Trial",
    buttonType: "contact" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]">
        <AboutSection />
        <ParallaxSection {...parallaxContent[0]} />
        <PricingSection />
        <ParallaxSection {...parallaxContent[1]} />
        <TestimonialsSection />
        <ParallaxSection {...parallaxContent[2]} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;