interface ParallaxSectionProps {
  image: string;
  text: string;
  buttonText: string;
  buttonType: 'whatsapp' | 'contact';
  whatsappLink?: string;
}

const ParallaxSection = ({
  image,
  text,
  buttonText,
  buttonType,
  whatsappLink,
}: ParallaxSectionProps) => {
  const handleClick = () => {
    if (buttonType === 'whatsapp' && whatsappLink) {
      window.open(whatsappLink, '_blank');
    } else {
      // Handle contact form
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