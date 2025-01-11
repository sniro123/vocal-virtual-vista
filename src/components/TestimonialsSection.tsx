import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "שרה כהן",
    age: 24,
    city: "תל אביב",
    image: "/placeholder.svg",
    text: "השיעורי פיתוח קול שינו לי את החיים! קיבלתי המון ביטחון ויכולת ווקאלית.",
  },
  {
    name: "מיכאל לוי",
    age: 19,
    city: "ירושלים",
    image: "/placeholder.svg",
    text: "המורה הכי טובה שהייתה לי! השיטות עובדות באמת!",
  },
  {
    name: "אמה וילסון",
    age: 28,
    city: "חיפה",
    image: "/placeholder.svg",
    text: "ראיתי שיפור מדהים בטווח הקולי שלי ובשליטה.",
  },
  {
    name: "דניאל אברהם",
    age: 22,
    city: "רמת גן",
    image: "/placeholder.svg",
    text: "השיעורים עזרו לי להתכונן להופעות שלי בצורה מקצועית.",
  },
  {
    name: "נועה ברק",
    age: 25,
    city: "הרצליה",
    image: "/placeholder.svg",
    text: "למדתי טכניקות חדשות ומרגישה הרבה יותר בטוחה בקול שלי.",
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
          מה התלמידים שלי אומרים
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
              } mx-2`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;