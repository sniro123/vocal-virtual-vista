import { useState } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: "זואי",
    age: 21,
    city: "תל אביב",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "כשהגעתי לשניר מאוד התקשיתי לפתוח את הקול כי מאוד חששתי שזה ישמע צעקני וצורם, שניר מאוד מקצועי, הוא הרגיע אותי ועזר לי לעשות את זה בצורה הכי מדויקת ונכונה לקול שלי, הוא גם מאוד קשוב וסבלני ונותן אווירה כיפית ובטוחה.\nעברתי המון מורים לפיתוח קול אבל לא הרגשתי שאני מגיעה להישגים וליעדים שקיוויתי להגיע אבל שניר ידע לפגוע במקומות המדויקים והשינוי מאז שהתחלתי ללמוד איתו הוא ענקי\nאני מאוד ממליצה פשוט מקצוען אין עליו!",
  },
  {
    name: "יונתן",
    age: 24,
    city: "רמת השרון",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "מורה מקצוען בטירוף ותומך, כשנפגשים איתו רואים שאכפת לו מהכימיה שנוצרת לא פחות מהתוכן שהוא מעביר בשיעורים.\nשניר מעביר את השיעור בהנאה וברוגע ודוחף אותך כדי להוציא ממך את התוצאות שאתה רוצה, ממליץ כמובן מנסיון!",
  },
  {
    name: "ירדן",
    age: 23,
    city: "חולון",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "הייתי בשיעור אצל שניר בפעם הראשונה. אני לומדת פיתוח קול כבר שנתיים אצל מורה אחרת ובשיעור איתו גיליתי עוד גוונים בקול שלי שלא הכרתי, למדתי איך להפיק את אותם הגוונים ויצאתי מהשיעור מופתעת ועם כלים חדשים נוספים שממשיכים ללוות אותי.\nמעבר לזה שניר סבלני, קשוב ותמיד דאג לראות שאני מבינה למה הוא מתכוון והיה לי ממש מלמד וכיף. ממליצה בחום!!",
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
        <h2 className="text-4xl font-bold text-primary text-center mb-4">
          תלמידים ממליצים
        </h2>
        <p className="text-center text-secondary mb-12">
          כל העניין הוא להתאים את השיעור לתלמיד/ה, בואו תשמעו מה יש להם להגיד :)
        </p>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={previousTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
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
          </div>

          <div className="overflow-hidden py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                  style={{ width: '100%' }}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
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
          </div>

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