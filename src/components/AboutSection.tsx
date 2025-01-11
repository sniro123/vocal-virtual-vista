import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 animate-fade-in">
            <img
              src="/placeholder.svg"
              alt="Vocal Coach"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6 animate-slide-in">
            <h2 className="text-4xl font-bold text-primary">About Me</h2>
            <p className="text-secondary text-lg leading-relaxed">
              With years of experience in vocal coaching, I help students discover and develop
              their unique voice. My approach combines technical expertise with personalized
              attention to bring out the best in every student.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-300">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;