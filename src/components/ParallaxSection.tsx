interface ParallaxSectionProps {
  image: string;
  text: string;
  buttonText: string;
  buttonType: 'whatsapp' | 'contact';
  whatsappLink?: string;
}

const WHATSAPP_LINK = "https://wa.me/972505072867?text=%D7%A9%D7%9C%D7%95%D7%9D!%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%90%D7%99%D7%AA%D7%9A%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%20%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20:)%20";

const ParallaxSection = ({
  image,
  text,
  buttonText,
  buttonType,
}: ParallaxSectionProps) => {
  const handleClick = () => {
    if (buttonType === 'whatsapp') {
      window.open(WHATSAPP_LINK, '_blank');
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-[400px] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex flex-col items-center justify-center text-white container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-in">
          {text}
        </h3>
        <button
          onClick={handleClick}
          className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
            buttonType === 'whatsapp'
              ? 'bg-[#25D366] hover:bg-[#25D366]/90'
              : 'bg-accent hover:bg-accent/90'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ParallaxSection;