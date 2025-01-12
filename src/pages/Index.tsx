import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

const parallaxContent = [
  {
    image: "/lovable-uploads/0b952dc5-3a99-4f97-b963-35120ac7fb65.png",
    text: "ללמוד לפגוע בכל תו, לשיר בביטחון, ולהדהים את הקהל עם הקול שלכם.",
    buttonText: "התחל את המסע",
    buttonType: "contact" as const,
  },
  {
    image: "/lovable-uploads/46f72555-9c77-44bb-a8e9-cc8098b6acc8.png",
    text: "פיתוח קול שלא מחפש להגיד לכם בדיוק איך לשיר, רק להדהים אתכם עם צבעים חדשים ואתם כבר תבחרו מתי להשתמש בהם.",
    buttonText: "צור קשר בוואטסאפ",
    buttonType: "whatsapp" as const,
    whatsappLink: "https://wa.me/your-number",
  },
  {
    image: "/lovable-uploads/21ea5fd3-13cd-42b5-be64-662729293ea9.png",
    text: "תמצאו את הקול האמיתי שלכם באמצעות תרגילי פיתוח קול שילמדו אתכם להכיר את שפתות הקול וכל מה שסביבם.",
    buttonText: "קבע שיעור ניסיון",
    buttonType: "contact" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        <div className="border-y border-black">
          <ParallaxSection {...parallaxContent[0]} />
        </div>
        <AboutSection />
        <div className="border-y border-black">
          <ParallaxSection {...parallaxContent[1]} />
        </div>
        <PricingSection />
        <div className="border-y border-black">
          <ParallaxSection {...parallaxContent[2]} />
        </div>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;