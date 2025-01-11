import { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "שרה כהן",
    age: 24,
    city: "תל אביב",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "השיעורי פיתוח קול שינו לי את החיים! קיבלתי המון ביטחון ויכולת ווקאלית. אני מרגישה שהקול שלי השתפר פלאים.",
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          מה התלמידים שלי אומרים
        </h2>
        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={previousTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden">
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
                  className="w-full flex-shrink-0 px-4"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-accent' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;