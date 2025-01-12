import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const PricingSection = () => {
  const prices = [
    {
      title: "שיעור בודד",
      price: "₪170",
      description: "מושלם בשביל להתנסות",
      features: ["שיעור של 60 דקות", "משוב אישי", "הערכת קול"],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "חבילת 4 שיעורים",
      price: "₪600",
      description: "הבחירה המועדפת",
      features: [
        "4 שיעורים של 60 דקות",
        "מעקב אחר התקדמות",
        "חומרי תרגול",
        "תמיכה במייל",
      ],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "שיעור ניסיון",
      price: "₪75",
      description: "נסו לפני שאתם מתחייבים",
      features: ["שיעור של 30 דקות", "הערכת קול", "דיון על תוכנית לימודים"],
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