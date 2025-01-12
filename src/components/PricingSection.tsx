import { Button } from "@/components/ui/button";
import PriceCard from './PriceCard';

const WHATSAPP_LINK = "https://wa.me/972505072867?text=%D7%A9%D7%9C%D7%95%D7%9D!%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%20%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20:)%20";

const PricingSection = () => {
  const prices = [
    {
      title: "שיעור בודד",
      price: "₪170",
      description: "שיעור פרטי, אחד על אחד, שמותאם אליכם ב100%",
      features: [
        "היכרות עם צבעים חדשים בקול",
        "הרחבת המנעד הקולי שלכם",
        "צבירת ביטחון בשירה",
        "עבודה על המסורת שלכם",
      ],
      whatsappLink: WHATSAPP_LINK,
    },
    {
      title: "חבילת 4 שיעורים (מומלץ)",
      price: "₪150*",
      description: "החבילה הכי משתלמת לתלמידים קבועים!",
      features: [
        "הנחה של ₪20 לשיעור",
        "היכרות עם צבעים חדשים בקול",
        "הרחבת המנעד הקולי שלכם",
        "צבירת ביטחון בשירה",
        "עבודה על המסורת שלכם",
      ],
      footnote: "*המחיר לשיעור אחד, בתשלום מראש 4 שיעורים בסך ₪600",
      whatsappLink: WHATSAPP_LINK,
    },
    {
      title: "שיעור ניסיון ראשון",
      price: "₪75",
      description: "בואו לבדוק האם אני המורה עבורכם!",
      features: [
        "בדיקת המנעד הקולי שלכם",
        "היכרות אתי ועם הסטודיו הביתי שלי",
        "שיעור ללא התחייבות!",
      ],
      whatsappLink: WHATSAPP_LINK,
    },
  ];

  return (
    <section className="py-20 bg-warm/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            מחירים וחבילות
          </h2>
          <p className="text-secondary text-lg">
            שיעור פרטי, אחד על אחד, שמותאם אליכם ב100%
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prices.map((price, index) => (
            <PriceCard key={index} {...price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;