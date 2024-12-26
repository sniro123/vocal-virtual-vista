import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import PriceCard from './PriceCard';

const PricingSection = () => {
  const prices = [
    {
      title: "Single Lesson",
      price: "$50",
      description: "Perfect for trying out our lessons",
      features: ["60-minute session", "Personalized feedback", "Vocal assessment"],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "4 Lesson Package",
      price: "$180",
      description: "Most popular choice",
      features: [
        "4x 60-minute sessions",
        "Progress tracking",
        "Practice materials",
        "Email support",
      ],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
    {
      title: "Trial Lesson",
      price: "Free",
      description: "Try before you commit",
      features: ["30-minute session", "Voice assessment", "Learning plan discussion"],
      whatsappLink: "https://wa.me/your-number",
      contactLink: "#contact",
    },
  ];

  return (
    <section className="py-20 bg-warm/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prices.map((price, index) => (
            <PriceCard key={index} {...price} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link to="/prices">View All Pricing Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;