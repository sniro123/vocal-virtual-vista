import { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "שרה כהן",
    age: 24,
    city: "תל אביב",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "השיעורי פיתוח קול שינו לי את החיים! קיבלתי המון ביטחון ויכולת ווקאלית. אני מרגישה שהקול שלי השתפר פלאים ואני יכולה להופיע בביטחון מלא.",
  },
  {
    name: "מיכאל לוי",
    age: 19,
    city: "ירושלים",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "המורה הכי טובה שהייתה לי! השיטות עובדות באמת! תוך חודשיים ראיתי שיפור משמעותי בטווח הקולי שלי.",
  },
  {
    name: "אמה וילסון",
    age: 28,
    city: "חיפה",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "ראיתי שיפור מדהים בטווח הקולי שלי ובשליטה. המורה מקצועית, סבלנית ומעניקה יחס אישי. ממליצה בחום!",
  },
  {
    name: "דניאל אברהם",
    age: 22,
    city: "רמת גן",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "השיעורים עזרו לי להתכונן להופעות שלי בצורה מקצועית. למדתי טכניקות נשימה חדשות ודרכים לשמור על הקול.",
  },
  {
    name: "נועה ברק",
    age: 25,
    city: "הרצליה",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "למדתי טכניקות חדשות ומרגישה הרבה יותר בטוחה בקול שלי. השיעורים תמיד מהנים ומאתגרים במידה הנכונה.",
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
              transform: `translateX(${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0"
                style={{ width: `${100 / testimonials.length}%` }}
              >
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