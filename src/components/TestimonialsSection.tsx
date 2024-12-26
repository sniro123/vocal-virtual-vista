import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 24,
    city: "New York",
    image: "/placeholder.svg",
    text: "The vocal coaching has transformed my singing. I've gained so much confidence!",
  },
  {
    name: "Michael Chen",
    age: 19,
    city: "Los Angeles",
    image: "/placeholder.svg",
    text: "Best vocal coach I've ever had. The techniques really work!",
  },
  {
    name: "Emma Wilson",
    age: 28,
    city: "Chicago",
    image: "/placeholder.svg",
    text: "I've seen incredible improvement in my vocal range and control.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          What My Students Say
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;