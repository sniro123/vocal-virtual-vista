import { Button } from "@/components/ui/button";

interface PriceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  whatsappLink?: string;
  contactLink?: string;
}

const PriceCard = ({
  title,
  price,
  description,
  features,
  whatsappLink,
  contactLink,
}: PriceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:scale-105">
      <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
      <div className="text-4xl font-bold text-accent mb-4">{price}</div>
      <p className="text-secondary mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-secondary">
            <svg
              className="w-5 h-5 text-accent mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-3">
        {whatsappLink && (
          <Button
            className="w-full bg-[#25D366] hover:bg-[#25D366]/90"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            Contact via WhatsApp
          </Button>
        )}
        {contactLink && (
          <Button
            variant="outline"
            className="w-full border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => window.open(contactLink, '_blank')}
          >
            Contact Form
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceCard;