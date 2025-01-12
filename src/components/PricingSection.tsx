import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const PricingSection = () => {
  const prices = [
    {
      title: "שיעור בודד",
      price: "₪150",
      description: "שיעור פרטי, אחד על אחד, שמותאם אליכם ב100%",
      features: [
        "היכרות עם צבעים חדשים בקול",
        "הרחבת המנעד הקולי שלכם",
        "צבירת ביטחון בשירה",
        "עבודה על המסורת שלכם",
      ],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "חבילת 4 שיעורים (מומלץ)",
      price: "₪130*",
      description: "החבילה הכי משתלמת לתלמידים קבועים!",
      features: [
        "הנחה של ₪20 לשיעור",
        "היכרות עם צבעים חדשים בקול",
        "הרחבת המנעד הקולי שלכם",
        "צבירת ביטחון בשירה",
        "עבודה על המסורת שלכם",
      ],
      footnote: "*המחיר לשיעור אחד, בתשלום מראש 4 שיעורים בסך ₪520",
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "שיעור ניסיון ראשון",
      price: "חינם",
      description: "בואו לבדוק האם אני המורה עבורכם!",
      features: [
        "בדיקת המנעד הקולי שלכם",
        "היכרות אתי ועם הסטודיו הביתי שלי",
        "שיעור ללא התחייבות!",
      ],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prices.map((price, index) => (
            <PriceCard key={index} {...price} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link to="/prices">צפה בכל אפשרויות התמחור</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;